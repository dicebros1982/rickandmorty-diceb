import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../../services/character.service";
import {
  CharactersOverViewModel,
  CharacterListModel
} from "../models/characters.model";

@Component({
  selector: "app-characters-overview",
  templateUrl: "./characters-overview.component.html",
  styleUrls: ["./characters-overview.component.css"]
})
export class CharactersOverviewComponent implements OnInit {
  public charactersOverview: CharactersOverViewModel;
  public characterList: CharacterListModel[];
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    return this.characterService
      .getCharactersInfo()
      .subscribe((data: CharactersOverViewModel) => {
        this.characterList = data.results;
      });
  }
}
