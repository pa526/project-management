const joi = require("@hapi/joi");

const schema = {
create: joi.object({
        firstname: joi.string().required(),
        email: joi.string().email().required(),
        contact: joi.number().integer().min(1000000000).message("Invalid contact").max(9999999999).message("Invalid contact").required(),
        designation: joi.string().required(),
        password: joi.string().required(),
        status: joi.string().required(),
        profile: joi.string().allow('').allow(null),
        crdt_by: joi.string().required()
    }),
};

module.exports = schema;