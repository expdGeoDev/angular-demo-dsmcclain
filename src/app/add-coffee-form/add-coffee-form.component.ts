import { Component } from '@angular/core';

@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})
export class AddCoffeeFormComponent {
	resetForm() {
		alert("reset")
	}

	submitForm() {
		alert("submit")
	}
}
