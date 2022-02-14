import { Component,Renderer } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  template: `header html script`,
})

export class HeaderComponent { 
 constructor(title: Title) {  }
}