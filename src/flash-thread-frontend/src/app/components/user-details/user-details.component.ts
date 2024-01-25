import { Component, Input } from "@angular/core";
import { ResizeHeightDirective } from "../../directives/resize-height.directive";
import { User } from "../../models/user.model";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterLink } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { environment } from '../../../environment/environment';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    ResizeHeightDirective,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() userData!: User;
  token: string | null = localStorage.getItem('token');

  constructor(
    private reqService: RequestService,
    private readonly router: Router) {  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

    this.reqService.post(environment.userLogout, { token: this.token })
      .subscribe(() => {})
  }
}
