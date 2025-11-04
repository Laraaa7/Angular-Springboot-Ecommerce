import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css',
})
export class CartDetails implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    
    // obtener el handle del observable totalPrice
    this.cartItems = this.cartService.cartItems;

    // suscribirse al observable totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )
    // suscribirse al observable totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )

    // calcular el precio total y la cantidad total
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
  this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
  this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
  this.cartService.remove(theCartItem);
  }
}
