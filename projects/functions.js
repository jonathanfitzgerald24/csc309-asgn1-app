function div (a, b){
    return a / b;
  }
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        // fixed
     if (text.charAt(i) >= '0' && text.charAt(i) <= '9')
      return true;
    }
    return false;
  }


exports.div = div;
exports.containsNumbers = containsNumbers;