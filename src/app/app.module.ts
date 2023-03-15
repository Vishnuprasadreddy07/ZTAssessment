import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderinteractionComponent } from './components/orderinteraction/orderinteraction.component';
import { AdminHoverCardComponent } from './components/admin-hover-card/admin-hover-card.component';

import { SliderInteractionComponent } from './components/slider-interaction/slider-interaction.component';
import { FileManipulationComponent } from './components/file-manipulation/file-manipulation.component';
import { GraphicalInteractionComponent } from './components/graphical-interaction/graphical-interaction.component';
import { HottextInteractionComponent } from './components/hottext-interaction/hottext-interaction.component';
import { Graphicalinteraction12Component } from './components/graphicalinteraction12/graphicalinteraction12.component';
import { MatchInteractionComponent } from './components/match-interaction/match-interaction.component';
import { Ctm001002Component } from './components/ctm001002/ctm001002.component';
import { ExtTextInteractionComponent } from './components/ext-text-interaction/ext-text-interaction.component';
import { ChoiceBoxComponent } from './components/choice-box/choice-box.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { AssociateInteractionComponent } from './components/associate-interaction/associate-interaction.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AdminHoverCardComponent,
    OrderinteractionComponent,
    SliderInteractionComponent,
    FileManipulationComponent,
    GraphicalInteractionComponent,
    HottextInteractionComponent,
    Graphicalinteraction12Component,
    MatchInteractionComponent,
    Ctm001002Component,
    ExtTextInteractionComponent,
    ChoiceBoxComponent,
    CardBoxComponent,
    AssociateInteractionComponent
    ]
,
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   DragDropModule,
  //   FormsModule,
  //   RouterModule.forRoot([
  //     { path: 'file-manipulation', component: FileManipulationComponent },
  //     { path: 'order-interaction', component: OrderinteractionComponent },
  //     {
  //       path: 'graphical-interaction',
  //       component: GraphicalInteractionComponent,
  //     },
  //     { path: 'hottext-interaction', component: HottextInteractionComponent },
  //   ]),
  // ],

  imports: [BrowserModule, AppRoutingModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
