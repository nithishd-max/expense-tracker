import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import { DummyDataService } from '../dummy-data.service';
import {ExpensesService} from '../expenses.service';

@Component({selector: 'app-expense-tracker', templateUrl: './expense-tracker.component.html', styleUrls: ['./expense-tracker.component.scss']})


export class ExpenseTrackerComponent implements OnInit {
    expenseForm : FormGroup;
    expenses : any[] = [];
    editMode : any;
    editedExpenseIndex !: number;


    constructor(private fb : FormBuilder, private expenseService : ExpensesService, private dummyService: DummyDataService) {
      this.expenses=this.dummyService.getExpenses();
        this.expenseForm = this.fb.group({
            name: [
                '',
                [
                    Validators.required, Validators.minLength(3)
                ]
            ],
            amount: [
                '',
                [
                    Validators.required, Validators.min(1)
                ]
            ],
            date: [
                '',
                [Validators.required]
            ]

        })
    }
    ngOnInit() {
        this.expenses = this.expenseService.getExpenses();
    }

    onSubmit(expense : any) {
        let expenseData = this.expenseForm.value;
        if (this.editMode) {
            this.expenseService.updateExpense(this.editedExpenseIndex, expenseData);
        } else if (this.expenseForm.valid) {
            this.expenseService.addExpense(expense);
            console.log("Form submitted!");
        }
        this.expenseForm.reset();
    }

}
