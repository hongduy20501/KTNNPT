const express = require('express');
const models = require('./models');

const app = express();

app.get('/products', (req, res) => {
    res.json(models.products.listProducts());
});

const port = +(process.env.PORT ?? 8080);
app.listen(port, () => {
    console.log(`Server chạy ở localhost:${port}`);
});
