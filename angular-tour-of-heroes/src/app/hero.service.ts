import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({           //ng generate service - command registers a provider with the root injector (object that chooses and injects the provider when app requires it)
  providedIn: 'root',
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }   //service-in-service - inject MessageService into HeroService 
                                                            //which is then injected into the HeroesComponent
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  
}                                                           
