import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recommendation1',
  templateUrl: './recommendation1.page.html',
  styleUrls: ['./recommendation1.page.scss'],
})
export class Recommendation1Page implements OnInit {

  constructor(private router : Router, private storage: Storage) { }

  ngOnInit() {
  }

  budgetInput(event, budget){
    console.log(budget);
    this.storage.set('budget', budget);
    this.router.navigate(['/recommendation2']);
  }
}
