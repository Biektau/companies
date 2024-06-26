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
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Company } from '../../types/company-detail';
import { ShareService } from '../../services/share.service';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  private companyService = inject(CompanyService);
  dataSource: MatTableDataSource<Company> | null = null;

  constructor(private shareService: ShareService) { }

  selectItem(item: Company): void {
    this.shareService.changeCompanyValue(item);     
  }

  ngOnInit(): void {
    this.loadCompanies();
    this.shareService.currentSearchValue.subscribe(searchValue => {
      this.applyFilter(searchValue);
    })
  }

  applyFilter(searchValue: string) {
    if (this.dataSource) {
      this.dataSource.filter = searchValue.trim().toLowerCase();
    }
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe({
      next: (companies: Company[]) => {
        this.dataSource = new MatTableDataSource<Company>(companies);

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

  
}
