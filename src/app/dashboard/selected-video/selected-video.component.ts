import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../dashboard.types';

@Component({
  selector: 'app-selected-video',
  templateUrl: './selected-video.component.html',
  styleUrls: ['./selected-video.component.css']
})
export class SelectedVideoComponent implements OnInit {

  @Input() selectedVideo: Video | undefined;

  constructor() { }

  // setSelectedVideo(video: Video) {
  //   this.selectedVideo = video;
  // }

  ngOnInit() {
    console.log("init", this.selectedVideo);
  }

}