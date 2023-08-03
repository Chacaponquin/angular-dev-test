import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model';
import { ROUTES } from '../constants/routes';
import { map } from 'rxjs/operators';
import { GetItemDTO } from '../dto/get-items.dto';
import { CreateItemDTO } from '../dto/create.dto';
import { v4 as uuid } from 'uuid';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/model';
import { FindItemResponse } from '../dto/find.dto';
import { UpdateItemDTO } from '../dto/update.dto';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly categoryService: CategoryService
  ) {}

  public getItems(): Observable<Item[]> {
    return this.httpClient
      .post<GetItemDTO>(ROUTES.GET_ITEMS, {
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

  public getCategories(): Observable<Array<Category>> {
    return this.categoryService.getAllCategories();
  }

  public deleteItem(itemID: string): Observable<void> {
    return this.httpClient.post<void>(`Item/${itemID}/Remove`, {});
  }

  public findItem(itemID: string): Observable<Item | null> {
    return this.httpClient.post<FindItemResponse>(`Item/${itemID}`, {}).pipe(
      map((res) => {
        if (res.success) {
          return res.data;
        } else {
          return null;
        }
      })
    );
  }

  public updateItem(
    itemID: string,
    updateDTO: Omit<UpdateItemDTO, 'code'>
  ): Observable<void> {
    return this.httpClient.put<void>(`Item/${itemID}`, updateDTO);
  }

  public createItem(
    createItemDTO: Omit<CreateItemDTO, 'code'>
  ): Observable<void> {
    const params = {
      ...createItemDTO,
      code: uuid().slice(0, 9),
    };

    return this.httpClient.post<void>('Item', params);
  }
}
