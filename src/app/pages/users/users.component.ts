import { Component, OnInit } from '@angular/core';
import { faEdit, faFileExcel, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
// Optional interface for clarity
interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
  // add more fields as needed
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faFileExcel = faFileExcel;
  faUser = faUser;
  users: User[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchUsers();

  }
  fetchUsers(): void {
    this.authService.userList().subscribe({
      next: (data) => {
        this.users = data.data || data;  // Adjust for wrapped or plain list
        console.log('Users loaded:', this.users);


      },
      error: (err) => {
        console.error('Error loading users:', err);
      }
    });
  }


  // Pagination Logic
  currentPage = 1;
  pageSize = 5;

  get totalPages(): number {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get pagedUsers(): User[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.users.slice(start, start + this.pageSize);
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

  editUser(user: User) {
    alert(`Edit ${user.name}`);
    // TODO: Navigate to edit form if needed
  }

  deleteUser(user: User) {
    Swal.fire({
      title: `Are you sure you want to delete "${user.name}"?`,
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.deleteUser(user.id).subscribe({
          next: () => {
            this.users = this.users.filter(u => u.id !== user.id);

            Swal.fire({
              title: 'Deleted!',
              text: `"${user.name}" has been deleted.`,
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: (err: any) => {
            console.error(err);
            Swal.fire('Error', 'Something went wrong!', 'error');
          }
        });
      }
    });
  }

  // Excel Export
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Users': worksheet },
      SheetNames: ['Users']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'users');
  }

  readonly EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.EXCEL_TYPE });
    FileSaver.saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
  }

  loadingStatusChangeMap: { [userId: number]: boolean } = {};

toggleStatus(user: User) {
  const updatedStatus = !user.active;

  this.loadingStatusChangeMap[user.id] = true;

  this.authService.updateUserStatus(user.id, updatedStatus).subscribe({
    next: () => {
      this.fetchUsers();
      Swal.fire({
        title: 'Success',
        text: `User "${user.name}" has been ${updatedStatus ? 'activated' : 'deactivated'}.`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    },
    error: () => {
      Swal.fire('Error', 'Status change failed.', 'error');
    },
    complete: () => {
      this.loadingStatusChangeMap[user.id] = false;
    }
  });
}
toggleStatus1(user: User) {
  const updatedStatus = !user.active;

  this.authService.updateUserStatus(user.id, updatedStatus).subscribe({
    next: () => {
      user.active = updatedStatus; // instant UI update
    },
    error: () => {
      alert('Failed to update status');
    }
  });
}
}