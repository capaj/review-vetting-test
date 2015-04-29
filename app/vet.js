var badWords = require('../data/offensive-words.json');
var currencies = require('../data/currencies.json');

module.exports = {
  vet: function(reviews) {
    reviews.forEach(function (review){

      var reject = function(reason) {
        review.reject();
        review.rejection_reason = reason;
        review.vet();
      };
      //bad language
      var index = badWords.length;
      while(index--) {
      	var badWord = badWords[index];
        if (review.text.toLowerCase().indexOf(badWord.toLowerCase()) !== -1) {
          reject("Sorry you can't use bad language");
          return;
        }
      }

      //repetition
      var repetitionMatch = review.text.match(/(.+)\1+/);
      if (repetitionMatch && repetitionMatch[0].length >= repetitionMatch[1].length * 3) {
        reject("Sorry you can't have repetition");
        return;
      }

      //price
      if (review.text.match(/[0-9]+/)) {
        index = currencies.length;
        while(index--) {
          var currency = currencies[index];
          var rx = new RegExp('(' + currency.symbol +  '|' + currency.name + ')');
          if (review.text.match(rx)) {
            reject("Sorry you can't mention the price");
            return;
          }
        }
      }

      review.accept();
      review.vet();

    });
  }
};