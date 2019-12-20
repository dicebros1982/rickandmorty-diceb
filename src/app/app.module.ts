import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from "./app.component";

import { CharactersComponent } from "./pages/characters/characters.component";
import { HeaderComponent } from "./components/header/header.component";
import { CharactersOverviewComponent } from './components/characters-overview/characters-overview.component';
import { CharacterService } from './services/character.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CoreModule],
  declarations: [AppComponent, CharactersComponent, HeaderComponent, CharactersOverviewComponent, CharacterCardComponent],
  bootstrap: [AppComponent],
  providers: [CharacterService]
})
export class AppModule {}
