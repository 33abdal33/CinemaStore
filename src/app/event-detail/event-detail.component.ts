import { Component, inject, OnInit } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { VoucherDialogComponent } from '../Shared/components/voucher-dialog/voucher-dialog.component';
import { AuthService } from '../Shared/Service/auth.service';
import { BuyDialogComponent } from './buy-dialog/buy-dialog/buy-dialog.component';
import { EventDetailService } from './services/event-detail.service';
import { Movie } from '../Shared/models/movie.model';
import { EventCardComponent } from '../Shared/components/event-card/event-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, EventCardComponent, AsyncPipe],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit {
  eventId = '';
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  eventDetailService = inject(EventDetailService);
  matDialog = inject(MatDialog);
  authService = inject(AuthService);

  data$ = new Observable<Movie>();

  concertData: Movie | undefined;

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.data$ = this.eventDetailService.getData(this.eventId).pipe(
      map((response) => {
        this.concertData = response.data;
        return response.data;
      })
    );
  }

  openDialog() {
    if (!this.authService.loggedIn()) {
      alert(
        'Inicia sesión' + '\n' + 'Debes iniciar sesión para comprar entradas'
      );
      this.router.navigate(['/login']);
      return;
    }
    if (this.authService.isAdministrator()) {
      alert(
        'No autorizado' +
        '\n' +
        'No puedes comprar entradas siendo administrador'
      );
      return;
    }
    const buyDialogRef = this.matDialog.open(BuyDialogComponent, {
      data: this.concertData,
    });
    buyDialogRef.afterClosed().subscribe((saleId) => {
      if (saleId) {
        alert('Compra exitosa!' + '\n' + 'Voucher generado');
        const voucherDialogRef = this.matDialog.open(VoucherDialogComponent, {
          data: { saleId },
        });
        voucherDialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
