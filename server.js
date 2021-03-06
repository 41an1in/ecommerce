import express from 'express';
import path from 'path';

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});
app.listen(port, ()=> {
    console.log(`App listening at http://localhost:${port}`)
});