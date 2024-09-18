import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { convertToPtBrDate } from 'src/app/utils/convert-to-ptbr-date';
import { GenresListResponse } from 'src/app/types/genres-list-response';
import { StatesListResponse } from 'src/app/types/states-list-response';
import { convertObjToPtBrDate } from 'src/app/utils/convert-obj-to-ptbr-date';
import { getPasswordStrenghtValue } from 'src/app/utils/get-password-strenght-value';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IGenre } from 'src/app/interfaces/genre.interface';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnChanges, OnInit {
  passwordStrenghtValue = 0;

  displayedColumns: string[] = ["title", "band", "genre", "favorite"];
  filteredGenresList: GenresListResponse = [];

  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmitt = new EventEmitter<void>();

  constructor (
    private readonly _el: ElementRef
  ) {}

  ngOnInit(): void {
    this.setMaxMinDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges');
    const USER_CHANGED = ['userSelcted'];

    if(USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatePicker(this.userSelected.birthDate);
      this.filteredGenresList = []

    }
  }

  onPasswordChange(password: string) {
    this.passwordStrenghtValue = getPasswordStrenghtValue(password);
  }

  displayFN(genreID: number): string {
    const genreFound = this.genresList.find(genre => genre.id === genreID);
    return genreFound ? genreFound.description : 'None'; 
  }

  filterGenre(text: string) {
    if(typeof text === 'number') return;

    const searchTerm = text.toLocaleLowerCase();

    this.filteredGenresList = this.genresList.filter(genre => genre.description.toLocaleLowerCase().includes(searchTerm));
   
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite);
  }

  onFormSubmit(form: NgForm) {

    if(form.invalid) {
      this.focusOnInvalidControl(form);

      return;
    }

    this.onFormSubmitEmitt.emit();
  }

  focusOnInvalidControl(form: NgForm) {
    for (const control of Object.keys(form.controls)) {
      if(form.controls[control].invalid) {
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`);

        invalidControl.focus();

        break;
      }
    }
  }

  onDateChange(event: MatDatepickerInputEvent<any,any>) {
    if(!event.value) {
      return;
    }

    console.log(event);
    this.userSelected.birthDate = convertObjToPtBrDate(event.value);
  }

  private setMaxMinDate() {
    let data = new Date()

    this.minDate = new Date(data.getFullYear() - 100, 0, 1);
    this.maxDate = new Date(data.getFullYear(), data.getMonth(), data.getDay())
  }
  
  private setBirthDateToDatePicker(birthDate: string) {
    this.dateValue = convertToPtBrDate(birthDate);
  }

}

