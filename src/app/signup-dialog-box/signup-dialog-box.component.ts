import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';


@Component({
  selector: 'app-signup-dialog-box',
  standalone: true,
  imports: [FaIconComponent,MatButtonModule,MatIconModule],
  templateUrl: './signup-dialog-box.component.html',
  styleUrl: './signup-dialog-box.component.css'
})
export class SignupDialogBoxComponent {
  faXmark =faXmark;


  constructor(public dialog:MatDialog,public dialogRef:MatDialogRef<SignupDialogBoxComponent>) {}

  
  openlogin(event:MouseEvent)
  {
    event.preventDefault();
    this.dialogRef.close();
    this.dialog.open(DialogBoxComponent,{

    })
  }
}
