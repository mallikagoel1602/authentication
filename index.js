const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
    res.send('Hello World from GET!!!')
});
app.get('/me/:name', (req, res) => {
    res.send(req.params);
});

app.get('me/hello/:name', (req, res) => {
    res.send(req.params);
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

