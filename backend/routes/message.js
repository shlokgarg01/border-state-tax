const express = require('express');
const { post_sms, get_sms } = require('../services/message');
const router = express.Router();

router.route("/post_sms").post(post_sms)
router.route("/get_sms").get(get_sms)

module.exports = router