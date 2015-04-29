var fs = require('fs');

var Review = function(options){
  var vetted = false;
  var accepted = false;
  return {
    text: options.text,
    id: options.id,
    vet: function(){
      vetted = true;
    },

    accept: function(){
      accepted = true;
    },

    reject: function(){
      accepted = false;
    },

    accepted: function(){
      return vetted && accepted;
    },

    vetted: function(){
      return vetted;
    }

  };
};

exports.Review = Review;

exports.all = function(){
  var fileContent = fs.readFileSync('./reviews.json');
  return JSON.parse(fileContent).reviews.map(function(review_hash){
    return new Review(review_hash);
  });
};
