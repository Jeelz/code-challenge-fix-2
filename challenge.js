
  const findSum = function(array) {
    // your code here - don't forget to return a number!
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
  };
  

  
  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
    let answer = {
        most: '',
        least: ''
    };
    let best_count = 0, least_count = array.length;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j])
                ++count;
        }
        if (count > best_count) {
            best_count = count;
            answer.most = array[i];
        }
        if (count < least_count) {
            least_count = count;
            answer.least = array[i];
        }
    }
    return answer;
};
  
 
  
 
const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    const word = str.length;
    for (let i = 0; i < word / 2; i++) {
        if (str[i] !== str[word - 1 - i]) {
            return false;
        }
    }
    return true; 
  };
  

  const largestPair = function(array) {
    // your code here - don't forget to return a number!
        var most=-Infinity;  
        for (var i = 0; i < array.length - 1; i++){
            most = array[i]*array[i+1] > most ?array[i]*array[i + 1]:most;  
        }
        return most;
  };

  

  const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    var result=" " 
    for(var i = 0; i < str.length;i++) {
      if(!(str[i] ==='(' || str[i]===')')) 
     result += str[i] 
    }
    return result 
  };
  

