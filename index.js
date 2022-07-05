const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(logger('dev'));
app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        return req.body._method
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('Home!!')
})


app.listen(3000, () => {
    console.log('Sever is listening on port 3000')
})

