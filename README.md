# Телефонная книга с авторизацией (JWT + Express + TypeScript + PostgreSQL)

Веб-приложение, где пользователи могут регистрироваться, входить в систему и управлять своими контактами (CRUD).  
Переписано с JavaScript на TypeScript.

## Живая версия

👉 [https://auth-phonebook-ts.onrender.com](https://auth-phonebook-ts.onrender.com) (будет после деплоя)

## Как 🚀 запустить локально (для разработки)

1. Установи Node.js и PostgreSQL
2. Склонируй репозиторий
   ```bash
   git clone https://github.com/xVOLKx/auth-phonebook-ts.git
   ```
3. Создай базу данных 
   ```bash
   auth_phonebook_db
   ```
4. Создайте файл .env в корне проекта и добавьте:
   ```bash
   DATABASE_URL=postgresql://postgres:ТВОЙ_ПАРОЛЬ@localhost:5432/auth_phonebook_db
   ```
5. Установи зависимости:
   ```bash
   npm install
   ```
6. Скомпилируй:
   ```bash
    npm run build
   ```
7. Запусти:
   ```bash
   npm start
   ```
8. Открой в браузере: http://localhost:3000

Функции

- Регистрация и вход (JWT)
- Просмотр, добавление, удаление контактов
- Каждый пользователь видит только свои контакты

🛠️ Технологии

- Node.js + Express
- TypeScript
- PostgreSQL
- JWT, bcrypt
- HTML, CSS