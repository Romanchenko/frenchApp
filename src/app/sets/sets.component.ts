import { Component, OnInit } from '@angular/core';
import {WordsetService} from '../services/wordset.service';
import {Wordset} from '../shared/wordset';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {

  allSets: Wordset[];
  constructor(private wordsetService: WordsetService) { }

  ngOnInit() {
  	this.wordsetService.getAllWordsets().subscribe(sets => this.allSets = sets);
  }

}
