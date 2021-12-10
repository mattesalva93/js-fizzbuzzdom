let scatola = document.getElementById("container"); //Definizione contenitore per div.row

for(let i=1; i<=100; i++){              //Definizine del ciclo da 1 a 100
    console.log('iterazione: ', i)

    if( (i%3==0) && (i%5==0) ){         //Numeri multipli di 3 e 5
        scatola.innerHTML += '<div class="col-1 p-4 m-1 text-center ms_fizzbuzz-box">' + 'FizzBuzz' + '</div>';
    }else if(i%3==0){                   //Numeri multipli di 3
       scatola.innerHTML += '<div class="col-1 p-4 m-1 text-center ms_fizz-box">' + 'Fizz' + '</div>';
    }else if(i%5==0){                   //Numeri multipli di 5
        scatola.innerHTML += '<div class="col-1 p-4 m-1 text-center ms_buzz-box">' + 'Buzz' + '</div>';
    }else{                              //Tutti gli altri
        scatola.innerHTML += '<div class="col-1 p-4 m-1 text-center ms_regular-box">' + i + '</div>';
    }
}
