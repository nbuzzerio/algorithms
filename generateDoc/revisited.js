function generateDocument(characters, document) {
    // Write your code here.
      const chars = {};
      const doc = {}
      
      for (const char of characters) {
          if (chars[char]) chars[char]++
          else (chars[char]) = 1
      }
      for (const char of document) {
          if (doc[char]) doc[char]++
          else (doc[char]) = 1
      }
      
      for (char in doc) {
          if (!chars[char] || chars[char] < doc[char]) return false
      }
      
    return true;
  }
  
  //o(n+m) time where n is the number of characters and m is the number of characters in the document | o(c) space where c is the number of unique characters in the document and characters arrays