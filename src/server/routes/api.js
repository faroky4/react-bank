const express = require('express');
const Transaction = require('../model/transactionSchema');
const router = express.Router();

router.get('/transactions', function (request, response) {
    
    Transaction.find({}, function (err, transaction) {
        if (err)
            response.send(error)
        response.send(transaction);
      });

});

router.post('/transaction', function (request, response) {

    let addTransaction = new Transaction({
        amount: request.body.amount,
        category: request.body.category,
        vendor: request.body.vendor,

      });
    
      addTransaction.save().then((Transaction) => {});
      response.send(addTransaction);

    });

router.delete('/transaction/:id', function (request, response) {
    
    const transactionID = request.params.id
    
    Transaction.findOneAndDelete({ _id: transactionID}, function (err, transaction) {
        if(err){
            response.status(404).send('transaction not found')
        }
        else{
            response.end();
        }
        
    });
    
    
});

module.exports = router;