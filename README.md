Challenge
=========

So you want to be a Revolver, can you beat our challenge? Build us an awesome javascript program to
vet all our reviews.

We have provided you with a simple Review interface class and a number of tests that you'll
need to keep/get passing. You may not edit the Review interface!

Note: We have provided you with some high level tests, feel free to write more if you want.

Product Manager Requirements
----------------------------

When I get a Review, I want it to be vetted based on the following rules.

* Offensive words
  - We don't want any offensive words so avoid the following:
    - Elderberry,
    - Hamster,
    - PHP,
    - Brainfuck
  - Note: The list might change if we discover any other offensive words!
* Repetition
  - Repetition is often an indication of a fake review, if words are repeated three or more times
    in a row it is a fake review.
* Prices
  - We do not want anyone mentioning prices in their reviews, it causes problems
    between different retailers.

Setup
-----
The code we have supplied should work on Node 0.12.0. In order to run the specs you will need jasmine,
if you have npm installed `npm install` should do this for you, you may run the specs by running `jasmine`.

You are welcome to use any libraries if you wish.


Capaj's notes
-------------
This solution wasn't 'senior' enough for Reevoo, whatever that means. Well I think it is plenty 'senior' enough for me, so
I proudly showcase it here on my github profile. For anyone interested.



