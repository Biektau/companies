import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  form: FormGroup;
  panelOpenState = false;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    
    private dialogRef: MatDialogRef<ModalComponent>
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      inn: [''],
      fullName: [''],
      type: [''],
      region: [''],
      ogrn: [''],
      legalAdress: [''],
      leader: [''],
      phoneNumber: [''],
      email: ['', Validators.email],
      okato: [''],
      oktmo: [''],
      okpo: [''],
      okogy: [''],
      okfs: [''],
      okved: [''],
      actualAddress: [''],
      postAdress: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.companyService.postCompany(this.form.value).subscribe({
        next: (response) => {
          console.log('Company submitted successfully', response);
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Error submitting company', error);
        },
      });
    }
  }
}
