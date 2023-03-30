import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Nia2ComponentComponent } from './nia2-component/nia2-component.component';
import { BenComponentComponent } from './ben-component/ben-component.component';
import { StevenComponentComponent } from './steven-component/steven-component.component';
import { IsaiahComponentComponent } from './isaiah-component/isaiah-component.component';
import { GuidoComponentComponent } from './guido-component/guido-component.component';

const routes: Routes = [
  { path: 'nia2', component: Nia2ComponentComponent },
  { path: 'ben', component: BenComponentComponent },
  { path: 'steven', component: StevenComponentComponent },
  { path: 'isaiah', component: IsaiahComponentComponent },
  { path: 'guido', component: GuidoComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
