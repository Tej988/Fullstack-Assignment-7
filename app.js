
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const AdminRoutes = require("./Routes/AdminRoutes")
const UserRoutes = require('./Routes/UserRoutes');

app.use(express.urlencoded({extended:false}));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/Ass-7",{
    
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=>{
    console.log('your db is connected successfully');
}).catch(()=>{
    console.error('your connection is unsuccessfully')
})

app.use( UserRoutes);
app.use(AdminRoutes);


const PORT = 9000;

app.listen(PORT, ()=>{
    console.log(`SERVER IS WATCH ON ${9000}`)
})