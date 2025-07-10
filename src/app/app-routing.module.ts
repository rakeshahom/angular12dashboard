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
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: MainLayoutComponent,  // ✅ sab ke liye layout
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

      { path: 'users', component: UsersComponent,canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent,canActivate: [AuthGuard] },
      {
        path: 'category',
        component: CategoryComponent,
        children: [
          { path: 'add', component: AddCategoryComponent ,canActivate: [AuthGuard]},
          { path: 'list', component: ListCategoryComponent ,canActivate: [AuthGuard]},
          { path: 'edit/:id', component: EditCategoryComponent ,canActivate: [AuthGuard]},
          { path: '', redirectTo: 'list', pathMatch: 'full' }
        ]
      },
      {
        path: 'reports',
        component: ReportsComponent,
        children: [
          { path: 'sales', component: SalesReportComponent,canActivate: [AuthGuard] },
          { path: 'user', component: UserReportComponent ,canActivate: [AuthGuard]},
          { path: 'financial', component: FinancialReportComponent ,canActivate: [AuthGuard]},
          { path: '', redirectTo: 'sales', pathMatch: 'full' }
        ]
      }
    ]
  },

  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
