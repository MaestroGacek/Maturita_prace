const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({ message: 'User registered successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});