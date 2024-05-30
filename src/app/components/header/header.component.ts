import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ShareService } from '../../services/share.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchValue: string = ""

  constructor(public dialog: MatDialog, private shareService: ShareService) { }

  onSearch(event: any) {
    this.searchValue = event.target.value;
    this.shareService.changeSearchValue(this.searchValue);
  }

  openDialog(): void {
    this.dialog.open(ModalComponent);
  }
}
