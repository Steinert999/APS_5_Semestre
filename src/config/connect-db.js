const mongoose = require('mongoose');

exports.connect = async () => {
    console.log("STARTING CONNECTION")
    try {
        await mongoose.connect("mongodb+srv://steinert:aps5semestre@coronavirus-cluster-mhhob.mongodb.net/test?retryWrites=true&w=majority", {
        //await mongoose.connect("mongodb://aps5semestre:aps5semestre@localhost:27017/coronavirus?authSource=coronavirus&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=false", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log("CONNECTION SUCCESSFULL")
    } catch (error) {
        console.log("CONNECTION FAILED", error);
    }
}
