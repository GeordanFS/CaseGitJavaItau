import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PullsOfProject } from '../interfaces/pulls-of-project';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Items } from '../interfaces/items';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  listOfRepositories: any;
  listOfPulls: any;


  token={
    headers: new HttpHeaders().set('Authorization', environment.token),
  };
  refreshToken(){
    this.token={
      headers:new HttpHeaders().set("Authorization", environment.token),
    };
  }
  getRepositories(): Observable<Items> {
    return this.http.get<Items>(environment.urlBff);

  }
  getPullRequests(fullName: string): Observable<PullsOfProject[]> {
    return this.http.get<PullsOfProject[]>(environment.urlBff + "/" + fullName);
  }

}
