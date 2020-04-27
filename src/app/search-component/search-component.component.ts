import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  @Input() user: string;
  data = [];

  constructor(public userService: UserService) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.getUsers(this.user).subscribe((res) => {
      const evtObject = {
        type: 'getrepos',
        data: res,
        user: this.user
      };
      this.userService.emmitEvt(evtObject);
      console.log('evtObject: ', evtObject);
      this.data = res;
    });
  }
}
