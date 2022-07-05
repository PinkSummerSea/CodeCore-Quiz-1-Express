const express = require('express');
const router = express.Router();
const knex = require('../../db/client');

router.get('/new', (req, res) => {
    res.render('clucks/new')
})

router.get('/', (req, res) => {
    knex('clucks')
    .orderBy('created_at', 'desc')
    .then(clucks => {
        res.render('clucks/index', { clucks })
    })
})

router.post('/', (req, res) => {
    const { content, image_url } = req.body;
    const username = req.cookies.username;
    knex('clucks')
    .insert({username, content, image_url})
    .returning('*')
    .then(() => {
        res.redirect('/clucks')
    }) 
})

module.exports = router;