import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company } from '../types/company-detail';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private searchValueSource = new BehaviorSubject<string>('');
  currentSearchValue = this.searchValueSource.asObservable();

  private companyValueSource = new BehaviorSubject<Company | undefined>(undefined);
  currentCompanyValue = this.companyValueSource.asObservable();

  constructor() { }

  changeSearchValue(value: string) {
    this.searchValueSource.next(value);
  }

  changeCompanyValue(company: Company) {
    this.companyValueSource.next(company);
  }
}