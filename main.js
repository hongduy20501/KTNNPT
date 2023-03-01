const express = require('express');
const models = require('./models');

const app = express();

app.get('/products', (req, res) => {
    res.json(models.products.listProducts());
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = models.products.getProduct(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({
            error: 'Không tìm thấy sản phẩm',
        });
    }
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = models.products.deleteProduct(id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({
            error: 'Không tìm thấy sản phẩm',
        });
    }
});

const port = +(process.env.PORT ?? 8080);
app.listen(port, () => {
    console.log(`Server chạy ở localhost:${port}`);
});
