import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { NavComponent } from './structure/header/nav/nav.component';
import { FooterComponent } from './structure/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { SgfservicesComponent } from './modules/sgfservices/sgfservices.component';
import { SoporteComponent } from './modules/soporte/soporte.component';
import { LoginComponent } from './modules/login/login.component';
import { UserDashboardComponent } from './modules/user-dashboard/user-dashboard.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { ExpenseSummaryComponent } from './modules/reports/expense-summary/expense-summary.component';
import { SalesSummaryComponent } from './modules/reports/sales-summary/sales-summary.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { AgroSummaryComponent } from './modules/inventory/agro-summary/agro-summary.component';
import { FinancialBalanceComponent } from './modules/reports/financial-balance/financial-balance.component';
import { FinancialSummaryComponent } from './modules/user-dashboard/financial-summary/financial-summary.component';
import { AddTransactionComponent } from './modules/user-dashboard/add-transaction/add-transaction.component';
import { ProfileComponent } from './modules/user-dashboard/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SgfservicesComponent,
    SoporteComponent,
    LoginComponent,
    UserDashboardComponent,
    ReportsComponent,
    ExpenseSummaryComponent,
    SalesSummaryComponent,
    CategoriesComponent,
    InventoryComponent,
    AgroSummaryComponent,
    FinancialBalanceComponent,
    FinancialSummaryComponent,
    AddTransactionComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
