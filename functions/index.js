const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51HQOOQCR9gq5myvaDoP8SqqluJ9ZGFs5XYJ9kZL1wuQYrm4RbSQzylw3oBI5Nk8p9m4gztR14fvhg3mamYyhVhFS00X3oGdQs2'
); // you get this from API Keys in the DEVELOPERS TAB in stripe

//  Setting up an API

//  App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//  API Routes
app.get('/', (request, response) => {
    response.status(200).send('hello world');
});

app.post('/payments/create', async (request, response) => {
    //get the query *u can also use queryparams
    const total = request.query.total;
    console.log('Payment request received BOOOM! for this amout >>>', total);
    //send the total to stripe
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    //OK -- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//  Listen Components
exports.api = functions.https.onRequest(app);

//info Example endpoint
//http://localhost:5001/clo-15d92/us-central1/api
