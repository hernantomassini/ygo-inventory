import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CardHomeComponent } from '../card/card-home.component'

const routes: Routes = [
  { path: 'cards', component: CardHomeComponent },
  { path: '**', redirectTo: 'cards' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
