var elForm = document.querySelector('.form');

var elInput1 = document.querySelector('.input1');
var elInput2 = document.querySelector('.input2');
var elInput3 = document.querySelector('.input3');

var elBtn = document.querySelector('.btn');

var elScore = document.querySelector('.natija');


elForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(elInput1.value < 60 && elInput2.value < 5.5){
        elScore.textContent = 'Imtixondan yiqilding'
    }else if(elInput1.value > 60 && elInput2.value < 5.5 && elInput3.value == 'yoq'){
        elScore.textContent = 'yiqilding'
    }else if(elInput1.value < 60 && elInput2.value > 5.5 && elInput3.value == 'yoq'){
        elScore.textContent = 'yiqilding'
    }else if(elInput1.value > 60 && elInput2.value > 5.5 && elInput3.value == 'yoq'){
        elScore.textContent = 'Sen oqishga kirding'
    }else if(elInput1.value > 60 && elInput2.value < 5.5 && elInput3.value == 'bor'){
        elScore.textContent = 'Tankdan 500$ olib kel'
    }else if(elInput1.value < 60 && elInput2.value > 5.5 && elInput3.value == 'bor'){
        elScore.textContent = 'Tankdan 500$ olib kel'
    }else if(elInput1.value > 60 && elInput2.value > 5.5 && elInput3.value == 'bor'){
        elScore.textContent = 'Sen oqishga kirding'
    }
    else{
        elScore.textContent = 'qandaydir xato yuz berdi'
    }
})