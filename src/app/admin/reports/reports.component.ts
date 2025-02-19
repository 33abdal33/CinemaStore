import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { LoginComponent } from "../../login/login.component";
pdfMake.vfs = pdfFonts.vfs;

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [BaseChartDirective, LoginComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  pieChartData: ChartData<'pie', number[], string> = {
    labels: ['Ventas', 'Compras', 'Ganancias'],
    datasets: [
      {
        data: [500, 300, 100],
      },
    ],
  };
  pieChartType: ChartType = 'pie';

  loadRealData() {
    this.pieChartData.datasets[0].data = [100, 200, 300];
    this.chart?.update();
  }

  downloadPDF() {
    const data: TDocumentDefinitions = {
      content: [
        'First Paragraph',
        'afaksdljfkaslfjdifjsfosfpoasfjdisofnf dj jfidof jdsif dsaasifdiosfdsifoas'
      ]

    };
    pdfMake.createPdf(data).download();
  }
}
