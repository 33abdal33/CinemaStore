import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoggedInHeaderComponent } from '../Shared/components/logged-in-header/logged-in-header/logged-in-header.component';
import { FooterComponent } from '../Shared/components/footer/footer.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [LoggedInHeaderComponent, FooterComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
