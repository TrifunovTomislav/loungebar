const express = require("express");
const router = express.Router();

// @route   GET api/userss/test
// @desc    Tests users poute
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users work" }));

module.exports = router;
