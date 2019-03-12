import { NgModule, ModuleWithProviders } from '@angular/core'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { VendorModule } from '../vendor.module'

const imports = [
  CommonModule,
  FormsModule,
  RouterModule,
  VendorModule,
]

// Componentes
const declarations = [

]

// Servicios
const providers = [

]

@NgModule({
  declarations,
  imports,
  exports: [ ...imports, ...declarations ],
  entryComponents: [],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers,
    }
  }
}
