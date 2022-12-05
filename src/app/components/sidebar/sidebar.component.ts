import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SidebarService } from "./sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ['./sidebar.component.css']

})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  customers:any=[]
   detail:any;
   addUserForm:FormGroup;
  constructor(private sidebarService:SidebarService) { 
    this.addUserForm= new FormGroup({
      'address': new FormGroup({
          'landmark':new FormControl(null,[Validators.required]),
          'city':new FormControl(null,[Validators.required]),
          'country':new FormControl(null,[Validators.required]),
          'state':new FormControl(null,[Validators.required]),
          'zipcode':new FormControl(null,[Validators.required]),
         
      }),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('male',[Validators.required]),
      'firstName':new FormControl(null,[Validators.required]),
      'lastName':new FormControl(null,[Validators.required]),
      'username':new FormControl(null,[Validators.required]),
      'mobile':new FormControl(null,[Validators.required]),
      'dob':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required]),
      'picture':new FormControl("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp",[Validators.required]),


    });
  }
  onSubmit(){
    console.log(this.addUserForm.value)
    this.sidebarService.addCustomer(this.addUserForm.value).subscribe(res=>{
      this.getCustomers();
    })
  }
  ngOnInit() { 
    this.getCustomers()
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
  getCustomers(){
    this.sidebarService.getCustomers().subscribe(res=>{
      console.log(res)
      this.customers=res;
    })

  }

  showDetails(det:any){
    console.log(det)
    this.detail=det;

  }
}
