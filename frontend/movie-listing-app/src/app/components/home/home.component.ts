import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { HeaderComponent } from '../header/header.component';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, ListingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
