var lengthOfLongestSubstring = function(s) {
    let set = new Set() ;
    let left = 0 ;
    let maxlength = 0;
    for(let right = 0 ; right < s.length ;right ++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++;
        }
        set.add(s[right])
        console.log(set)
        maxlength = Math.max(maxlength , (right-left+1))
        console.log(maxlength)
    }
    return maxlength;
 
};
lengthOfLongestSubstring("abcabcbb")