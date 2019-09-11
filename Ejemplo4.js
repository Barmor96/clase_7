const alumnos = [
    {
        nombre: "Diego",
        calis: [100, 50, 65, 85, 90]
    }, {
        nombre: "Bocho",
        calis: [20, 25, 40, 80, 90]
    }, {
        nombre: "Frank",
        calis: [60, 100, 95, 80, 90]
    }
];

suma = 0;
promedio = 0;


for (let index = 0; index < alumnos.length; index++) {
    for (let x = 0; x < alumnos[index].calis.length; x++) {

        suma = alumnos[index].calis[x] + suma;
        //console.log(suma);
    }

    promedio = suma / alumnos[index].calis.length;
    // console.log(promedio);

    if (promedio < 60) {
        console.log(alumnos[index].nombre);
    }

    suma = 0;
    promedio = 0;
}
