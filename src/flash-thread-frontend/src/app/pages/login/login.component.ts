import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MainLoaderComponent } from '../../components/main-loader/main-loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MainLoaderComponent,
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
  mainLoader:boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private requestService: RequestService) {  }

  send(formDirective: FormGroupDirective) {
    this.mainLoader = true;
    if(this.form.valid) {
      this.requestService.post<any>(environment.signIn, this.form.value).subscribe((d) => {
        this.mainLoader = false;
        localStorage.setItem('token', d.access_token);
        this.router.navigate(['./']);

      }, (error) => {
        if (error.status == 401) {
          this.mainLoader = false;
          this.isFalseLogin = true;
        }
      })
      formDirective.resetForm();
    }
  }
}
