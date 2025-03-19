require("dotenv").config();

const express = require('express');
const authRouter = require("./authRouter")
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8003;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Подключение к MongoDB успешно!");

        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
    } catch (err) {
        console.error("Ошибка при подключении к MongoDB:", err);
    }
}

start();

