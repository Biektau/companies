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

  // [
  //   {
  //     "name": "Компания 1",
  //     "region": 1,
  //     "inn": 1234567890,
  //     "kpp": "123451001"
  //   },
  //   {
  //     "name": "Компания 2",
  //     "region": 2,
  //     "inn": 2345678901,
  //     "kpp": "234562002"
  //   },
  //   {
  //     "name": "Компания 3",
  //     "region": 3,
  //     "inn": 3456789012,
  //     "kpp": "345673003"
  //   },
  //   {
  //     "name": "Компания 4",
  //     "region": 4,
  //     "inn": 4567890123,
  //     "kpp": "456784004"
  //   },
  //   {
  //     "name": "Компания 5",
  //     "region": 5,
  //     "inn": 5678901234,
  //     "kpp": "567895005"
  //   },
  //   {
  //     "name": "Компания 6",
  //     "region": 6,
  //     "inn": 6789012345,
  //     "kpp": "678906006"
  //   },
  //   {
  //     "name": "Компания 7",
  //     "region": 7,
  //     "inn": 7890123456,
  //     "kpp": "789017007"
  //   },
  //   {
  //     "name": "Компания 8",
  //     "region": 8,
  //     "inn": 8901234567,
  //     "kpp": "890128008"
  //   },
  //   {
  //     "name": "Компания 9",
  //     "region": 9,
  //     "inn": 9012345678,
  //     "kpp": "901239009"
  //   },
  //   {
  //     "name": "Компания 10",
  //     "region": 10,
  //     "inn": 1023456789,
  //     "kpp": "102340101"
  //   },
  //   {
  //     "name": "Компания 11",
  //     "region": 11,
  //     "inn": 2134567890,
  //     "kpp": "213451102"
  //   },
  //   {
  //     "name": "Компания 12",
  //     "region": 12,
  //     "inn": 3245678901,
  //     "kpp": "324561203"
  //   },
  //   {
  //     "name": "Компания 13",
  //     "region": 13,
  //     "inn": 4356789012,
  //     "kpp": "435671304"
  //   },
  //   {
  //     "name": "Компания 14",
  //     "region": 14,
  //     "inn": 5467890123,
  //     "kpp": "546781405"
  //   },
  //   {
  //     "name": "Компания 15",
  //     "region": 15,
  //     "inn": 6578901234,
  //     "kpp": "657891506"
  //   },
  //   {
  //     "name": "Компания 16",
  //     "region": 16,
  //     "inn": 7689012345,
  //     "kpp": "768901607"
  //   },
  //   {
  //     "name": "Компания 17",
  //     "region": 17,
  //     "inn": 8790123456,
  //     "kpp": "879011708"
  //   },
  //   {
  //     "name": "Компания 18",
  //     "region": 18,
  //     "inn": 9801234567,
  //     "kpp": "980121809"
  //   },
  //   {
  //     "name": "Компания 19",
  //     "region": 19,
  //     "inn": 1923456789,
  //     "kpp": "192341901"
  //   },
  //   {
  //     "name": "Компания 20",
  //     "region": 20,
  //     "inn": 2034567890,
  //     "kpp": "203452002"
  //   }
  // ]
}
