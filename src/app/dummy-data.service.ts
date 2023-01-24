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
            },
            {
                name: 'Grocery',
                amount: 300,
                date: '2022-01-02'
            }, {
                name: 'Rent',
                amount: 10000,
                date: '2022-02-02'
            }, {
                name: 'Transportation',
                amount: 500,
                date: '2022-03-02'
            }

        ]

    }
}
