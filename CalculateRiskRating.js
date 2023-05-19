function CalculateRiskRating(sentence){
    let error=getError(sentence);
    if(error!=null){
        return error;
    }
    return sentence.match(/crash|bump|collide|scratch|smash/gi||[]).length;
}

function getError(sentence){
    var errorType="Error- ";
    if(typeof sentence !== 'string'){
        errorType+="not a string";
        return errorType;
    }
    
    if(sentence==""){
        errorType+="empty string";
        return errorType;
    }
    
    let lengthCount=sentence.replace(/\s/g, '').length;
    if(lengthCount==0){
        errorType+="has only whitespace";
            return errorType;
    }
    var hasLetter=sentence.match(/[a-z]/gi);
    
    if(!hasLetter){
        errorType+="doesn't contain a letter";
            return errorType;
    }
    return null;
}

module.exports = CalculateRiskRating;