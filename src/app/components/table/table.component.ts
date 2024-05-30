import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  inject,
} from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Company } from '../../types/company-detail';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  private companyService = inject(CompanyService);
  dataSource: MatTableDataSource<Company> | null = null;
  searchValue: string = ""

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadCompanies();
    this.shareService.currentName.subscribe(name => {
      this.searchValue = name;
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.dataSource) {
      const filteredCompanies = this.filterListBySearchvalue(this.dataSource.data, this.searchValue);
      this.dataSource.data = filteredCompanies;
    }
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (companies: Company[]) => {
        this.dataSource = new MatTableDataSource<Company>(companies);
        this.applyFilter(); // Обновляем dataSource с учетом searchValue
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        if (this.sort) {
          this.dataSource.sort = this.sort;
        }
      },
      error: (error: any) => {
        console.log('Error fetching companies');
        console.log(error);
      },
    });
  }

  displayedColumns: string[] = ['name', 'region', 'inn', 'kpp'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }
  }

  filterListBySearchvalue(list: Company[], searchString: string): Company[] {
    return list.filter((obj) => {
      return Object.values(obj).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchString.toLowerCase())
        }
        return false
      })
    })
  }
}
