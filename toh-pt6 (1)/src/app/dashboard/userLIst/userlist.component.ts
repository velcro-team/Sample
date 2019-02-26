import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  @Input() userRecord:any[];
  //@Output() sendRecord: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

}
