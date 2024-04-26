const express = require('express');
const cors = require('cors');
const AstrologerController = require('./Controllers/astrologer.controller');
const FlowController = require('./Controllers/flowController');
const UserController = require('./Controllers/user.controller');
const { connection } = require('./Config/db');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send({ msg: 'API is Live' });
});

app.use('/user', UserController);
app.use('/astrologer', AstrologerController);
app.use('/api', FlowController);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to DB');
        console.log(`Listening on PORT: ${PORT}`);
    } catch (error) {
        console.error(error);
    }
});
