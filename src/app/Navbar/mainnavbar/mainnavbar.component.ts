import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent implements AfterContentInit {
  @ContentChild('title')title!:ElementRef;
  @ContentChildren('title')lsttitle!:QueryList<ElementRef>;

ngAfterContentInit(): void {
  console.log('Content Title : '+this.title.nativeElement.innerHTML);
  console.log('Content Titlelst : '+this.lsttitle.last.nativeElement.innerHTML);
}



}
