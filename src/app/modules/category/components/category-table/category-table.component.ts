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
  displayedColumns: string[] = ['Name', 'Description'];
  routes = ROUTES;

  constructor(private readonly service: CategoryService) {}

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((cat) => (this.categories = cat));
  }
}
