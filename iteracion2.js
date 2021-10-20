//Iteración #2: Condicionales avanzados
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
let numerito = 0;
for (var objeto of alumns) {
    if (objeto['T1'] === true) {
        numerito += 1;
    } else if (objeto['T2'] === true){
        numerito += 1;
    }
    else if (objeto['T3'] === true){
        numerito += 1;
    }
    if (numerito => 2) {
        objeto['isApproved'] = true
    }else {
        objeto['isApproved'] = false
    }
    console.log(objeto)
    
}