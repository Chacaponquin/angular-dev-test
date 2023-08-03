import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCategoryDTO } from '../dto/create.dto';
import { Category } from '../model';
import { SearchCategoryResponse } from '../dto/response.dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  createCategory(category: CreateCategoryDTO): Observable<void> {
    return this.httpClient.post<void>('Category', category);
  }

  deleteCategory(categoryID: string): Observable<void> {
    return this.httpClient.post<void>(`Category/${categoryID}/Remove`, {});
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.httpClient
      .post<SearchCategoryResponse>('Category/Search', {
        pageNo: 0,
        pageSize: 5,
        filters: null,
      })
      .pipe(
        map((res) => {
          return res.items;
        })
      );
  }
}
