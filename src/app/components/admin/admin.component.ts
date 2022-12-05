import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  @Input() details:any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.details)
  }
  ngOnChanges(){
    console.log(this.details)
  }
}
