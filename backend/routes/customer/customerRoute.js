const router = require('express').Router();
const jwt = require('jsonwebtoken'); // For generating tokens
const cookieParser = require('cookie-parser'); // For parsing cookies
const Customer = require('../../models/customer/customerModel');

// Middleware to use cookies
router.use(cookieParser());

// Secret key for JWT (Store this in an environment variable in production)
const JWT_SECRET = 'Nk{4Q3aN>~jnD,YG.PnGmt}%vE&`)ubDck8>XBk%.s>&nd4';

// Register Customer
router.post('/', async (req, res) => {
    try {
        const savedCustomer = await Customer.create(req.body);
        res.status(200).send({ data: savedCustomer });
    } catch (err) {
        res.status(500).send({ status: err });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { cusemail, password } = req.body;
    console.log(cusemail);

    try {
        const customer = await Customer.findOne({ cusemail });

        if (customer && customer.password === password) {
            // Generate an access token
            const token = jwt.sign({ id: customer._id, cusemail: customer.cusemail }, JWT_SECRET, {
                expiresIn: '1h', // Token validity (e.g., 1 hour)
            });
            console.log(token);

            // Send token in the response body (instead of setting as a cookie)
            res.status(200).send({
                status: 'success',
                data: customer,
                token: token, // Send the token in the response body
            });
        } else {
            res.status(401).send({ msg: 'Unauthorized user' });
        }
    } catch (err) {
        res.status(500).send({ status: 'error', error: err.message });
    }
});

module.exports = router;
