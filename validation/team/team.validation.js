const { error } = require("@hapi/joi/lib/base");
const {create} = require("./team.schema");

module.exports = {
    createTeamValidation: (req, res, next) => {
        try {
            const value = create.validate(req.body);
            if(value?.error) {
                res.status(400).json({
                    success: false,
                    msg: value?.error.details[0]?.msg,
                })
            } else {
                next();
            }
        } catch {

        }
    }
}