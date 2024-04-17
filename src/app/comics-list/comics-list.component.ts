import { Component, OnInit } from '@angular/core';
import { Comic } from '../model';
import { ComicService } from '../services/comic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  comics$: Observable<Comic[]>;

  constructor(
    private comicService: ComicService
  ) { }

  ngOnInit() {
    this.comics$ = this.comicService.getComics();

  }


}
