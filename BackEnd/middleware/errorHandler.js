const {constants} = require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (key) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "VALIDATION_ERROR", massage: err.massage, stackTrance: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", massage: err.massage, stackTrance: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "FORBIDDEN", massage: err.massage, stackTrance: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "NOT_FOUND", massage: err.massage, stackTrance: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "SERVER_ERROR", massage: err.massage, stackTrance: err.stack });
            break;
        default:
            console.log("No Error")
            break;
    }
    
    
}; 

 module.exports = errorHandler