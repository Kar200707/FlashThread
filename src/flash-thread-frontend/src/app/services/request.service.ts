import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  post<T>(url: string, data: T):Observable<T> {
    return this.http.post<T>(url, data);
  }
}
