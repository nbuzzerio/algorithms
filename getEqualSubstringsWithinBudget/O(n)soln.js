/*
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    var expenses = 0;
    var start = 0;
    var end = -1;
    
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            expenses+=Math.abs(s.charCodeAt(j)-t.charCodeAt(j));
            if (expenses <= maxCost) {
               if (j-i >= (end-start)) {
                    start = i;
                    end = j;
                } 
            } else {
                expenses-= Math.abs(s.charCodeAt(j)-t.charCodeAt(j));
                expenses-= Math.abs(s.charCodeAt(i)-t.charCodeAt(i));
                i++;
                j--;
                if (i > j) {
                    break;
                }
            }
        }
        expenses = 0;
    }
        
        
    return (end - start) + 1 || 0;   
};