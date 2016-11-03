/* tslint:disable:no-unused-variable */
import {AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { HEROES } from './mock-heroes';
import {HeroService} from "./hero.service";

////////  SPECS  /////////////
describe('AppComponent', function () {
  let title: DebugElement;
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleElement: HTMLElement;
  let heroServiceStub: HeroService;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent, HeroDetailComponent ]
    })
        .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    title = fixture.debugElement.query(By.css('h1'));
    titleElement = title.nativeElement;
    app.heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'}];
  });

  it('should create component', () => expect(app).toBeDefined());

  it('should display original title', () => {
    fixture.detectChanges();
    expect(titleElement.textContent).toContain(app.title);
  });

  it('should display a different test title', () => {
    app.title = 'Test Title';
    fixture.detectChanges();
    expect(titleElement.textContent).toContain('Test Title');
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(titleElement.textContent).toEqual('');
  });

  it('should call "onSelect" function when hero is clicked on', async(() => {
    fixture.detectChanges();
    spyOn(app, 'onSelect');
    let list = fixture.debugElement.queryAll(By.css('li'));
    let selection = list[0];
    selection.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(app.onSelect).not.toHaveBeenCalled();
    })
  }));

  it('should contain a list of heroes', ()=> {
    fixture.detectChanges();
    let list = fixture.debugElement.queryAll(By.css('li'));
    expect(list).toBeDefined();
  });

  it('should contain a list of heroes of the same length as total data', () => {
    fixture.detectChanges();
    let list = fixture.debugElement.queryAll(By.css('li'));
    expect(list.length).toBe(3);
  });
});
