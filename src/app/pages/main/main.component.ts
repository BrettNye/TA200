import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(
    private _router: Router
  ){}
    nextPage(menu: string){
    this._router.navigate([`/${menu}`]);
  }

}
