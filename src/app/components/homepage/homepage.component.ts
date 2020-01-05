import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private route :ActivatedRoute) { }

  ngOnInit() {

  
  }
  
  nav(string){
    console.log(string)
    this.router.navigate([string],{relativeTo:this.route})
  }
}
