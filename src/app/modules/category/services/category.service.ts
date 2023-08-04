import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCategoryDTO } from '../dto/create.dto';
import { Category } from '../model';
import { SearchCategoryResponse } from '../dto/response.dto';
import { FindCategoryResponse } from '../dto/find.dto';
import { map } from 'rxjs/operators';
import { UpdateCategoryDTO } from '../dto/update.dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  createCategory(category: CreateCategoryDTO): Observable<void> {
    return this.httpClient.post<void>('Category', category);
  }

  updateCategory(
    categoryID: string,
    updateDTO: UpdateCategoryDTO
  ): Observable<void> {
    return this.httpClient.put<void>(`Category/${categoryID}`, updateDTO);
  }

  deleteCategory(categoryID: string): Observable<void> {
    return this.httpClient.post<void>(`Category/${categoryID}/Remove`, {});
  }

  findCategory(categoryID: string): Observable<Category | null> {
    return this.httpClient
      .post<FindCategoryResponse>(`Category/${categoryID}`, {})
      .pipe(
        map((res) => {
          if (res.success) {
            return res.data;
          } else {
            return null;
          }
        })
      );
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.httpClient
      .post<SearchCategoryResponse>('Category/Search', {
        pageNo: 0,
        pageSize: 10000,
        filters: null,
      })
      .pipe(
        map((res) => {
          return res.items;
        })
      );
  }
}
