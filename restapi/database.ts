//const mongoose = require('mongoose');
//mongoose
//  .connect("mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/test", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//}).then(()=>{
//    app.listen(port, () => {console.log('Server running on port ${port}');
//});
//}).catch((err: any) => console.log(err));

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://uo269502:mpRh919kQXYXT98r@cluster0.fp7y3.mongodb.net/test",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Base de datos conectada'))
    .catch((e: any) => console.log(e));