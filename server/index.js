const express = require('express');
const cors = require('cors');
const app = express();

const port = 9090;

app.use(cors());
app.use(express.json());

app.post('/api/registration', (_, res) => {
    if (Math.random() > 0.5) {
        res.status(400).send({
            status: 'error',
            fields: {
                name: 'Такой пользователь уже существует',
                email: 'Такой email уже зарегистрирован',
            },
        });
    }

    res.status(200).send({
        status: 'success',
        msg: 'Ваша заявка успешно отправлена!',
    });
});

app.get('/api/ping', (_, res) => {
    res.status(200).send({
        status: 'success',
        message: 'Server is ready',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
