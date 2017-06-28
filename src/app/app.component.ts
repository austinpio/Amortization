import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(meta: Meta, title: Title) {
      title.setTitle('Amortization');

      meta.addTags([
        {name: 'author', content: 'austinpioj@gmail.com'},
        {name: 'keywords', content: 'amortization,seo,austin,pio,austinpio,loan,schedule,emi'},
        {name: 'description', content: 'amortization loan schedule generator'}
      ]);
  }
}
