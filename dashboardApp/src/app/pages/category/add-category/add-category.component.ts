import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 

  constructor(private categoryService: CategoryService) {}

  category = {
    name: '',
    description: '',
    status: '',
    type: '' 
  };
  ngOnInit(): void {
  }
   onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // ✅ Dummy call
    this.categoryService.createCategory(this.category).subscribe({
      next: (response) => {
        console.log('API Response:', response);

        Swal.fire({
          icon: 'success',
          title: 'Category Created!',
          text: response.message || 'New category added.',
          timer: 5000,
          showConfirmButton: false
        });

        form.resetForm();
      },
      error: (error) => {
        console.error('Error:', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong!',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }
}




