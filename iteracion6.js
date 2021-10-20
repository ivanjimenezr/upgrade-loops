//Iteración #6: Mixed For...of e includes
let toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato félix'}
    ]
let remove = [];
for (value of toys) {
    if (value['name'].includes('gato')) {
        let indexObject = toys.indexOf(value);
        remove.push(indexObject);
    }
}
for (var i = remove.length -1; i >= 0; i--)
    toys.splice(remove[i], 1);

console.log('Objeto modificado')
console.log(toys)