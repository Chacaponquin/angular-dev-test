import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  constructor(
    private readonly services: CategoryService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  createForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  loading = false;

  createCategory(): void {
    if (this.createForm.valid) {
      this.loading = true;

      const data = this.createForm.value;

      this.services.createCategory(data).subscribe(() => {
        this.loading = false;
        alert('Category created');
        this.router.navigate([ROUTES.CATEGORIES_LIST]);
      });
    }
  }

  ngOnInit(): void {}
}
