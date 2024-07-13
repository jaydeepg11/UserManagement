import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent implements AfterContentInit {
  @ContentChild('title0')title!:ElementRef;
  @ContentChildren('title0')lsttitle!:QueryList<ElementRef>;

ngAfterContentInit(): void {
  console.log('Content Title : '+this.title.nativeElement.innerHTML);
  console.log('Content Titlelst : '+this.lsttitle.last.nativeElement.innerHTML);
}



}
