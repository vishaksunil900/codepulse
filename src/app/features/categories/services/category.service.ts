import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    //console.log(environment);
    return this.http.post<void>(`${environment.apiBaseUr}/api/categories`, model);
    //return this.http.post<void>('https://localhost:7048/api/categories', model);
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUr}/api/Categories`);
    //return this.http.get<Category[]>('https://localhost:7048/api/Categories');
  }

}
