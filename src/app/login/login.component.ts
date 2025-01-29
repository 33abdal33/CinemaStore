import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
