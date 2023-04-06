import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NiaComponent1Component } from './nia-component1/nia-component1.component';
import { NiaComponent2Component } from './nia-component2/nia-component2.component';
import { NiaComponent3Component } from './nia-component3/nia-component3.component';
import { IsaiahComponent1Component } from './isaiah-component1/isaiah-component1.component';
import { IsaiahComponent2Component } from './isaiah-component2/isaiah-component2.component';
import { IsaiahComponent3Component } from './isaiah-component3/isaiah-component3.component';
import { StevenComponent3Component } from './steven-component3/steven-component3.component';
import { StevenComponent2Component } from './steven-component2/steven-component2.component';
import { StevenComponent1Component } from './steven-component1/steven-component1.component';
import { BenComponent1Component } from './ben-component1/ben-component1.component';
import { BenComponent2Component } from './ben-component2/ben-component2.component';
import { BenComponent3Component } from './ben-component3/ben-component3.component';
import { GuidoComponent3Component } from './guido-component3/guido-component3.component';
import { GuidoComponent2Component } from './guido-component2/guido-component2.component';
import { GuidoComponent1Component } from './guido-component1/guido-component1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NiaComponentComponent } from './nia-component/nia-component.component';
import { BenComponentComponent } from './ben-component/ben-component.component';
import { StevenComponentComponent } from './steven-component/steven-component.component';
import { IsaiahComponentComponent } from './isaiah-component/isaiah-component.component';
import { GuidoComponentComponent } from './guido-component/guido-component.component';
import { Nia2ComponentComponent } from './nia2-component/nia2-component.component';
import { NiaComponent4Component } from './nia-component4/nia-component4.component';
import { NiaComponent5Component } from './nia-component5/nia-component5.component';
import { BenComponent5Component } from './ben-component5/ben-component5.component';
import { BenComponent4Component } from './ben-component4/ben-component4.component';
import { GuidoComponent5Component } from './guido-component5/guido-component5.component';
import { GuidoComponent4Component } from './guido-component4/guido-component4.component';
import { IsaiahComponent4Component } from './isaiah-component4/isaiah-component4.component';
import { IsaiahComponent5Component } from './isaiah-component5/isaiah-component5.component';
import { StevenComponent5Component } from './steven-component5/steven-component5.component';
import { StevenComponent4Component } from './steven-component4/steven-component4.component';

@NgModule({
  declarations: [
    AppComponent,
    NiaComponent1Component,
    NiaComponent2Component,
    NiaComponent3Component,
    IsaiahComponent1Component,
    IsaiahComponent2Component,
    IsaiahComponent3Component,
    StevenComponent3Component,
    StevenComponent2Component,
    StevenComponent1Component,
    BenComponent1Component,
    BenComponent2Component,
    BenComponent3Component,
    GuidoComponent3Component,
    GuidoComponent2Component,
    GuidoComponent1Component,
    NiaComponentComponent,
    Nia2ComponentComponent,
    BenComponentComponent,
    StevenComponentComponent,
    IsaiahComponentComponent,
    GuidoComponentComponent,
    Nia2ComponentComponent,
    NiaComponent4Component,
    NiaComponent5Component,
    BenComponent5Component,
    BenComponent4Component,
    GuidoComponent5Component,
    GuidoComponent4Component,
    IsaiahComponent4Component,
    IsaiahComponent5Component,
    StevenComponent5Component,
    StevenComponent4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
