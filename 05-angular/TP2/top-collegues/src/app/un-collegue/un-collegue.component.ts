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
  collegueService: CollegueService
  constructor() {

  }

  jaime() {
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.collegue.score += 10
    this.collegueService.aimerUnCollegue(this.collegue)
  }
  jedeteste() {
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.collegueService.detesterUnCollegue(this.collegue)
  }

  ngOnInit() {

  }
}
