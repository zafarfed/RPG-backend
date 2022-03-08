const router = require('express').Router()

const userCtrl = require('../controllers/user')

router.get('/player', userCtrl.GET)

router.post('/player', userCtrl.POST)

router.put('/player/:id', userCtrl.PUT)

router.delete('/player/:id', userCtrl.DELETE)

router.get('/player/:id', userCtrl.GET_ONE)

module.exports = router