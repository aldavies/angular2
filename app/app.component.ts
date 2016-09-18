import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <div [style.color]="chagiColor">My cute, fat, fluffy chagi {{name}}!!</div>
   	<button (click)="makeChagiSleep()">Chagi's magic button</button>
    `
})
export class AppComponent {
	//[means property binding]
	//(means event binding)
	title = 'Customer App';
	name = 'Tina';
	chagiColor = 'pink';

	makeChagiSleep() {
		this.chagiColor = this.chagiColor === 'blue' ? 'pink' : 'blue';
	}
}
