import  { Component } from "@angular/core"

@Component({
    selector: 'pm-products',
    templateUrl: './products/product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List'
}