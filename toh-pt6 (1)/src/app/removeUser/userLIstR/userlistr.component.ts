import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userlistr',
  templateUrl: './userlistr.component.html',
  styleUrls: ['./userlistr.component.css']
})
export class UserListRComponent implements OnInit {

  constructor() { }

  @Input() userRecord:any[];
  @Output() sendRecord: EventEmitter<any> = new EventEmitter();


  removeUser(i){
    let studentSelected={
      stuNameSel: this.userRecord
    }
    
this.sendRecord.emit(studentSelected.stuNameSel[i]);
  }

  ngOnInit() {
  }

}
