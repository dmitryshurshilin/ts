import Base from './base';
import Resident from './resident';
import {
    Coordinates,
    Person,
} from '../interfaces';

export class City extends Base {
    coordinates: Coordinates;
    residents: Array<Person> = [];

    constructor() {
        super();
    }

    setCoordinates(coordinates: Coordinates): void {
        this.coordinates = coordinates;
    }

    getCoordinates(): Coordinates {
        return this.coordinates;
    }

    addResident(resident: Person): void {
        const residentObj = new Resident(resident);
        this.residents.push(residentObj.get());
    }

    getResidentsList(): Array<Person> {
        return this.residents;
    }
}
