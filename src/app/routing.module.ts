import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { AboutComponent } from './about/about.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'comic/:id', component: ComicDetailComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule

  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
