const exampleBikeData = [{
    voltage: 10,
    rpm: 10,
    current: 10,
}];

export default (req, res) => {
    res.statusCode = 200
    res.json(exampleBikeData)
}