import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styles: [
  ]
})
export class SearcherComponent implements OnInit {

  heroes:any[]=[];
  termn:string="";

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      // console.log(params['termn'])
      this.termn=params['termn'];
      this.heroes=this._heroesService.buscarHeroes(params['termn'])
      console.log(this.heroes)
    });
  }

}
