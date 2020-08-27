import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { TrainComponent } from '../train/train.component';
import { SetsComponent } from '../sets/sets.component';
import { RandomComponent } from '../random/random.component';

export const ROUTES: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'train', component: TrainComponent},
	{path: 'random', component: RandomComponent},
	{path: 'sets', component: SetsComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}
];
