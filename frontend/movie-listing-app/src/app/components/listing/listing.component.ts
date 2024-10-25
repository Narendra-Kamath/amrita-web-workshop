import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieListingService } from '../../services/movie-listing.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit {
  movieList: any;

  constructor(private _movieListingService: MovieListingService) {

  }

  ngOnInit(): void {
    this._movieListingService.fetchMovieList().subscribe((response) => {
      this.movieList = response;
    });
  }

}
