var cppClass;

// Wait for DOM loaded and set up event listeners on HTML elements
document.addEventListener("DOMContentLoaded", function() {

    //instantiate the C++ component
    cppClass = new Numbers.NumClass();

    //add the event listeners
    document.getElementById('GetNum').addEventListener('click', getNum);
    document.getElementById('SetNum').addEventListener('click', function(){
        var num = document.getElementById('setNumIpt').value;
        console.log(num);
        setNum(num);
    });
    document.getElementById('GetRand').addEventListener('click', function() {
        var num = document.getElementById('range').value;
        console.log(num);
        getRand(0, num)
    });
    document.getElementById('GetFactorial').addEventListener('click', function() {
        var num = document.getElementById('facNumIpt').value;
        console.log(num);
        getFactorial(num)
    });

})

//defien all the methods off the C++ component
function getNum() {
    var returnVal = cppClass.getNum();
    console.log(returnVal);
    return returnVal;
}

function setNum(num) {
    console.log(getNum);
}

function getRand(min, max) {
    var returnVal = cppClass.randomNumber(min, max);
    console.log(returnVal);
}

function getFactorial(num) {
    var returnVal = cppClass.factorial(num);
    console.log(returnVal);
}

