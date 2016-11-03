import { HeroDetailComponent } from './hero-detail.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Hero} from './hero';
import { FormsModule } from '@angular/forms';

////////  SPECS  /////////////
describe('HeroDetailComponent - no selection', function () {
    let heroTitle: DebugElement;
    let comp: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let heroTitleEl: HTMLElement;

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ HeroDetailComponent, HeroDetailComponent ]
        })
            .compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        comp = fixture.componentInstance;
        heroTitle = fixture.debugElement.query(By.css('h2'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should display no title upon initial render', () => {
        fixture.detectChanges();
        expect(heroTitle).toBeNull();
     });
});


describe('HeroDetailComponent - with selection', function () {
    let heroTitle: DebugElement;
    let heroDeets: DebugElement[];
    let comp: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let heroTitleEl: HTMLElement;
    let heroDeetsEl: HTMLElement;
    let selectedHero:   Hero;

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations: [ HeroDetailComponent, HeroDetailComponent ]
        })
            .compileComponents(); // compile template and css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        comp = fixture.componentInstance;
        selectedHero = { id: 11, name: 'Mr. Nice' };
        comp.hero = selectedHero;
        fixture.detectChanges();
        heroTitle = fixture.debugElement.query(By.css('h2'));
        heroDeets = fixture.debugElement.queryAll(By.css('div'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should contain the hero name in the title', ()=> {
        fixture.detectChanges();
        expect(heroTitle.nativeElement.textContent).toContain(selectedHero.name);
     });

     it('should contain the hero id in the details', ()=> {
         fixture.detectChanges();
        expect(heroDeets[1].nativeElement.textContent).toContain(selectedHero.id);
     });
});