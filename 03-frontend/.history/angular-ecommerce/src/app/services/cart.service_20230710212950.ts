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
     }

    
    // check if we found it 
  }
}
