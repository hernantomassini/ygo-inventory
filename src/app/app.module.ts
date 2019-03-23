import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CardModule } from './card/card.module'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './router/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),

    CardModule,
  ],
  providers: [],
})

export class AppModule { }
