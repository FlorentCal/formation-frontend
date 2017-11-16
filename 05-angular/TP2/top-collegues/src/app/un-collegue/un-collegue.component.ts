import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';


@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue: Collegue;
  constructor(private _collegueService: CollegueService) {

  }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this._collegueService.aimerUnCollegue(this.collegue)
      .then(col => this.collegue = col)
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this._collegueService.detesterUnCollegue(this.collegue)
      .then(col => this.collegue = col)
  }

  ngOnInit() {

  }
}
