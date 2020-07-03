import { Component, OnInit } from '@angular/core';
import { Video } from './dashboard.types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedVideo: Video | undefined;

  constructor(private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.router.navigate([], {  queryParams: {selectedId: video.id}});
    this.selectedVideo = video;
  }

}