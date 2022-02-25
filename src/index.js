const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/movies',require('./routes/movies'));
app.use('/api/rickmorty',require('./routes/rick&morty'));
app.use('/api/locations',require('./routes/locations'));
app.use('/api/episodes',require('./routes/episodes'));
app.use('/api/characters',require('./routes/characters'));

app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});