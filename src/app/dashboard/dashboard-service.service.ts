import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard.types';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  videos: Observable<Video[]>;

  constructor(private http: HttpClient) { 
    this.videos = this.http.get<Video[]>(apiUrl + '/videos') 
  }

}