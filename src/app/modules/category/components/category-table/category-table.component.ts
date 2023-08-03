import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../model';
import { ROUTES } from 'src/app/constants/routes';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent implements OnInit {
  categories: Array<Category> = [];
  displayedColumns: string[] = ['Name', 'Description', 'Options'];
  routes = ROUTES;

  deleteLoading = false;

  constructor(private readonly service: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.service.getAllCategories().subscribe((cat) => (this.categories = cat));
  }

  deleteCategory(categoryID: string): void {
    this.deleteLoading = true;

    this.service.deleteCategory(categoryID).subscribe(() => {
      this.deleteLoading = false;

      this.getCategories();
    });
  }
}
