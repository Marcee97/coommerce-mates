import express from "express";
import router from "./routes/app.routes.js";
import cors from "cors";

const app = express()

app.listen(3000)
console.log('http://localhost:3000')

app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(router)





app.get('/', (req, res) => {
    res.send('HOla crack')
})