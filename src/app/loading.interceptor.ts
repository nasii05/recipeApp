import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loader:LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loader.show()
    return next.handle(req).pipe(
      finalize(() => this.loader.hide())
    )
  };
}
