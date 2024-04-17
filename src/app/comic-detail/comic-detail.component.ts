import { Component, OnInit } from '@angular/core';
import { Comic } from '../model';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../services/comic.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  comic: Comic;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) { }

  ngOnInit() {
    const comicId = this.route.snapshot.paramMap.get('id');
    this.comicService.getComicById(comicId).subscribe(comic => {
      this.comic = comic.data.results[0];
    });
  }
}
