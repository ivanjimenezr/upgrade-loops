//Iteración #1: Usa includes
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (var objeto of products) {
    if (objeto.includes('Camiseta')) {
        console.log(objeto);
    }
    
}