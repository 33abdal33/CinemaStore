import { Component, inject } from '@angular/core';
import { Movie } from '../../../Shared/models/movie.model';
import { BuyService } from '../../services/buy.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { SimpleHeaderComponent } from "../../../Shared/components/simple-header/simple-header.component";
import { EventCardComponent } from "../../../Shared/components/event-card/event-card.component";
import { FooterComponent } from "../../../Shared/components/footer/footer.component";
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
<<<<<<< HEAD
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
=======
>>>>>>> a6ddba712983676e4b05296e23afda27c2c38a6c

@Component({
  selector: 'app-buy-dialog',
  standalone: true,
<<<<<<< HEAD
  imports: [JsonPipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,],
=======
  imports: [JsonPipe, FormsModule, SimpleHeaderComponent, EventCardComponent, FooterComponent, AsyncPipe, MatFormField, MatFormFieldModule],
>>>>>>> a6ddba712983676e4b05296e23afda27c2c38a6c
  templateUrl: './buy-dialog.component.html',
  styleUrl: './buy-dialog.component.css'
})
export class BuyDialogComponent {
  data = inject(MAT_DIALOG_DATA) as Movie;
  buyService = inject(BuyService);
  matDialogRef = inject(MatDialogRef);

  buyTickets(quantity: number) {
    this.buyService
      .buy(this.data.id.toString(), quantity.toString())
      .subscribe((response) => {
        if (response.success) {
          this.matDialogRef.close(response.data);
        } else {
          alert(response.errorMessage);
        }
      });
  }
}
