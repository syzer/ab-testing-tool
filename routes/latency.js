let express = require('express')
let router = express.Router()
let _ = require('lodash')
let exec = require('child-process-promise').exec

const extractStats = (abRes) => {
    let out = abRes.stdout.split('Percentage of the requests served within a certain time (ms)')
    out = out[1].split('(longest request)')
    out = out[0].split('\n').map(e => e.split('%').map(_.trim))
    out.shift()
    return out.map(e => ({
        x: _.parseInt(e[0]),
        y: _.parseInt(e[1])
    }))
}

const getData = (url) =>
    exec(`ab -n 500 -c 20 ${url}`)
        .then(extractStats)

const onError = res => err => {
    console.error(err)
    res.status(500).send()
}

router.get('/a', (req, res, next) =>
    getData('http://localhost:3000/')
        .then(data => res.json(data))
        .catch(onError(res))
)

router.get('/b', (req, res, next) =>
    getData('http://localhost:3000/')
        .then(data => res.json(data))
        .catch(onError(res))
)

module.exports = router
module.exports.getData = getData
