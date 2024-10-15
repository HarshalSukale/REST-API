// index.js

import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5004;

app.use(bodyParser.json());

// Use the users routes under the '/users' path
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('{TEST}!');
    res.send("Hello Homepage.");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));