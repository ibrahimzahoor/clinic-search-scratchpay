const express = require("express");
const app = express();
const Routes = require('./routes');

const port = process.env.PORT || 3000;

// load our API routes
app.use('/', Routes);

app.listen(port, () => { console.log(`App running on port ${port}`) });

module.exports = app;