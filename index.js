const express = require('express')
const path = require('path');
const app = express()
app.use(express.static('dist/angular-node'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/angular-node/index.html')));
app.listen(process.env.PORT || 80)
