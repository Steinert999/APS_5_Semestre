const mongoose = require('mongoose');

exports.connect = async () => {
    console.log("STARTING CONNECTION")
    try {
        await mongoose.connect("mongodb+srv://steinert:aps5semestre@coronavirus-cluster-mhhob.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("CONNECTION SUCCESSFULL")
    } catch (error) {
        console.log("CONNECTION FAILED", error);
    }
}
