import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CategoryComponent } from './pages/category/category.component';
import { SalesReportComponent } from './pages/reports/sales-report/sales-report.component';
import { UserReportComponent } from './pages/reports/user-report/user-report.component';
import { FinancialReportComponent } from './pages/reports/financial-report/financial-report.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { ListCategoryComponent } from './pages/category/list-category/list-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent },
 
  { path: 'settings', component: SettingsComponent },
  {
  path: 'category',
  component: CategoryComponent,
  children: [
    { path: 'add', component: AddCategoryComponent },
    { path: 'list', component: ListCategoryComponent },
    
    { path: 'edit/:id', component: EditCategoryComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
  ]
},
   {
    path: 'reports',
    component: ReportsComponent,
    children: [
      { path: 'sales', component: SalesReportComponent },
      { path: 'user', component: UserReportComponent },
      { path: 'financial', component: FinancialReportComponent },
      { path: '', redirectTo: 'sales', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // default
  { path: '**', redirectTo: '/dashboard' } // fallback
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
