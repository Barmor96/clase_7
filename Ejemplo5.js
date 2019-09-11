const alumnos = [
    {
        nombre: "Diego",
        materias:['Español', 'Matemáticas', 'Fisica'],
        calis: [100, 50, 65]
    }, {
        nombre: "Bocho",
        materias:['Español', 'Matemáticas', 'Fisica'],
        calis: [20, 25, 40]
    }, {
        nombre: "Frank",
        materias:['Español', 'Matemáticas', 'Fisica'],
        calis: [59, 100, 95]
    }
];

for (let index = 0; index < alumnos.length; index++) {

    for (let x = 0; x < alumnos[index].materias.length + alumnos[index].calis.length; x++) {

            if (alumnos[index].calis[x] < 60) {
                console.log(alumnos[index].nombre + ' Reprobaste ' + alumnos[index].materias[x]);
            }
        }
        }
        
    

