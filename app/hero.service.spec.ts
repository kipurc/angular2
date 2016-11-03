import {HeroService} from './hero.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

describe('HeroService', () => {
    let heroService: HeroService;

    beforeEach(function() {
        heroService = new HeroService();
    });

    it('should return the HEROES array when getHeroes is called', done => {
        heroService.getHeroes().then((heroes: Hero[]) => {
            expect(heroes).toBe(HEROES);
            done();
        });
    });

});
