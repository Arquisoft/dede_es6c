const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/Tienda?retryWrites=true&w=majority')
     .then(() => {
         console.log("Database connected")
     }).catch(()=>{
         console.error("error")
     });