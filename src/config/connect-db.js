const mongoose = require('mongoose');

exports.connect = async () => {
    console.log("STARTING CONNECTION")
    try {
        await mongoose.connect("mongodb+srv://Lavarda:VI2107vivi@@aps-5-semestre-g6df3.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("CONNECTION SUCCESSFULL")
    } catch (error) {
        console.log("CONNECTION FAILED", error);
    }
}
