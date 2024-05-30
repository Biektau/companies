import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatExpansionModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  form: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) {
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
      //  логика отправки формы
      console.log(this.form.value);
    }
  }
}
