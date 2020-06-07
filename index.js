require('dotenv').config();
global.__basedir = __dirname;
const express = require('express');
const port = process.env.PORT || process.env.API_PORT || 3000;

// init db
// const {db} = require('iron-express-orm');

const { iron } = require('iron-express');

const app = express();

// set db in app.locals
// app.locals.db = db;

const { log } = console;

iron(app);
app.listen(port, () => log(`Server listening on http://127.0.0.1:${port}`));
