import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { HttpClientModule } from "@angular/common/http";
import { SetThemesService } from '../../services/set-themes.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RequestService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true;
  isFalseRegister: boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  })

  constructor(
    private setMobileThemes: SetThemesService,
    private router: Router,
    private requestService: RequestService) {
    this.setMobileThemes.setStatusBarStyle('#ffffff').then().catch();
  }

  send(formDirective: FormGroupDirective) {
    if(this.form.valid) {
      this.requestService.post<any>(environment.signUp, this.form.value).subscribe((d) => {
        localStorage.setItem('token', d.access_token);
        this.router.navigate(['./']);
      }, (error) => {
        if (error.status == 401) {
          this.isFalseRegister = true;
        }
      })
      formDirective.resetForm();
    }
  }
}
