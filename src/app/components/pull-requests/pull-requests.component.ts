import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PullsOfProject } from 'src/app/interfaces/pulls-of-project';
import { AuthService } from 'src/app/services/auth.service';
import { RepositoriesService } from 'src/app/services/repositories.service';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css']
})
export class PullRequestsComponent implements OnInit {

  listOfPulls!: Array<PullsOfProject>;


  constructor(private authService:AuthService,
    private repositoriesService: RepositoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let fullName = this.route.snapshot.params['fullName']
    this.getPullRequestsOfService(fullName)
    
    
  }


  getPullRequestsOfService(fullName: string): void {
    this.repositoriesService.getPullRequests(fullName).subscribe((response: PullsOfProject[]) => {
      this.listOfPulls = response;
      console.log(this.listOfPulls);
    });
  }
}