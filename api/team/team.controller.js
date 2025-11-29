const { getAllTeamService } = require("./team.service");

module.exports = {
  getAllTeam: (req, res) => {
    getAllTeamService((err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          msg: err,
        });
      } else {
        return res.status(200).json({
          success: true,
          msg: result?.length > 0 ? "Team found" : "Team not found",
          result: result,
        });
      }
    });
  },
};
