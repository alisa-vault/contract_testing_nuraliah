const express = require('express');
const app = express();
const itemRoutes = require('./routes/items');
const path = require('path');

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/items', itemRoutes);
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
