const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({
        users: [
            'Tim',
            'Bob',
            'Joe',
            'Sam'
        ]
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server started on PORT ' + PORT);
});