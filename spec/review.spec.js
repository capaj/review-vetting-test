describe('Review', function(){
  var reviews = require('./../app/review.js');
  describe('all', function(){
    it('loads 7 reviews from the datastore', function(){
      expect(reviews.all().length).toEqual(11);
    });

    it('creates the reviews with the correct data', function(){
      var review_text = reviews.all().map(function(r){
        return r.text;
      });
      expect(review_text).toEqual(
        [ 'A hamster made me write this.', 'This product was not great', 'I love love love it!!!!!!!!!', 'Great price, only £15 pounds, would recommend.', 'This was a great great purchase!', 'PHP PHP PHP Brainfuck the elderberry!!!', 'Sometimes I talk about price, but not here!', 'I love love it!!!!!!!!!', 'Great price, only 15 pounds, would recommend.', 'Hamster would pay only 15 pounds, and he would love love love it.', 'Paid only 15 pounds, and love love love it.' ]
      );
    });
  });

  describe('a review', function(){
    it('has text', function(){
      var review = new reviews.Review({text: 'foo bar'});
      expect(review.text).toEqual("foo bar");
    });

    it('has id', function(){
      var review = new reviews.Review({id: 17});
      expect(review.id).toEqual(17);
    });

    describe('vetting status', function(){
      it('has status', function(){
        var review = new reviews.Review({});
        expect(review.vetted()).toBe(false);
      });

      it('can be set', function(){
        var review = new reviews.Review({});
        review.vet();
        expect(review.vetted()).toBe(true);
      });
    });

    describe('submission status', function(){
      it('has status', function(){
        var review = new reviews.Review({});
        expect(review.accepted()).toBe(false);
      });

      it('can be accepted', function(){
        var review = new reviews.Review({});
        review.vet();
        review.accept();
        expect(review.accepted()).toBe(true);
      });

      it('can be rejected', function(){
        var review = new reviews.Review({});
        review.vet();
        review.accept();
        review.reject();
        expect(review.accepted()).toBe(false);
      });
    });


    describe('rejection reason', function(){
      it('is undefined by default', function(){
        var review = new reviews.Review({});
        expect(review.rejection_reason).toBe(undefined);
      });
      it('can be set', function(){
        var review = new reviews.Review({});
        review.rejection_reason = 'foobah'
        expect(review.rejection_reason).toEqual('foobah');
      });

    });


  });

});
