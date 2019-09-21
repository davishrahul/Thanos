import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-extra-information',
  templateUrl: './extra-information.component.html',
  styleUrls: ['./extra-information.component.css']
})
export class ExtraInformationComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }
  public fdlp:Date;
  public averagePeriod:number;
  public result;
  public data
   

  calcPeriodDate() {

    
    // this.result=dateControl + this.averagePeriod;
    var a=stringify(this.fdlp)
    var ab: any[]=a.split('-')
    // console.log(ab[2])
    var c=parseInt(ab[2])+this.averagePeriod
    //  console.log(c)
     var d=parseInt(ab[1])
     var e=parseInt(ab[0])

          // console.log(this.result);
    var today=new Date();
    // var dd=today.getDate();
    // var mm=today.getMonth();
    // var yy=today.getFullYear();
    // console.log(dd+ " " + mm + " " +yy);
    if(c>30)
    {
        c=c-30;
        d=d+1
        console.log("Next Period date" +" "+ c);
        console.log("Next Period Month"  + " "+ d)

    }
    
    if(d>12)
    {
      e+=1     
    }
    console.log("Next Period Year"+ " "+ e )
    var f=c-14;
     console.log("Next Ovulation period " + " " + f,f+1,f+2);
     }

     

}
