import { Component, OnInit } from '@angular/core';
import { faUsers, faFolder, faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   faUsers = faUsers;
  faFolder = faFolder;
  faChartLine = faChartLine;

  totalUsers = 120;
  totalCategories = 15;
  totalReports = 25;
}
