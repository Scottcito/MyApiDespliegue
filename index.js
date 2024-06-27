import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './config/routes.js'

const app=express()
const corsOption={
    origin:'*'//'localhost:3000'
}
//configuración de middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),router)

app.get('/',(req,res)=>res.send('Bienvenidos a mi API´s'))

const server=app.listen(process.env.PORT || 8000,()=>{
    console.log(`Hola putes, servidor al pelo ¿Half o mareos? PD: estoy en el puerto: ${server.address().port}`)
})


export default app