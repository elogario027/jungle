import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-worksheets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './worksheets.component.html',
  styleUrl: './worksheets.component.css'
})
export class WorksheetsComponent {

  constructor(){}

  downloadPDF(activityName: string): void{
    let link = document.createElement("a");
    link.download = `${activityName}.pdf`;
    link.href = `assets/activityPDFfiles/${activityName}.pdf`; 
    link.click();
  }
}
