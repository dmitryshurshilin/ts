import Base from './base';
import {
    Coordinates,
    Person,
} from '../interfaces';

export class City extends Base {
    coordinates: Coordinates;
    residents: Array<Person> = [];

    setCoordinates(coordinates: Coordinates): void {
        this.coordinates = coordinates;
    }

    getCoordinates(): Coordinates {
        return this.coordinates;
    }

    addResident(resident: Person): void {
        this.residents.push(resident);
    }

    getResidentsList(): Array<Person> {
        return this.residents;
    }
}
