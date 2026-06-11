"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});
const SECRET_KEY = 'supersecretkey';
// Создание таблиц
const initDb = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT
        )
    `);
    await pool.query(`
        CREATE TABLE IF NOT EXISTS contacts (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            name TEXT,
            phone TEXT,
            email TEXT
        )
    `);
    console.log('Tables created');
};
// Регистрация
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password required');
    }
    const hashed = bcryptjs_1.default.hashSync(password, 8);
    try {
        await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashed]);
        res.send('User registered');
    }
    catch (err) {
        res.status(400).send('User already exists');
    }
});
// Логин
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    const valid = bcryptjs_1.default.compareSync(password, user.password);
    if (!valid) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});
// Middleware JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('No token provided');
    }
    const token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.user = decoded;
        next();
    });
}
// Получить контакты
app.get('/contacts', authenticateToken, async (req, res) => {
    const result = await pool.query('SELECT * FROM contacts WHERE user_id = $1', [req.user.id]);
    res.json(result.rows);
});
// Добавить контакт
app.post('/contacts', authenticateToken, async (req, res) => {
    const { name, phone, email } = req.body;
    const result = await pool.query('INSERT INTO contacts (user_id, name, phone, email) VALUES ($1, $2, $3, $4) RETURNING id', [req.user.id, name, phone, email]);
    res.json({ id: result.rows[0].id });
});
// Обновить контакт
app.put('/contacts/:id', authenticateToken, async (req, res) => {
    const { name, phone, email } = req.body;
    const result = await pool.query('UPDATE contacts SET name = $1, phone = $2, email = $3 WHERE id = $4 AND user_id = $5', [name, phone, email, req.params.id, req.user.id]);
    if (result.rowCount === 0) {
        return res.status(404).send('Contact not found');
    }
    res.send('Contact updated');
});
// Удалить контакт
app.delete('/contacts/:id', authenticateToken, async (req, res) => {
    const result = await pool.query('DELETE FROM contacts WHERE id = $1 AND user_id = $2', [req.params.id, req.user.id]);
    if (result.rowCount === 0) {
        return res.status(404).send('Contact not found');
    }
    res.send('Contact deleted');
});
// Главная страница
app.get('/', (req, res) => {
    res.redirect('/login.html');
});
const port = process.env.PORT || 3000;
initDb().then(() => {
    app.listen(port, () => {
        console.log(`Auth + Contacts app running on port ${port}`);
    });
}).catch(err => console.error(err));
