import Base from './base';
import { Person } from '../interfaces';

export default class Resident extends Base {
    resident: Person;

    constructor(resident: Person) {
        super();
        this.resident = this.process(resident);
    }

    process(resident: Person) {
        return resident;
    }

    get() {
        return this.resident;
    }
}
