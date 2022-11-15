const mongoose = require('mongoose');
 require('dotenv').config();
const app = require('./app');

mongoose.connect(process.env.DATABASE).then(() => { 
    console.log('Database connect is successfully');
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});