import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { User } from '../../models/user.model';
import { environment } from '../../../environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    RequestService
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    file: new FormControl('',  Validators.required),
  })

  constructor(private reqService: RequestService) {  }

  ngOnInit() {  }

  send (e: any) {
    let formData:FormData = new FormData();

    // const obj:any = {
    //   file: ,
    //   karen: 'sdasd'
    // }
    formData.set('file', e.files[0])

    this.reqService.put<User>(environment.userEdit, formData)
      .subscribe((data) => {})
  }
}
