const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_votre_cle_stripe'); // Remplacez par votre clé secrète Stripe

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: cartItems.map(item => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: 'http://localhost:5174/?success=true',
      cancel_url: 'http://localhost:5174/?canceled=true',
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 4242;
app.listen(PORT, () => console.log(`Stripe server running on port ${PORT}`)); 