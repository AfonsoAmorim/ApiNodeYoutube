const express = require('express');
const server = express();

server.get('/usuario', (req, res) => {
    return res.json({usuario:  'Marcos'})
});


server.listen(3001, () => {
    console.log("Servidor rodando!");
})