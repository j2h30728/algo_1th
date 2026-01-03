/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let copyT = t.slice();
    for(const char of s){
        if(copyT.length === 0) return false;
        const tIndex = copyT.indexOf(char);
        if(tIndex === -1) return false;
        copyT = copyT.slice(tIndex + 1);
    }
    return true;
};