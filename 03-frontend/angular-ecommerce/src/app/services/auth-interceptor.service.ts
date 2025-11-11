import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, from, firstValueFrom, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // convertir la función async en Observable para el interceptor
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {

    // endpoint que necesita token
    const theEndpoint = environment.shopApiUrl + '/orders';
    const securedEndpoints = [theEndpoint];

    if (securedEndpoints.some(url => request.urlWithParams.startsWith(url))) {

      // obtener el token JWT como string usando firstValueFrom
      const accessToken: string = await firstValueFrom(this.auth.getAccessTokenSilently());

      // clonar el request añadiendo el header Authorization
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    // enviar el request al servidor
    return await lastValueFrom(next.handle(request));
  }
}
