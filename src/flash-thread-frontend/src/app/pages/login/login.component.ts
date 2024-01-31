import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { SetThemesService } from '../../services/set-themes.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    RequestService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  isFalseLogin: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private setMobileThemes: SetThemesService,
    private router: Router,
    private requestService: RequestService) {
    this.setMobileThemes.setStatusBarStyle('#ffffff').then().catch();
  }

  send(formDirective: FormGroupDirective) {
    if(this.form.valid) {
      this.requestService.post<any>(environment.signIn, this.form.value).subscribe((d) => {
        localStorage.setItem('token', d.access_token);
        this.router.navigate(['./']);

      }, (error) => {
        if (error.status == 401) {
          this.isFalseLogin = true;
        }
      })
      formDirective.resetForm();
    }
  }
}
