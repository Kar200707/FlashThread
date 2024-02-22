import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { RequestService } from "../../services/request.service";
import { environment } from "../../../environment/environment";
import { HttpClientModule } from "@angular/common/http";
import { MainLoaderComponent } from '../../components/main-loader/main-loader.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainLoaderComponent,
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
  mainLoader:boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+$/),
      Validators.max(10)
    ])
  })

  constructor(
    private router: Router,
    private requestService: RequestService) {  }

  send(formDirective: FormGroupDirective) {
    this.mainLoader = true;
    if(this.form.valid) {
      this.requestService.post<any>(environment.signUp, this.form.value).subscribe((d) => {
        this.mainLoader = false;
        localStorage.setItem('token', d.access_token);
        this.router.navigate(['./']);

      }, (error) => {
        if (error.status == 401) {
          this.mainLoader = false;
          this.isFalseRegister = true;
        }
      })
      formDirective.resetForm();
    }
  }
}
