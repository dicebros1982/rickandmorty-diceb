import { Injectable } from "@angular/core";
import {
  CharactersOverViewModel,
  CharacterListModel
} from "../models/characters.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CharacterService {
  charactersUrl = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {}

  getCharactersInfo() {
    return this.http.get<CharactersOverViewModel>(this.charactersUrl);
  }
}
