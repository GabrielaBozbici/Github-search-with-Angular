import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repos: [];
  user: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.receiveEvent().subscribe((event) => {
      console.log('event: ', event);
      if (event.type === 'getrepos') {
        this.repos = event.data;
        this.user = event.user;
      }
    });
    console.log('repos din lista: ', this.repos);
  }
}
