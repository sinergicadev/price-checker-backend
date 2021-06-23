const express = require('express');
const cors = require('cors')
const app = express();

const checkPrice = require('./routes/api/checkPrice')
app.use(express.json());
app.use(cors())
app.use(checkPrice)
app.listen(443, (err) => {
    if (err) throw err
});

