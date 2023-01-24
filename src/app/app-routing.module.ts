import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseTableComponent} from './expense-table/expense-table.component';
import {ExpenseTrackerComponent} from './expense-tracker/expense-tracker.component';

const routes: Routes = [
    {
        path: 'expense-tracker',
        component: ExpenseTrackerComponent
    },
    {
        path: 'expense-table',
        component: ExpenseTableComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
