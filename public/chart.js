const generateChart = (data = historicData) => {
    let width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height;

    let chart = nv.models.multiBarChart()
        .width(width)
        .height(height)
        .stacked(false)

    chart.dispatch.on('renderEnd', () => {
        console.log('Render Complete')
    })

    let svg = d3.select('#abTest svg').datum(data)
    svg.transition().duration(0).call(chart)

    return chart
}

axios.all([
    axios.get('/latency/a'),
    axios.get('/latency/b')
])
    .then(res => res.map(r => r.data))
    .then(data => generateChart(data.map(addDescr)))
    .catch(console.error)

const addDescr = (data, i)=> ({
    key: `Scaled ${i}`,
    nonStackable: false,
    values: data
})

const dataA = [
    {x: 50, y: 218},
    {x: 66, y: 245},
    {x: 75, y: 260},
    {x: 80, y: 271},
    {x: 90, y: 307},
    {x: 95, y: 340},
    {x: 98, y: 356},
    {x: 99, y: 363},
    {x: 100, y: 1415}
]

const dataB = [
    {x: 50, y: 469},
    {x: 66, y: 498},
    {x: 75, y: 509},
    {x: 80, y: 515},
    {x: 90, y: 527},
    {x: 95, y: 538},
    {x: 98, y: 551},
    {x: 99, y: 580},
    {x: 100, y: 3207}
]
const historicData = [dataA, dataB].map(addDescr)
console.log(historicData)

nv.addGraph({
    generate: generateChart,
    callback: (graph) => {
        nv.utils.windowResize(() => {
            let width = nv.utils.windowSize().width
            let height = nv.utils.windowSize().height
            graph.width(width).height(height)

            d3.select('#test1 svg')
                .attr('width', width)
                .attr('height', height)
                .transition().duration(0)
                .call(graph)
        })
    }
})
