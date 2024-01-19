import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  parent: string = '';
  @Input()
  child: string = '';
  @Input()
  class!: string;

  constructor(
    private _router: Router,
  ){}
  ngOnInit(): void {

    
  }
  nextPage(){
    this._router.navigate([`${this.parent}/${this.child}`]);
  }
}
