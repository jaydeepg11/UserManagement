import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  id:string="";
  constructor(private route : ActivatedRoute)
  {
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    
  }


}
