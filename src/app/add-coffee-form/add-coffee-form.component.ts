import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Coffee} from "../../data/coffee-data";
import {CoffeeDataService} from "../coffee-data.service";


@Component({
  selector: 'app-add-coffee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-coffee-form.component.html',
  styleUrl: './add-coffee-form.component.css'
})
export class AddCoffeeFormComponent {

	formData: Coffee = {
		id: 0,
		brand: '',
		roast: 'light',
		groundOrBeans: 'ground',
		flavorNotes: ''
	};

	constructor(private coffeeService: CoffeeDataService) {}

	resetForm() {
	}

	submitForm() {
    let result = this.coffeeService.newCoffee(this.formData);
		alert(result);
	}
}
