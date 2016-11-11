var cppClass;

document.addEventListener("DOMContentLoaded", function() {

    cppClass = new Numbers.NumClass();
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

function getNum() {
    var returnVal = cppClass.getNum();
}

function setNum(num) {
    var returnVal = cppClass.setNum(num);
}

function getRand(min, max) {
    var returnVal = cppClass.randomNumber(min, max);
}

function getFactorial(num) {
    var returnVal = cppClass.factorial(num);
}

