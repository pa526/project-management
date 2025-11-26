const pool = require("../../config/database");

module.exports = {
    getAllTeams: callback => {
        pool.query(
            "SELECT * FROM `teams` WHERE `deleted` = ?",
            [
                process.env.NOTDELETED
            ],
            (error, result) => {
                if (error)
                    return callback(error?.sqlMessage || "Error while fetching a teams")
                else
                    return callback(null, result)
            }
        )
    },}