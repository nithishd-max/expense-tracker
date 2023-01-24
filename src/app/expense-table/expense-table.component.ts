import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {
  expenses: any[] = [];

  constructor(private expenseService: ExpensesService) { }

  ngOnInit(): void {
    this.expenses=this.expenseService.getExpenses();
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
