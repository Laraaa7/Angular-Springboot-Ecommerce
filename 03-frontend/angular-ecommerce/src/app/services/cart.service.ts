import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

 // Storage: Storage = sessionStorage;
  Storage: Storage = localStorage;
  
  constructor() {

    // leer los datos del almacenamiento local
    let data = JSON.parse(this.Storage.getItem('cartItems')!);

    if (data != null) {
      this.cartItems = data;
  
      // calcular el total basado en los datos leidos desde el almacenamiento
      this.computeCartTotals();
    }
   }
  
  addToCart(theCartItem: CartItem) {

    // comprobar si ya existe el item en el carrito
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined!;

    if (this.cartItems.length > 0) {

      // encontrar el item en el carrito basado en el id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id)!;
 
      // comprobar si lo hemos encontrado
      alreadyExistsInCart = existingCartItem != undefined;
  }

  if(alreadyExistsInCart) {
    // incrementar la cantidad
    existingCartItem.quantity++;
  } else {
    // añadir el item al carrito
    this.cartItems.push(theCartItem);
   }

   // calcular el precio total y la cantidad total
   this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publicar el precio total y la cantidad total
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // loguear los datos del carrito
    this.logCartData(totalPriceValue, totalQuantityValue);
    
    // persistir los datos del carrito
    this.persistCartItems();
  }

  persistCartItems() {
    this.Storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }

    decrementQuantity(theCartItem: CartItem) {

      theCartItem.quantity--;

      if (theCartItem.quantity === 0) {
        this.remove(theCartItem);
      } else {
        this.computeCartTotals();
      }
    }

  remove(theCartItem: CartItem) {
    
    // obtener el item del array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id);

    // si se encuentra, eliminar el item del array
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}