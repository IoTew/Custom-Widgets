import { NgModule } from '@angular/core';
import { WidgetLibraryComponent } from './widget-library.component';
import { ExampleComponent } from './example/example.component';



@NgModule({
  declarations: [
    WidgetLibraryComponent,
    ExampleComponent
  ],
  imports: [
  ],
  exports: [
    WidgetLibraryComponent
  ]
})
export class WidgetLibraryModule { }
