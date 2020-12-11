const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res) => {
    
    setTimeout(()=>{
        res.json({'error': false, msg: 'delayed response'})
        return res
    }, 5000)
});

app.set('port', process.env.PORT || 8080);
app.listen(8080);