import { Component, OnInit } from '@angular/core';
import { faTachometerAlt, faUsers, faChartLine, faCog, faFolder, faDollarSign, faUser, faFileInvoiceDollar, faList, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }
  faTachometerAlt = faTachometerAlt;
  faUsers = faUsers;
  faChartLine = faChartLine;
  faCog = faCog;
  faFolder = faFolder;
  faDollarSign = faDollarSign;
  faUser = faUser;
  faFileInvoiceDollar = faFileInvoiceDollar;

  faList = faList;
  faPlus = faPlus;

  showCategory = false;

  toggleCategory() {
    this.showCategory = !this.showCategory;
  }
  showReport = false;

  toggleReports() {
    this.showReport = !this.showReport;
  }
  showProduct = false;
  toggleProduct() {
    this.showProduct = !this.showProduct;
  }
}
