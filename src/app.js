const express = require('express');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categories');
const postRoutes = require('./routes/post');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postRoutes);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
