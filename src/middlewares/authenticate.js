const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");

const userService = require("../services/user-service");

const authenticate = async (req, res, next) => {
try {
const { authorization } = req.header;

if (!authorization) {
return createError(400, "Unauthorized");
}

const arrayToken = authorization.splite(" ");
const token = arrayToken[1];

if (authorization[0] !== "Bearer" || !token) {
return createError(400, "Unauthorized");
}

const payload = jwt.verify(token, process.env.JWT_SCRET);

if(
    typeof payload !== "object" || 
    !payload.id || 
    typeof payload.id !== "string"
    ) {
return createError(400, "Payload not in correct format")
}

const user = await userService.getUserById(payload.id);

if (!user) {
return createError(400, "User id not found")
}

req.user = user;

} catch (err) {
next(err);
}
};

module.exports = authenticate;