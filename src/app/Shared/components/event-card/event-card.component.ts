import { Component, Input } from '@angular/core';
import { emptyMovie, Movie } from '../../models/movie.model';
import { TextLimiterPipe } from '../../pipes/text-limiter.pipe';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [TextLimiterPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

  @Input({ required: true }) data!: Movie;


}
