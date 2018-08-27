const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mohamed:HYF.cph3@ds225382.mlab.com:25382/play_list', { useNewUrlParser: true }); // add it to here to fix the error { useNewUrlParser: true }
mongoose.connection.once('open', ()=>{
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=> {
  console.log("Listening on Port 4000");
});