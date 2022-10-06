import express from 'express';

const app = express();

app.post('/callback', (req, res) => {
    const { name, email, phone, comment, agree } = req.body;
    console.log(req.body);
})

export default app;