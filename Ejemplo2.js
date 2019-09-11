const asistencia = [true, false, true, false, false, false];
let clasesFaltadas = 0;
let porcentaje = 0;



for (let index = 0; index < asistencia.length; index++) {
    asistencia[index];

    if (asistencia[index] == false) {
        clasesFaltadas ++;
       
    }
    
}
porcentaje = (clasesFaltadas / asistencia.length) * 100;
console.log(porcentaje + '%');






