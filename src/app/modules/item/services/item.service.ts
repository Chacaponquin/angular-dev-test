import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model';
import { ROUTES } from '../constants/routes';
import { map } from 'rxjs/operators';
import { GetItemDTO } from '../dto/get-items.dto';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private readonly httpClient: HttpClient) {}

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
}
