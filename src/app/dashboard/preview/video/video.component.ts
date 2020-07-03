import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../dashboard.types';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video: Video

  constructor() { }

  ngOnInit() {
  }

}