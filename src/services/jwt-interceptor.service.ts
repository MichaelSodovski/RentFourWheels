import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { store } from 'src/app/redux/store';

@Injectable()

export class JwtInterceptorService implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer" + store.getState().user?.JwtToken
            }
        });
        return next.handle(request);
    }
}
