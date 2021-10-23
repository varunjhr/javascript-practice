var checkIfPangram = function(sentence) {
    const letters = new Set();
    for(let i = 0;i<sentence.length;i++){
        letters.add(sentence.charAt(i));
    }
    if(letters.size == 26){
        return true;
    }
    else{
        return false;
    }
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))