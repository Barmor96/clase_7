const alumnos = [
    {
        nombre: "Diego",
        calis: [100, 50, 65, 85, 90 ]
}, {
        nombre: "Bocho",
        calis: [80, 60, 45, 80, 90]
}, {
        nombre: "Frank",
        calis: [60, 100, 95, 80, 90]
}
]

let promedioDiego = 0
let promedioBocho = 0
let promedioFrank = 0

for (let index = 0; index < alumnos.length; index++) {

    for (let y = 0; index < alumnos[index].calis.length; y++) {

      if (alumnos[index]) {
          promedioDiego += alumnos[index].calis[y] 
          promedioDiego = promedioDiego / alumnos[index].calis.length
        
          
      }
        if (alumnos[index]) {
    
            promedioFrank += alumnos[index].calis[y] 
          promedioFrank = promedioFrank / alumnos[index].calis.length
         
        }
        if (alumnos[index]) {
            promedioBocho += alumnos[index].calis[y] 
            promedioBocho = promedioBocho / alumnos[index].calis.length   
        }        
    }   
}

console.log(promedioDiego);
console.log(promedioFrank);
console.log(promedioBocho);


