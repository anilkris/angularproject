import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES  } from '../mock-heroes'
import { Student } from '../student';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES; 

  selectedHero? : Hero ;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero){
    console.log(hero);
    this.selectedHero = hero;
  }
}
