import { Component, OnInit } from '@angular/core';
import { Wordset } from '../shared/wordset';
import { WordsetService } from '../services/wordset.service';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  currentId = -1;
  currentSet: Wordset;
  constructor(private wordsetService: WordsetService) {
   }

  ngOnInit() {
  }


  getRandomSet() {
  	this.wordsetService.getRandomWordset().subscribe(newSet => {
  		this.currentId = newSet.id;
  		this.currentSet = newSet;
  	});
  }

}
