import { Component } from '@angular/core';
import { LoggedInHeaderComponent } from "../Shared/components/logged-in-header/logged-in-header/logged-in-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LoggedInHeaderComponent, FooterComponent,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
