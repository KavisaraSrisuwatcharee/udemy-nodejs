const express = require('express')
const path =require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('/about', (req,res) => {
    res.render('about',{
        title: 'welcome to about me',
        name : 'Chingly'
    })
})
app.get('/weather', (req,res) => {
    res.send({
        forecast : 'Sunny',
        location : 'Bangkok'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})