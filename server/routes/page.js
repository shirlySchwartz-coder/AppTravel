const express = require('express');
const router = express.Router();
const cors = require('cors');

const corsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    headers: 'content-type,'
};


router.get('/', (req, res) => {
    res.redirect("/login");
});
router.get('/api/login', (req, res) => {
    res.send("login");
});
router.get('/api/register', (req, res) => {
    res.send("register");
});

router.post('/api/login', (req, res) => {
    console.log(`you want to post : ${req.body}`);
});
router.post('/api/register', (req, res) => {
    console.log(`you want to post : ${req.body}`);
});
router.get('/vacations/:id', cors(corsOptions), (req, res, next) => {
    res.json({ msg: 'This is CORS-enabled for only example.com.' })
});
router.get('/about', (req, res) => {
    res.send('about');
});

module.exports = router;
