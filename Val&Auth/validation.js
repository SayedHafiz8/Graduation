const { BAD_REQUEST } = require("http-status-codes");
const validateRequest = (schema) => {
  return (req, res, next) => {
    const validation = [];
    const requestHeaders = ["body", "params", "query"];
    requestHeaders.forEach((key) => {
      if(schema[key]){
        const validateResult = schema[key].validate(req[key]);
        if (validateResult.error) {
          validation.push(validateResult.error.details[0].message);
        }
      }
    });
    if (validation.length) {
      return res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        message: `Validation : ${validation.join()}`,
      });
    } else {
      next();
    }
  };
};

module.exports = validateRequest;
