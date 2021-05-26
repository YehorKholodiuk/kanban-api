// parse application/x-www-form-urlencoded
const bodyParserPackage = require('body-parser')
function bodyParser(app){
app.use(bodyParserPackage.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParserPackage.json());
}

module.exports = bodyParser;