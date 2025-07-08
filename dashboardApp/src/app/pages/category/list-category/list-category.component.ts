import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash ,faFileExcel} from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


interface Category {
  id: number;
  name: string;
  description: string;
  status: string;
}
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
 faEdit = faEdit;
  faTrash = faTrash;
  faFileExcel=faFileExcel;
  constructor() { }

  ngOnInit(): void {
  }
 categories: Category[] = [
    { id: 1, name: 'Electronics', description: 'Electronic items', status: 'Active' },
    { id: 2, name: 'Books', description: 'Books and stationery', status: 'Inactive' },
    // ✅ Add more dummy data for testing
    { id: 3, name: 'Furniture', description: 'Home furniture', status: 'Active' },
    { id: 4, name: 'Clothing', description: 'Men and Women clothing', status: 'Active' },
    { id: 5, name: 'Sports', description: 'Sports equipment', status: 'Active' },
    { id: 6, name: 'Toys', description: 'Toys for kids', status: 'Inactive' },
    { id: 7, name: 'Groceries', description: 'Daily groceries', status: 'Active' },
    { id: 8, name: 'Footwear', description: 'Shoes and sandals', status: 'Active' },
    { id: 9, name: 'Beauty', description: 'Beauty products', status: 'Inactive' },
    { id: 10, name: 'Jewelry', description: 'Jewelry items', status: 'Active' }
  ];

  currentPage = 1;
  pageSize = 5;

  get totalPages(): number {
    return Math.ceil(this.categories.length / this.pageSize);
  }

  get pagedCategories(): Category[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.categories.slice(start, start + this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  editCategory(category: Category) {
    alert(`Edit ${category.name}`);
    // TODO: Navigate to edit form
  }

  deleteCategory(category: Category) {
    if (confirm(`Are you sure to delete ${category.name}?`)) {
      this.categories = this.categories.filter(c => c.id !== category.id);
    }
  }
  exportToExcel(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.categories);
  const workbook: XLSX.WorkBook = {
    Sheets: { 'data': worksheet },
    SheetNames: ['data']
  };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, 'categories');
}



readonly EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
  FileSaver.saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
}

}
