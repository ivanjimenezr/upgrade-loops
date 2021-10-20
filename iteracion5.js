//Iteración #5: Probando For
let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let i = 0; i < placesToTravel.length; i++) {
    let element = placesToTravel[i];
    let indexObject = placesToTravel.indexOf(element);
    //console.log(element['id'])
    if (element['id'] == 11 || element['id'] == 40){
        placesToTravel.splice(indexObject,1);
    }
  }
console.log(placesToTravel)