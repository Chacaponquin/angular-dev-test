import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCategoryDTO } from '../dto/create.dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private readonly httpClient: HttpClient) {}

  createCategory(category: CreateCategoryDTO): Observable<void> {
    return this.httpClient.post<void>('Category', category);
  }
}
