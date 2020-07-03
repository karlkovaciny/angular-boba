import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { DashboardComponent } from './dashboard.component';
import { SelectedVideoComponent } from './selected-video/selected-video.component';
import { FilterComponent } from './filter/filter.component';
import { VideoComponent } from './preview/video/video.component';

const routes: Routes = [
  {    path: '', component: DashboardComponent  },
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent, 
    PreviewComponent, 
    VideoComponent,
  SelectedVideoComponent,
  FilterComponent
  ]
})
export class DashboardModule { }