export interface CharactersOverViewModel {
  info: Object;
  results: CharacterListModel[];
}

export interface CharacterListModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}
