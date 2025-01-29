import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
