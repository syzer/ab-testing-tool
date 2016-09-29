const express = require('express')
let router = express.Router()
const _ = require('lodash')
const exec = require('child-process-promise').exec
const ts = require('type-safety')(_)

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

router.get('/', ts.hasShapeComplex({
        url: {
            type: String,
            required: true,
            from: 'query'
        }
    }), (req, res, next) =>
        getData(req.query.url)
            .then(data => res.json(data))
            .catch(onError(res))
)

module.exports = router
module.exports.getData = getData
