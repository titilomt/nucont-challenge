import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NucontService {
  nucont:any = [];
  private _url: string = "http://localhost:3003/doIt/";

  constructor(private http: HttpClient) { }

  postStageOne(data:any): Observable<any> {
    return this.http.post<any>(
      `${this._url}one`, 
      {data}
    ).pipe(map((res: Response) => {
      return res;
    }, catchError(this.handleError)));
  }

  postStageTwo(data:any): Observable<any> {
    let url = `${this._url}two`;
    return this.http.post<any>(
      url,
      {data}
    ).pipe(map((res: Response) => {
      return res;
    }, catchError(this.handleError)));
  }

  postStageThree(data:any): Observable<any> {
    let url = `${this._url}three`;
    return this.http.post<any>(
      url,
      {data}
    ).pipe(map((res: Response) => {
      return res;
    }, catchError(this.handleError)));
  }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
}
