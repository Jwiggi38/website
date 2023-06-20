//Script Programming 1
function squareNumber(number){
    solution=number*number
    alert("The square of "+number+" is "+solution);
    return solution;
}

//Script Programming 2
function fixStart(str){
    var first=str[0];
    var result=str[0];
    for(var i = 1; i<str.length;i++){
        if(str[i]==first){
            result=result+"*";
        }
        else{
            result=result+str[i]
        }
    }
    alert("Result: " +result);
    return result;
}

//Script Programming 3
function notBad(input){
    var Not = input.indexOf("not");
    var Bad = input.indexOf("bad");
    var good = "good";
    if(Not!=-1 && Bad!=-1 && Not<Bad){
        var newInput=input.substr(0, Not)+good+input.substr(Bad + good.length);
        alert(newInput);
        return newInput;
    }
    alert(input);
    return input
}





