import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent {
  originalSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: 'dark',
    subscriptionType: 'Yearly',
    notes: 'here are some notes...',
  };

  userSettings: UserSettings = { ...this.originalSettings };

  onSubmit(form: NgForm): void {
    console.log('In onSubmit: ', form.valid);
  }

  onBlur(field: NgModel): void {
    console.log('In onBlur: ', field.valid);
  }
}
