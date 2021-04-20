var reorganizeString = function(S) {
    
    const chars = {};
    let reorganized = '';
    
    for (let char of S) {
        if (chars[char]) {
            chars[char][1]++;
        } else {
            chars[char] = [char, 1];
        }
    }

    const charsArr = Object.values(chars);
    
    charsArr.sort((a, b) => {
        return b[1] - a[1];
    })
    
    if ((charsArr[0][1] * 2) > S.length + 1) {
        return reorganized;
    } else { 
        let resultArr = new Array(S.length).fill(0);
        for (let char of charsArr) {
            let emptyIndex = resultArr.indexOf(0);
            resultArr[emptyIndex] = char[0];
            char[1]--;
            while (char[1] > 0) {           
                emptyIndex = resultArr.indexOf(0, emptyIndex + 1);    
                emptyIndexSkip = resultArr.indexOf(0, emptyIndex + 1);
                if (emptyIndexSkip > -1) {
                    resultArr[emptyIndexSkip] = char[0];
                    emptyIndex = emptyIndexSkip;
                } else {
                    resultArr[resultArr.indexOf(0)] = char[0];
                }
                    
                char[1]--;
            }
        }
        return resultArr.join('')
    }
};
        //////////////////////////
        //     TEST CASES       //
        //////////////////////////

console.log('aab:', reorganizeString('aab'))

console.log('aaabbcc:', reorganizeString('aaabbcc'))

console.log('aaab:', reorganizeString('aaab'))

console.log('aaab:', reorganizeString('aaabccc'))