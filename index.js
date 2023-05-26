const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

const chefs = require('./data/ChefDetails.json');
app.get('/', (req, res) => {
    res.send('chief website is running');
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(chefs);
    }
    else {
        const selectedChef = chefs.find(c => c.id == id);
        res.send(selectedChef);
    }
})

app.listen(port, () => {
    console.log(`chief website is running ${port}`);
})