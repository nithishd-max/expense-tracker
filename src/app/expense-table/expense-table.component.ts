import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../dummy-data.service';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {
  expenses: any[] = [];
  expenseForm: any;
  editMode: boolean = false;
  editedExpenseIndex!: number;
    constructor(private expenseService: ExpensesService,private dummyService: DummyDataService) { 
      this.expenses=this.dummyService.getExpenses();
    }

  ngOnInit(): void {
    this.expenses=this.expenseService.getExpenses();
  }

  editExpense(index:number){
    this.expenseForm.setValue({
      name:this.expenses[index].name,
      amount: this.expenses[index].amount,
      date: this.expenses[index].date
      
    });
    this.editMode= true;
    this.editedExpenseIndex=index;
  }

  deleteExpene(index: number){
    this.expenseService.deleteExpense(index);
  }
  calculateTotal(){
    let total = 0;
    for(let expense of this.expenses)
    {
      total+=expense.amount
    }
    return total;
  }
  }
