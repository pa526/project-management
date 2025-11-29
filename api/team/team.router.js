const {createTeamValidation} = require("../../validation/team/team.validation");
const {getAllTeam} = require("../team/team.controller");
const router = require("express").Router();

router.get("all/", createTeamValidation, getAllTeam);

module.exports = router; 