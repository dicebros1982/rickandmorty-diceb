import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from "./app.component";
import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
