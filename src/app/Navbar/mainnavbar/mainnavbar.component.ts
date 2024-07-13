import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent implements AfterContentInit,OnInit,AfterViewInit {
 
  @ContentChild('title0')title!:ElementRef;
  @ContentChildren('title0')lsttitle!:QueryList<ElementRef>;
 
  ngOnInit(): void {
    console.log('get session : '+sessionStorage.getItem("username"));
    console.log('get local storage : '+localStorage.getItem("username2"));
  }
  ngAfterViewInit(): void {
    
  }
  
ngAfterContentInit(): void {
  console.log('Content Title : '+this.title.nativeElement.innerHTML);
  console.log('Content Titlelst : '+this.lsttitle.last.nativeElement.innerHTML);
}



}
