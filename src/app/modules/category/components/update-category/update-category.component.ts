import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';
import { Category } from '../../model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  constructor(
    private readonly services: CategoryService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  category: Category | null = null;

  form = this.fb.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  loading = false;

  updateCategory(): void {
    if (this.form.valid && this.category) {
      this.loading = true;

      const data = this.form.value;
      this.services.updateCategory(this.category.id, data).subscribe(() => {
        this.loading = false;

        this.router.navigate([ROUTES.CATEGORIES_LIST]);
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const categoryID = params['id'];

      this.services.findCategory(categoryID).subscribe((category) => {
        this.category = category;

        if (this.category) {
          this.form.controls['name'].setValue(this.category.name);
          this.form.controls['description'].setValue(this.category.description);
        }
      });
    });
  }
}
