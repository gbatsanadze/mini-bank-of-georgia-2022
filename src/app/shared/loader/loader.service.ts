import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = 0;

  startLoading() {
    this.isLoading++;
  }

  endLoading() {
    this.isLoading = Math.max(this.isLoading - 1, 0);
  }

  useLoader = <T>(obs: Observable<T>): Observable<T> => {
    this.startLoading();
    return obs.pipe(finalize(() => this.endLoading()));
  }

  // isLoading = 0;
  //
  // startLoading() {
  //   this.isLoading = 1;
  // }
  //
  // endLoading() {
  //   this.isLoading = 0;
  // }
  //
  // useLoader(observable: any){
  //   this.startLoading();
  //   return observable.pipe(finalize(() => this.endLoading()));
  // }
}
