import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }   //private heroService parameter of type HeroService - defines property and identifies as injection site

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);  //back tick!  
  }

  getHeroes(): void {
    this.heroService.getHeroes()                  //observable
      .subscribe(heroes => this.heroes = heroes); //subscribe method passes the emitted array to the callback, which sets the component's heroes property.
  }
  
  
}
