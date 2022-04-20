const stripeController = require('../controllers/stripe.controller');
const { Router } = require('express');
const api = Router();

api.post('/stripe', stripeController.paymentIntent);

module.exports = api;