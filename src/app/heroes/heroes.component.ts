import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];


  constructor(private heroService: HeroService,private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log("Hi I am component getheores");
    // this.heroes = ;
    const myObs = this.heroService.getHeroes();
    myObs.subscribe(
      (data: Hero[]) => 
        this.heroes = data
    );

    console.log("Component Heroes ");
    console.log(this.heroes);

  }


}
