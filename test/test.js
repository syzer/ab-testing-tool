import test from 'ava'
import latency from '../routes/latency'
import _ from 'lodash'

test('bar', async t => {
    const out = latency.getData('http://localhost:3000/')

    t.truthy(_.isArray(await out))

    out.then(lat => lat.map(e => {
        t.truthy(_.isNumber(e.x))
        t.truthy(_.isNumber(e.y))
    }))
})
