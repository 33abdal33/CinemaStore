import { Component, inject } from '@angular/core';
import { Movie } from '../../../Shared/models/movie.model';
import { BuyService } from '../../services/buy.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-buy-dialog',
  standalone: true,
  imports: [JsonPipe, FormsModule],
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
