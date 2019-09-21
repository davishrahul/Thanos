import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-next-period-date',
  templateUrl: './next-period-date.component.html',
  styleUrls: ['./next-period-date.component.css']
})
export class NextPeriodDateComponent implements OnInit {
  nxtPeriodDate
  constructor() { }

  ngOnInit() {
    this.nxtPeriodDate=new FormGroup({
      nextPeriodDate:new FormControl(''),
      ovulation:new FormControl('') 
    })
  }

}
