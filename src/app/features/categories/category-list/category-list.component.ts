import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories$?: Observable<Category[]>; 

  constructor(private categoryService: CategoryService){

  }
  ngOnInit(): void {

    // changed code to async
    // this.categoryService.getAllCategories()
    // .subscribe({
    //   next: (response=> {
    //     this.categories = response;
    //   })
    // });


    this.categories$ = this.categoryService.getAllCategories();
    
  }
}
