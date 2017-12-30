import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Villains } from '../villains';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes : Hero[];

  constructor(private heroService : HeroService) {
      
   }
  
  //Object declaration
  hero : Hero = {
    id : 1,
    name : 'VIZNAR'
  }

  //Object initiation
  selectedHero : Hero ;

  //Method definition 
  onSelect(hero: Hero): void  {
    this.selectedHero = hero;
  }

  villains : Villains = {
    id : 2,
    name: 'OWL',
    type : 'NIGHT'
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
