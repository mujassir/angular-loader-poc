import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import DataManager from 'src/managers/data.manager';

const LOCAL_STORAGE_KEY = "EmployeeData";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Data Loader POC';
  employeeData$: Observable<any>;
  loadDataFromCache = false;



  constructor( private dataManager: DataManager ) {
    this.loadDataFromCache = localStorage.getItem(LOCAL_STORAGE_KEY+"_Flag") ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY+"_Flag") || "") : false;

    let lsdata = this.loadDataFromCache? localStorage.getItem(LOCAL_STORAGE_KEY):null;
    let cachedata  = lsdata?  JSON.parse(lsdata) : null;
    this.employeeData$ = this.dataManager.getData().pipe(
      startWith(cachedata),
      tap(res => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res));
      })
    );
  }

  /**
   * checkBoxChange
   */
  public checkBoxChange($event: any) {
    debugger
    localStorage.setItem(LOCAL_STORAGE_KEY+"_Flag", JSON.stringify( $event.checked));
  }
 

}
