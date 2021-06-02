const mongoose = require ('mongoose')
const connectionString = 'mongodb+srv://admin:fhfjk4848475hf@kanban.zrgl7.mongodb.net/kanban?authSource=admin&replicaSet=atlas-qt8b0d-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true}
function dbConnection(){
mongoose.connect(connectionString,options)
    .then(() => console.log('Mongo connection OK'))
    .catch(err => console.log (err))
}
module.exports = dbConnection;
//mongodb+srv://admin:fhfjk4848475hf@kanban.zrgl7.mongodb.net/kanban?authSource=admin&replicaSet=atlas-qt8b0d-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true