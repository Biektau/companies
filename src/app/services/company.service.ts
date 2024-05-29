import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Company } from '../types/company-detail';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private http = inject(HttpClient);

  constructor() {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(BASE_URL);
  }
}
