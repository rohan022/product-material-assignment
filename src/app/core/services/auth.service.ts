import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { AppSettings } from 'src/app/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public url = AppSettings.url;
  constructor(private http: HttpClient) {

   }
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  getProducts(){


   
    console.log("Working");
    return this.http.get(
      'http://run.mocky.io/v3/ac12bc80-3dcc-42d0-b1a1-3b7986d40c54',
      {responseType: 'json'})
    // return this.http.get(`${this.url}`);
    // return this.http
    //   .get(
    //     this.url
    //   )
    //   .pipe(catchError(this.handleError));
  }
  api(): Observable<any> {
    return this.http.get('https://5f9bc312856f4c00168c4482.mockapi.io/api/products/product');
  }



}
