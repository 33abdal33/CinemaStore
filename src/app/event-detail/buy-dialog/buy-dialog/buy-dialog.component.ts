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

@Component({
  selector: 'app-buy-dialog',
  standalone: true,
  imports: [JsonPipe, FormsModule, SimpleHeaderComponent, EventCardComponent, FooterComponent, AsyncPipe, MatFormField, MatFormFieldModule],
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
