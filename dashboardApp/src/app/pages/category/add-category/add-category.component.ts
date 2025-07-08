import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor() { }
  category = {
    name: '',
    description: '',
    status: '',
    type: '' 
  };
  ngOnInit(): void {
  }
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Category Data:', this.category);
      // API call ya service yahan likh sakte ho
      alert('Category Added Successfully!');
      form.resetForm();
    } else {
      console.log('Form Invalid');
    }
  }
}




