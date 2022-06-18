import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  products: IProduct[] = [];
  columns: string[] = ["ID", "Name", "Brand", "Category", "Price"];


  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: data => {
        this.products = data
        // console.log(data)
      },
      error: err =>{
        console.log(err)
      }
    })
  }

}
