import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public detailedpath:any;
  constructor(
    private _router: Router
  ){}
  ngOnInit(){
    this.detailedpath = window.location.origin + '/ftwebster';
  }
    nextPage(menu: string){
    this._router.navigate([`/${menu}`]);

  }
  ftweb(){
    // this._router.navigate([]).then((result) => {
    //   window.open('/ftwebster', 'ftwebster', 'resizable, width=200px, height=300px');
    // });
    window.open('http://localhost:4200/ftwebster', 'ftwebster', 'resizable, width=200px, height=300px');
    // window.open('http://localhost:4200/ftwebster', '_blank');
  }

}
