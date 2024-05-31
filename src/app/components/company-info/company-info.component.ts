import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ShareService } from '../../services/share.service';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.scss',
})
export class CompanyInfoComponent implements OnInit {
  data: any;
  form: FormGroup;
  panelOpenState = false;

  handleClose() {
    this.data = null;
  }

  ngOnInit(): void {
    this.shareService.currentCompanyValue.subscribe(
      (data) => (this.data = data)
    );
  }

  constructor(private shareService: ShareService, private fb: FormBuilder,) {
    this.form = this.fb.group({
      name: [this.data?.name],
      inn: [this.data?.inn || ''],
      fullName: [this.data?.fullName || ''],
      type: [this.data?.type || ''],
      region: [this.data?.region || ''],
      ogrn: [this.data?.ogrn || ''],
      legalAdress: [this.data?.legalAdress || ''],
      leader: [this.data?.leader || ''],
      phoneNumber: [this.data?.phoneNumber || ''],
      email: [this.data?.email || ''],
      okato: [this.data?.okato || ''],
      oktmo: [this.data?.oktmo || ''],
      okpo: [this.data?.okpo || ''],
      okogy: [this.data?.okogy || ''],
      okfs: [this.data?.okfs],
      okved: [this.data?.okved || ''],
      actualAddress: [this.data?.actualAddress || ''],
      postAdress: [this.data?.postAdress || ''],
    });
  }



}
