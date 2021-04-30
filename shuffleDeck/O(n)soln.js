/**
 * Given an array containing a deck of cards, implement a function that shuffles the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 */

 var shuffleDeck = function(deck) {
    var currentCard;
    var placeholder;
    var switchPosition;
  
    for (var i = 0; i < deck.length; i++) {
      currentCard = deck[i];
      switchPosition = Math.floor(Math.random()*(51-i)) + i;
      placeholder = deck[switchPosition];
  
      deck[switchPosition] = currentCard;
      deck[i] = placeholder;
    }
  
    return deck;
  };
  
  // Ordered deck generator for testing
  var orderedDeck = function() {
    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var deck = [];
  
    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });
  
    return deck;
  };