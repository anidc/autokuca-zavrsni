import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = [];
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = 
    const id = this.router.snapshot.params.id
    this.getUser(id)
  }

  getUser(id: number) {
    this.userService.getUserInfo(id).subscribe(response => {
      this.user = response;
    })
  }
}
