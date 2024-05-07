import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MoreComponent } from './more/more.component';
import { ProductComponent } from './product/product.component';
import { WorksheetsComponent } from './worksheets/worksheets.component';
import { EndangeredanimalsComponent } from './endangeredanimals/endangeredanimals.component';
import { HelpanimalsComponent } from './helpanimals/helpanimals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutComponent, ContactUsComponent, MoreComponent, ProductComponent, WorksheetsComponent
    , EndangeredanimalsComponent, HelpanimalsComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jungleApp';
}
