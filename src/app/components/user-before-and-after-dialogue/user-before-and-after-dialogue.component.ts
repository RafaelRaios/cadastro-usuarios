import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-before-and-after-dialogue',
  templateUrl: './user-before-and-after-dialogue.component.html',
  styleUrls: ['./user-before-and-after-dialogue.component.scss']
})
export class UserBeforeAndAfterDialogueComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      originalUser: IUser,
      updatedUser: IUser,
    }
  ) {}

  
}
