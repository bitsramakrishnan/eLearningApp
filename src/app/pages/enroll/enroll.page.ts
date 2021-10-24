import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserEnroll } from '../../interfaces/user-enroll';
import { UserOptions } from '../../interfaces/user-options';
import { UserData } from '../../providers/user-data';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage {
  signup: UserEnroll = { username: '', email: '', mobileNo: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public toastCtrl: ToastController
  ) { }

  async onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);

      const toast = await this.toastCtrl.create({
        message: 'Successfully enrolled. We will contact you further.',
        duration: 5000
      });

      await toast.present();
      this.router.navigateByUrl('/app/tabs/courses', { skipLocationChange: true });
    }
  }
}
