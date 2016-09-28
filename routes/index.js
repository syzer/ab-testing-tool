let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {title: 'A/B testing tool'})
})

module.exports = router
