// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {
    const numerals = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    let result = 0;

    for(let i=0; i<str.length; i++){
        let currentNumeral = str[i];
        let nextNumeral = str[i+1];

        let currentValue = numerals[currentNumeral];
        let nextValue = numerals[nextNumeral];

        if(currentValue<nextValue){
            result-=currentValue;
        }else{
            result+=currentValue;
        }
    }
    return result;
};
