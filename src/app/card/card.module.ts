import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { CardHomeComponent } from './card-home.component'
import { CardViewComponent } from './card-view.component'
import { CardListComponent } from './card-list.component'
import { CardFiltersComponent } from './card-filters.component'
import { SharedModule } from '../shared/shared.module';

const declarations = [
  CardHomeComponent,
  CardViewComponent,
  CardListComponent,
  CardFiltersComponent,
]

const imports = [
  CommonModule,
  SharedModule,
]

@NgModule({
  declarations,
  imports,
  exports: declarations,
  providers: [],
})

export class CardModule { }
