import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
// here we create a card for each member.
// Because this is a child of MembersList component we will take each user from that list with Input method
@Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
