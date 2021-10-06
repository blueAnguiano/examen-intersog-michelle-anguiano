const app = require('./backend/app');
const cors = require('cors')({origin: true});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', async (req, res) => {
    return res.status(200).json({
        timestamp: new Date().toISOString(),
        status: res.statusCode,
        message: 'Backend'
    });
});

app.use(async (req, res) => {
    return res.status(404).json({
        timestamp: new Date().toISOString(),
        status: res.statusCode,
        message: 'Lo sentimos, la ruta no existe',
        path: req.originalUrl
    })
});

module.exports = app;