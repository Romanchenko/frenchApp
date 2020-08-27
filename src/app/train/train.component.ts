import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {WordsetService} from '../services/wordset.service';
import {Wordset} from '../shared/wordset';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  set: Wordset;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private wordsetService: WordsetService) { }

  ngOnInit() {
  	this.route.params
  		.pipe(switchMap((params) => {return this.wordsetService.getWordsetById(params['id'])}))
  		.subscribe((set) => this.set = set);
  }

}
