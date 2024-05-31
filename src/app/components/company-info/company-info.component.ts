import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss'
})
export class CompanyInfoComponent implements OnInit {

  data: any

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.shareService.currentCompanyValue.subscribe(data => this.data = data)
  }

}
