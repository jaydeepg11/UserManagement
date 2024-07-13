import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {
  id:string="";
  constructor(private route : ActivatedRoute)
  {
    console.log('Contructor call...');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit call...');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call...');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call...');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call...');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy call...');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges call...');
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log('oninit call...');
  }
  ngDoCheck(): void {
    console.log('Docheck call...');
  }


}
