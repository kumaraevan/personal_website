document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('multiply').addEventListener('click', function(){
        var firstNumber = parseFloat(document.getElementById('first-number').value);
        var secondNumber = parseFloat(document.getElementById('second-number').value);
        var result = firstNumber * secondNumber;
        alert("The Result Is: " + result);
    });

    document.getElementById('division').addEventListener('click', function(){
        var firstNumber = parseFloat(document.getElementById('first-number').value);
        var secondNumber = parseFloat(document.getElementById('second-number').value);
        var result = firstNumber / secondNumber;
        alert("The Result Is: " + result);
    });

    document.getElementById('addition').addEventListener('click', function(){
        var firstNumber = parseFloat(document.getElementById('first-number').value);
        var secondNumber = parseFloat(document.getElementById('second-number').value);
        var result = firstNumber + secondNumber;
        alert("The Result Is: " + result);
    });

    document.getElementById('subtraction').addEventListener('click', function(){
        var firstNumber = parseFloat(document.getElementById('first-number').value);
        var secondNumber = parseFloat(document.getElementById('second-number').value);
        var result = firstNumber - secondNumber;
        alert("The Result Is: " + result);
    });

    document.getElementById('clear').addEventListener('click', function() {
        document.getElementById('first-number').value = '';
        document.getElementById('second-number').value = '';
    });

});