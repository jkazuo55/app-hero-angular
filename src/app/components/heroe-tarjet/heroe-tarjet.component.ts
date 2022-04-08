import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjet',
  templateUrl: './heroe-tarjet.component.html',
  styleUrls: ['./heroe-tarjet.component.css']
})
export class HeroeTarjetComponent implements OnInit {

  @Input() heroe:any={};
  @Input() index:number=0;

  @Output() selectedHeroe:EventEmitter<number>;

  constructor(private router:Router) { 
    this.selectedHeroe= new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index)
    this.router.navigate(['/heroe',this.index])
    // this.selectedHeroe.emit(this.index)
  }


}
