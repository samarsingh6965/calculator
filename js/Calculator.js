let string = "";
var off = ['0']
let buttons = document.querySelectorAll(".btn");

//operation Function

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('#on').value = string;
        } else if (e.target.innerHTML == 'CLEAR') {
            string = "";
            document.querySelector('#on').value = string;
        }else {
            string = string + e.target.innerHTML;
            document.querySelector('#on').value = string;
        }

    })});

    //operation Function

    //button disable-enable

   document.getElementById('start-btn').addEventListener('click',()=>{
     if(off[0]==='0'){
         off.pop();
         document.querySelector('#on').value = '0';
         document.getElementById('start-btn').innerHTML = 'ON';
         document.getElementById("seven").disabled = false;
         document.getElementById("eight").disabled = false;
         document.getElementById("nine").disabled = false;
         document.getElementById("four").disabled = false;
         document.getElementById("five").disabled = false;
         document.getElementById("six").disabled = false;
         document.getElementById("one").disabled = false;
         document.getElementById("two").disabled = false;
         document.getElementById("three").disabled = false;
         document.getElementById("zero").disabled = false;
         document.getElementById("point").disabled = false;
         document.getElementById("plus").disabled = false;
         document.getElementById("subtract").disabled = false;
         document.getElementById("multiply").disabled = false;
         document.getElementById("divide").disabled = false;
         document.getElementById("equal").disabled = false;
        }else{
            off.push('0');
            document.querySelector('#on').value = '';
            document.getElementById('start-btn').innerHTML = 'OFF'
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("zero").disabled = true;
            document.getElementById("point").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("subtract").disabled = true;
            document.getElementById("multiply").disabled = true;
            document.getElementById("divide").disabled = true;
            document.getElementById("equal").disabled = true;
     }});

      //button disable-enable