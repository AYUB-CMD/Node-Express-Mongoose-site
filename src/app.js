const express = require('express');
require('./db/conn')
const User = require('./models/model')
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const hbs = require('hbs');

//setting path
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//middleware
app.use(express.urlencoded({extended:false}))//json formate parsed
app.use(express.static(staticPath));



app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)





//routing
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/contact', async(req, res) => {
    try {
        //res.send(req.body)
        const userSchema = new User(req.body);
        await userSchema.save();
        res.status(201).render('index');

     }
    catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log('server started')
})