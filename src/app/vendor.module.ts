import { NgModule } from '@angular/core'

import {
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatNativeDateModule, DateAdapter, NativeDateAdapter,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatDialogModule,
} from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs'

const modules = [
  BrowserAnimationsModule,
  MatChipsModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatDialogModule,
]

@NgModule({
  imports: modules,
  exports: modules,
  providers: []
})

export class VendorModule { }
