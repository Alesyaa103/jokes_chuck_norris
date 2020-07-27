const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('./build'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`server works on port ${port}`));

exports.app = app;