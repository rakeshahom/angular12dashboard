import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faTachometerAlt, faUsers, faChartLine, faCog, faFolder } from '@fortawesome/free-solid-svg-icons';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CategoryComponent } from './pages/category/category.component';
import { SalesReportComponent } from './pages/reports/sales-report/sales-report.component';
import { UserReportComponent } from './pages/reports/user-report/user-report.component';
import { FinancialReportComponent } from './pages/reports/financial-report/financial-report.component';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ListCategoryComponent } from './pages/category/list-category/list-category.component';
import { EditCategoryComponent } from './pages/category/edit-category/edit-category.component'; // ✅ ✅ ✅ ye zaruri hai!
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    SettingsComponent,
    ReportsComponent,
    CategoryComponent,
    SalesReportComponent,
    UserReportComponent,
    FinancialReportComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faUserCircle, faTachometerAlt, faUsers, faChartLine, faCog, faFolder);
  }
}
