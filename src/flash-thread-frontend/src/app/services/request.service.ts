import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  post<T>(url: string, data: any):Observable<T> {
    return this.http.post<T>(url, data);
  }

  put<T>(url: string, data: any):Observable<T> {
    return this.http.put<T>(url, data);
  }
}
