import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private searchValueSource = new BehaviorSubject<string>('');
  currentSearchValue = this.searchValueSource.asObservable();

  constructor() { }

  changeSearchValue(value: string) {
    this.searchValueSource.next(value);
  }
}