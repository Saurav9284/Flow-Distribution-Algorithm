const express = require('express')
const cors = require('cors')
const AstrologerController = require('./Controllers/astrologer.controller')
const FlowController = require('./Controllers/flowController')
const UserController = require('./Controllers/user.controller')
const {PORT,connection} = require('./Config/db') 

const app = express();

app.use(cors('*'))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send({msg:'API is Live'})
})

app.use('/user',UserController)
app.use('/astrologer',AstrologerController)
app.use('/api',FlowController)

app.listen(PORT, async ()=> {
    try {
        await connection
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
    console.log(`Listening on PORT: ${PORT}`)
})