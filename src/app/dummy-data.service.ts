import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DummyDataService {

    constructor() {}

    getExpenses() {
        return [

            {
                name: 'Grocery',
                amount: 30,
                date: '2022-01-01'
            }, {
                name: 'Rent',
                amount: 1000,
                date: '2022-02-01'
            }, {
                name: 'Transportation',
                amount: 50,
                date: '2022-03-01'
            }

        ]

    }
}
