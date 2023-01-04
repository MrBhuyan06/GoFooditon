import express from 'express'

const app=express()

//middleware for body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) =>
{
    res.send("Hello world")
})





export default app