import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  query:string
  searchArray=['abc','xyz','gdfa','fxzr']
  list:string[]=this.searchArray
  public filterData

ngOnInit(){

}
  search(){
console.log(this.query)

  this.list= this.query ? this.searchArray.filter((item)=> item.includes(this.query)) : this.searchArray

  console.log(this.searchArray)
  }
}
