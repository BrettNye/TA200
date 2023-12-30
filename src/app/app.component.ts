import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TA200';

  constructor(
    private _router: Router
  ){}
  ngOnInit(): void {
    this._router.navigate(['/main']);
  }
  Scanner(){
    alert("Scanner Click Test");
  }
}
