require('dotenv').config();
const express = require('express');
const port = process.env.PORT || process.env.API_PORT || 3000;

const { iron } = require('iron-express');

const app = express();

const { log } = console;


iron(app);
app.listen(port, () => log(`Server listening on http://127.0.0.1:${port}`));
