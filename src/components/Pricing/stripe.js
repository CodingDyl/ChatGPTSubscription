import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const customer = await stripe.customers.create({
    email: 'customer@example.com',
    source: 'tok_visa', // payment token created from Stripe Elements
  });
  
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_12345' }],
  });