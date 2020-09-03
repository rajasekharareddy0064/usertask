import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 allSpcaeXData: any;
  launchYearArray: any[] = [];
  uniqueLauncHYear: any;
  selected: any;
 
 ngOnInit(){
   this.getAllSpaceX();
 }

 constructor(private service: ServicesService) {}

 getAllSpaceX(){
   this.service.getAllSpaceXData().subscribe(
     next => {
       this.allSpcaeXData = next;

       this.launchYearArray = this.allSpcaeXData.map(r => r.launch_year);
       this.removeDuplicateUsingFilter(this.launchYearArray);
     }
   )
 }

  removeDuplicateUsingFilter(arr){
  let unique_array = arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  });
  this.uniqueLauncHYear = unique_array;
  return unique_array;
}

getLaunchSuccess(bool){
  this.service.getLaunchSuccess(bool).subscribe(
    next => {
      this.allSpcaeXData = next;

    }
  )
}

getLand_LaunchSuccess(landbool){
  this.service.getLand_LaunchSuccess(landbool).subscribe(
    next => {
      this.allSpcaeXData = next;

    }
  )
}

getAllLaunchLandSuccess(launchYear) {
  this.selected = launchYear;
  this.service.getAllLaunchLandSuccess(launchYear).subscribe(
    next => {
      this.allSpcaeXData = next;

    }
  )
}

}
