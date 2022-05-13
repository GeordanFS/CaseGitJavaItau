import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';

import { Items } from 'src/app/interfaces/items';
import { AuthService } from 'src/app/services/auth.service';

import { RepositoriesService } from 'src/app/services/repositories.service';
import { environment } from 'src/environments/environment';
import { PullsOfProject } from '../../interfaces/pulls-of-project';
import { Repositories } from '../../interfaces/repositories';

@Component({
  selector: 'app-list-of-repositories',
  templateUrl: './list-of-repositories.component.html',
  styleUrls: ['./list-of-repositories.component.css']
})
export class ListOfRepositoriesComponent implements OnInit {

  listOfRepositories!: Array<Repositories>;


  constructor(private authService:AuthService,
    private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {

    this.getRepositoriesOfService();

    

  }
 
  getRepositoriesOfService(): void {
    this.repositoriesService.getRepositories().subscribe((response: Items) => {
      this.listOfRepositories = response.items;
      console.log(this.listOfRepositories);

    });

  }


}
