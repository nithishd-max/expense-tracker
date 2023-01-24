import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  expenses: any[]=[];

  constructor() { }

  getExpenses(){
    return this.expenses;
  }

  addExpense(expense: any){
    this.expenses.push(expense);
  }

  updateExpense(index: number,expense: any){
    this.expenses[index]= expense;
  }
  deleteExpense(index: number){
    this.expenses.splice(index,1);
  }

}
