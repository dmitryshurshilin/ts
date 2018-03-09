import { City } from './modules';

const city = new City();

city.setName('Sabbioneta');
console.log(city.getName());

city.setCoordinates({
    N: 44.9990,
    E: 10.4889,
});
console.log(city.getCoordinates());

city.addResident({
    name: 'Richard Price',
    age: 27,
    address: 'Sabbioneta, Via Europa, 425/368',
    position: 'Manager',
});

city.addResident({
    name: 'Megan Bates',
    age: 31,
});

console.log(city.getResidentsList());
