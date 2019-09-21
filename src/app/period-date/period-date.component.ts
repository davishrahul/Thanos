import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-period-date',
  templateUrl: './period-date.component.html',
  styleUrls: ['./period-date.component.css']
})
export class PeriodDateComponent implements OnInit {
  periodDates
  constructor() { }

  ngOnInit() {
    this.periodDates=new FormGroup({
      nextPeriodDate:new FormControl(''),
      ovulation:new FormControl('')
    })
  }
  

}
