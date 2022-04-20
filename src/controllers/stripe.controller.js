require('dotenv').config();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const paymentIntent = async (req, res) => {
  try {

    const paymentIntentCreated = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: req.body.currency,
      payment_method_types: [req.body.paymentMethodType],
      description: req.body.description,
    });

    res.status(201).send(paymentIntentCreated);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

}

module.exports = {
  paymentIntent,
}