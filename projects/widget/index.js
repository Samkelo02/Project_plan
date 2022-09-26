import express from 'express';
import getGhi from './public/solar/getGhi.js';



const app = express();

app.use(express.static('public'));

app.get('/api/ghi' , function  (req, res) {


    res.json({
        ghi
        
    });
});



    



const PORT = process.env.PORT || 6003;
app.listen(PORT, function() {
    console.log('api started on port ', PORT)
})