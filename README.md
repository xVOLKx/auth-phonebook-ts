# <img src="images/contacts.svg" width="32"> Телефонная книга с авторизацией

Веб-приложение, где пользователи могут регистрироваться, входить в систему и управлять своими контактами (CRUD). Переписано с JavaScript на TypeScript.

[![Node.js](https://img.shields.io/badge/Node.js-18-green)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](#)
[![Docker](https://img.shields.io/badge/Docker-✓-blue)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](#)

## <img src="images/link.svg" width="24"> Живая версия

[https://auth-phonebook-ts.onrender.com](https://auth-phonebook-ts.onrender.com)

## <img src="images/features.svg" width="24"> Функции

- <img src="images/shield.svg" width="20"> Регистрация и авторизация (JWT)
- <img src="images/database.svg" width="20"> Просмотр, добавление, удаление контактов
- <img src="images/contacts.svg" width="20"> Каждый пользователь видит только свои контакты

## <img src="images/start.svg" width="24"> Запуск через Docker (рекомендуемый способ)

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

## <img src="images/install.svg" width="24"> Запуск локально (без Docker)

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

## <img src="images/tech.svg" width="24" align="vertical-align: middle"> Технологии

- <img src="images/node.svg" width="24" align="middle"> Node.js + Express
- <img src="images/typescript.svg" width="24" align="middle"> TypeScript
- <img src="images/database.svg" width="24" align="middle"> PostgreSQL
- <img src="images/shield.svg" width="24" align="middle"> JWT, bcrypt
- <img src="images/docker.svg" width="24" align="middle"> Docker / Docker Compose

## <img src="images/github.svg" width="24"> GitHub
[Перейти в репозиторий](https://github.com/xVOLKx/auth-phonebook-ts)

## <img src="images/license.svg" width="28"> Лицензия

MIT © [xVOLKx](https://github.com/xVOLKx)