const express = require('express')
const app = express();
const userRoutes = require('./routes/userRoutes')
const dbRoutes = require('./routes/dbRoutes')
const Db = require('./conn')
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
    methods: "GET, POST, PUT, DELETE"
}
app.use(cors(corsOptions))
app.use(express.json({ limit: '50mb' }));  
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/user", userRoutes)
app.use("/db", dbRoutes)
app.listen(5000, async()=>{
    await Db()
    console.log('Server running on port 5000')
})