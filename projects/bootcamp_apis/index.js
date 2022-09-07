import express from 'express';
import enoughAirtime from './bootcamp/enoughAirtime.js';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import wordLengths from './bootcamp/wordLengths.js'

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;

    if (!sentence) {
       res.json({
           error : 'Please send in a sentence to analyze'
       })
   }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord"  : shortestWord(sentence),
        "sum" : wordLengths(sentence)
    });
});




app.get('/api/phonebill/total', (req, res) {

    const bill = req.query.bill;
    
    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }

    res.json({
        "totalPhoneBill" : totalPhoneBill(bill),
        
    });
});

app.get('/api/phonebill/prices', (req, res) {

    const bill = req.query.bill;
    
    if(!bills) {
        res.json({
            error : 'Please enter the data to analyse'
        })
    }

    res.json({
        "totalPhoneBill" : totalPhoneBill(bill),
        
    });
});



app.post('/api/enoughairtime', (req, res) => {
    const usage = req.body.usage
    const available = req.body.available

    console.log(req, body)

    res.json({
        result : enoughAirtime(usage)
        

    })
})




const PORT = process.env.PORT || 6007;
app.listen(PORT, function() {
    console.log('api started on port ', PORT)
})