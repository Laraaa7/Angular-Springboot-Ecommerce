import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { CartDetails } from './components/cart-details/cart-details';
import { Checkout } from './components/checkout/checkout';
import { Login } from './components/login/login';
import { MembersPage } from './components/members-page/members-page';
import { AuthGuard } from '@auth0/auth0-angular';
import { OrderHistoryComponent } from './components/order-history/order-history';

export const routes: Routes = [
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard],
    data: {loginOptions: { screen_hint: 'login' }}
  },
  { path: 'members', component: MembersPage, canActivate: [AuthGuard],
    data: {loginOptions: { screen_hint: 'login' }}
  },
  { path: 'login', component: Login },
  { path: 'checkout', component: Checkout },
  { path: 'cart-details', component: CartDetails },
  { path: 'products/:id', component: ProductDetails },
  { path: 'search/:keyword', component: ProductList },
  { path: 'category/:id', component: ProductList },
  { path: 'category', component: ProductList },
  { path: 'products', component: ProductList },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
