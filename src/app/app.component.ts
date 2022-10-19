import { Component} from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("constructor fired");
  }

  ngOnInit() {
    console.log("ngoninit fired");
  }


  title = 'expense_mgmt';
}
