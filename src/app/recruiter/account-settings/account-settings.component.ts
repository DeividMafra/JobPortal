import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  recruiterInfo = new FormGroup({
    recruiterName: new FormControl('', Validators.required),
    currentTitle: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  changePassword = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

}
