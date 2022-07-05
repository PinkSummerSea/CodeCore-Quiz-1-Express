const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const clucksRouter = require('./routes/clucks/clucksRouter');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use((req, res, next) => {
    const username = req.cookies.username || '';
    res.locals.username = username;
    next();
})
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
    res.render('home')
})

app.get('/sign_in', (req, res) => {
    res.render('sign_in')
})

app.post('/sign_in', (req, res) => {
    const { username } = req.body;
    res.cookie('username', username);
    res.redirect('/')
})

// add sign out button in navbar
app.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/')
})

app.use('/clucks', clucksRouter);

app.listen(3000, () => {
    console.log('Sever is listening on port 3000')
})

