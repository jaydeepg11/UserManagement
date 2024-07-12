import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazycomp1',
  templateUrl: './lazycomp1.component.html',
  styleUrls: ['./lazycomp1.component.css']
})
export class Lazycomp1Component implements OnInit {

  ngOnInit(): void {
    console.log("lazy component is loaded");
  }

}
