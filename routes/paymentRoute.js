const express = require("express");
const router = express.Router();
const { AuthenticateTheUser } = require('../middleware/AuthenticateTheUser');
const { processPayment, sendStripeApiKey } = require("../controllers/paymentControllers");

router.route("/payment/process").post(processPayment)
router.route("/payment/stripeapikey").get(sendStripeApiKey)
module.exports = router;