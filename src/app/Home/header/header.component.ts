import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../Shared/Service/auth.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchBarService } from '../services/search-bar.service';
import { debounceTime, map, startWith } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchBarFormControl = new FormControl('');
  searchBarService = inject(SearchBarService);
  authService = inject(AuthService);

  constructor() {
    this.searchBarService.currentValue$ =
      this.searchBarFormControl.valueChanges.pipe(
        map((value) => (value ? value : '')),
        debounceTime(300),
        startWith('')
      );
  }
}