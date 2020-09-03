import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAllSpaceXData(): Observable<any>{
    const url = `https://api.spacexdata.com/v3/launches?limit=100`;
    return this.http.get<any>(url);
  }

  getLaunchSuccess(bool): Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${bool}`; 
    return this.http.get<any>(url);
  }

  getLand_LaunchSuccess(bool): Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${bool}`; 
    return this.http.get<any>(url);
  }

  getAllLaunchLandSuccess(launchYear: any): Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${launchYear}`; 
    return this.http.get<any>(url);
  }
}
