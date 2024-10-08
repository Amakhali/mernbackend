const express = require('express');
const cors = require('cors');
const blogRouter = require('./route/blog-route')

require('./db');

const app = express();
app.use(cors({origin:"https://amakhali.github.io"}));
app.use(express.json());

app.use('/api/blogs',blogRouter);

app.use('/api', (req, res) => {
    res.send('Hello World')
    
})

app.listen(5000, () => console.log('App is runnig at 5000...'));