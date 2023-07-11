import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    // Check if we already have the item in out cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
     if(this.cartItems.length > 0){

    // Find the item in the cart base on item id
    for(let tempCartItem of this.cartItems){
      if(tempCartItem.id === theCartItem.id){
        existingCartItem = tempCartItem;
        break;
      }
    }
 // check if we found it 
    alreadyExistsInCart = (existingCartItem != undefined);
     }
     if(alreadyExistsInCart){
      //increment the quantity
      existingCartItem.quantity++;
     }
     else{
      //just add the item to the array
      this.cartItems.push(theCartItem);
     }
     //compute cart total price ant total quantity
     this.computeCartTotals();
  }
  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }
  }
}
