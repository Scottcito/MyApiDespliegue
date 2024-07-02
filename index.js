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
app.use(cors(corsOption))
app.use('/api',router)

app.get('/',(req,res)=>{
    console.log("Holaaa")
    res.send('Bienvenidos a mi API´s');
});

const PORT =process.env.PORT || 8000;
console.log(`PORT: ${PORT}`);

const server=app.listen(PORT,()=>{
    console.log(`Hola putes, servidor al pelo ¿Half o mareos? PD: estoy en el puerto: ${server.address().port}`)
})


export default app
