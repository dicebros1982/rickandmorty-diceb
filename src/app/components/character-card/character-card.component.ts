import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.css"]
})
export class CharacterCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Input() species: string;
  constructor() {}

  ngOnInit() {}
}
