import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {WordsetService} from '../services/wordset.service';
import {Wordset} from '../shared/wordset';
import {Word} from '../shared/word';
import { map, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  set: Wordset;
  quizForm: FormGroup;
  answers: string[];
  result: Number;
  correct: Word[];
  mistakes: Word[];
  
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private wordsetService: WordsetService,
  	private fb: FormBuilder) {
  		this.route.params
  		.pipe(switchMap((parames) => {
  			return this.wordsetService.getWordsetById(parames['id']);
  		}))
  		.subscribe((sett) => {
  			this.set = sett;
  			this.createForm();
  		});
  	 }
  @ViewChild('fform') quizFormDirective;

  ngOnInit() {
  }


  createForm() {
  	let draft = {};
  	//console.log(this.set.wordlist.length);
  	for (var i = 0; i < this.set.wordlist.length; i++) {
  		draft[this.set.wordlist[i].id] = ["", [Validators.required]];
  	}
  	console.log(JSON.stringify(draft));
  	// this.quizForm = this.fb.group({
  	// 	"0": ["", Validators.required],
  	// 	"1": ["", Validators.required]
  	// });
  	this.quizForm = this.fb.group(draft);
  	this.quizForm.valueChanges.subscribe((data) => this.onValueChanges(data));
    this.onValueChanges();
  }

  onValueChanges(data ? : any) {
    if (!this.quizForm) {
      return;
    }
    const form = this.quizForm;
    this.answers = form.value;
  }

  onSubmit() {
  	let score = 0;
  	let answers = this.quizForm.value;
  	this.correct = [];
  	this.mistakes = [];
  	for (var i = 0; i < this.set.wordlist.length; i++) {
  		let word = this.set.wordlist[i];
  		if (answers[word.id] === word.translation) {
  			score++;
  			this.correct.push(word);
  		} else {
  			this.mistakes.push(word);
  		}
  	}
  	this.quizForm.reset();
  	this.result = score;
  }

}
