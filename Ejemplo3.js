const calis = [75, 58, 60, 45, 55];
let calisObtenidas = 0;
let vasARepetir = 0;

for( let index = 0; index < calis.length; index ++){
    calisObtenidas = calis[index];
    //console.log(calisObtenidas);

    if (calisObtenidas < 60) {
        vasARepetir++;
       
    }
}
console.log('Vas a repetir ' + vasARepetir); 
