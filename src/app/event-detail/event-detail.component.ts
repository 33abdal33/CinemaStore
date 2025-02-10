import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetailService } from './services/event-detail.service';
import { Observable, map } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';



import { Movie } from '../Shared/models/movie.model';
import { AuthService } from '../Shared/Service/auth.service';
import { VoucherDialogComponent } from '../Shared/components/voucher-dialog/voucher-dialog.component';
import { EventCardComponent } from '../Shared/components/event-card/event-card.component';
import { BuyDialogComponent } from './buy-dialog/buy-dialog/buy-dialog.component';
import { SimpleHeaderComponent } from '../Shared/components/simple-header/simple-header.component';
import { FooterComponent } from '../Shared/components/footer/footer.component';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    SimpleHeaderComponent,
    FooterComponent,
    EventCardComponent,
    AsyncPipe,
    MatButtonModule,
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  eventId = '';
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  eventDetailService = inject(EventDetailService);
  matDialog = inject(MatDialog);
  authService = inject(AuthService);

  data$ = new Observable<Movie>();

  movieData: Movie | undefined;

  notifications = inject(NotificationsService)

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.data$ = this.eventDetailService.getData(this.eventId).pipe(
      map((response) => {
        this.movieData = response.data;
        return response.data;
      })
    );
  }

  openDialog() {
    if (!this.authService.loggedIn()) {
      this.notifications.warn('Inicia sesión', 'Debes iniciar sesión para comprar entradas');
      this.router.navigate(['/login']);
      return;
    }
    if (this.authService.isAdministrator()) {
      this.notifications.warn('No autorizado', 'No puedes comprar entradas siendo administrador')
      return;
    }
    const buyDialogRef = this.matDialog.open(BuyDialogComponent, {
      data: this.movieData,
    });
    buyDialogRef.afterClosed().subscribe((saleId) => {
      if (saleId) {
        this.notifications.success('Compra exitosa!', 'Voucher generado');
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
