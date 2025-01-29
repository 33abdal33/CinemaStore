import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

}
