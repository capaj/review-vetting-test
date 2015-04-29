var vetting = require('../app/vet');

describe('vetting', function(){
  var r = require('./../app/review.js');
  var reviews;
  beforeEach(function(){
    reviews = r.all();
    vetting.vet(reviews);

  });

  it('vets all reviews given', function(){

    reviews.forEach(function(review){
      expect(review.vetted()).toBe(true);
    });
  });

  describe('rejection reasons', function() {
    var revs = r.all();
    vetting.vet(revs);

    it('should reject offensive words', function(){
      expect(revs[0].accepted()).toBe(false);
      expect(revs[0].rejection_reason).toEqual("Sorry you can't use bad language");

      expect(revs[5].accepted()).toBe(false);
      expect(revs[5].rejection_reason).toEqual("Sorry you can't use bad language");
    });

    it('should reject repetition', function(){
      expect(revs[2].accepted()).toBe(false);
      expect(revs[2].rejection_reason).toEqual("Sorry you can't have repetition");
    });

    it('should reject price mentions', function(){
      expect(revs[3].accepted()).toBe(false);
      expect(revs[3].rejection_reason).toEqual("Sorry you can't mention the price");
      expect(revs[8].accepted()).toBe(false);
      expect(revs[8].rejection_reason).toEqual("Sorry you can't mention the price");
    });

    it('should firstly reject for offensive words, ignoring all other causes', function(){
      expect(revs[9].accepted()).toBe(false);
      expect(revs[9].rejection_reason).toEqual("Sorry you can't use bad language");
    });

    it('should firstly reject for repetition, ignoring price mention', function(){
      expect(revs[10].accepted()).toBe(false);
      expect(revs[10].rejection_reason).toEqual("Sorry you can't have repetition");
    });
  });

  it('accepts the correct reviews', function(){

    expect(review(2).accepted()).toBe(true);
    expect(review(5).accepted()).toBe(true);
    expect(review(7).accepted()).toBe(true);
    expect(review(8).accepted()).toBe(true);
  });

  function review(review_id){
    for (var i = 0; i < reviews.length; i++) {
      if (reviews[i].id == review_id)
        return reviews[i];
    }
  }
});
