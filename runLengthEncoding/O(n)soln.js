function runLengthEncoding(string) {
    let run = 0;
      let currentChar = string[0];
      let encoded = '';
      
      for ( let i = 0; i < string.length; i++) {
          if (run < 9 && currentChar === string[i]) {
              run++;
              continue;
          }
          encoded+= run+currentChar;
          run = 1;
          currentChar = string[i]
      }
      
      if (run > 0) {
          encoded+= run+currentChar;
      }
      
      return encoded;
  }
  //O(n) time | O(n) space where n is the length of the input string