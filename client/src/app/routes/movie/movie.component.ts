import { Component, OnInit } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';
import { catchError, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies:any[]=[];
  loading = false;
  constructor(
    private movieService: MovieService,
    private nzImageService: NzImageService,
  ) { }

  ngOnInit(): void {
    this.movieData();
  }

  movieData() {
    this.movieService
      .getAllMovie()
      .pipe(catchError((err) => of(err)))
      .subscribe((response) => {
        this.movies = response;
      });
  }
  onClick(): void {
  }
  clear(){
  }
}
