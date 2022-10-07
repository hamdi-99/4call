import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dc-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit, AfterViewInit {
  private fragment: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) {}
  }
}
