import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NiaComponentComponent } from './nia-component/nia-component.component';
import { BenComponentComponent } from './ben-component/ben-component.component';
import { StevenComponentComponent } from './steven-component/steven-component.component';
import { IsaiahComponentComponent } from './isaiah-component/isaiah-component.component';
import { GuidoComponentComponent } from './guido-component/guido-component.component';

const routes: Routes = [
  { path: 'nia', component: NiaComponentComponent },
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
