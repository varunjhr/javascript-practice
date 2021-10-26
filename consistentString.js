var countConsistentStrings = function(allowed, words) {
    var count = 0;
    var wordArr = [...allowed];    
    words.forEach(element => {
       for(var i = 0;i<element.length;i++){
            if(!wordArr.includes(element.charAt(i))){
               count++; 
              break;
            }
       }
    });
    return words.length-count;
};

var words = ["cc","acd","b","ba","bac","bad","ac","d"];
countConsistentStrings("cad",words);