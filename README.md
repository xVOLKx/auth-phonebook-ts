# 📞 Телефонная книга с авторизацией (JWT + Express + TypeScript + PostgreSQL)

Веб-приложение, где пользователи могут регистрироваться, входить в систему и управлять своими контактами (CRUD). Переписано с JavaScript на TypeScript.

## 🌐 Живая версия

[https://auth-phonebook-ts.onrender.com](https://auth-phonebook-ts.onrender.com)

## 🚀 Запуск через Docker (рекомендуемый способ)

1. Убедись, что у тебя установлен Docker и Docker Compose
2. Склонируй репозиторий
   ```bash
     git clone https://github.com/xVOLKx/auth-phonebook-ts.git
     cd auth-phonebook-ts
   ```
3. Запусти контейнеры:
   ```bash
   docker-compose up
   ```
4. Открой браузер: http://localhost:3000

## 🛠 Запуск локально (без Docker)

1. Установи Node.js и PostgreSQL
2. Склонируй репозиторий:
   ```bash
     git clone https://github.com/xVOLKx/auth-phonebook-ts.git
   ```
3. Создай базу данных:
   ```bash
     createdb auth_phonebook_db
   ```
4. Создай файл .env в корне проекта и добавь:
   ```bash
     DATABASE_URL=postgresql://postgres:ТВОЙ_ПАРОЛЬ@localhost:5432/auth_phonebook_db
     PORT=3000
     JWT_SECRET=supersecretkey
   ```
5. Установи зависимости:
   ```bash
     npm install
   ```
6. Скомпилируй TypeScript:
   ```bash
     npm run build
   ```
7. Запусти сервер:
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
- Docker / Docker Compose