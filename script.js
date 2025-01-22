//function showTime() {
//	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
//}
//showTime();
//setInterval(function () {
//	showTime();
//}, 1000);

//$(".Spin").each(function() {
//var button = $(this); button.on("click", function () { 

    function generateRandomNumber(){

        var randomNumber1 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum1").value= randomNumber1;
        
        var randomNumber2 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum2").value= randomNumber2;

        var randomNumber3 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum3").value= randomNumber3;

        var randomNumber4 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum4").value= randomNumber4;

        var randomNumber5 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum5").value= randomNumber5;

        var randomNumber6 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum6").value= randomNumber6;

        var randomNumber7 = Math.floor(Math.random()*9)+1;
        document.getElementById("randomNum7").value= randomNumber7;

    }



