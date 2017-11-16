import { Component } from '@angular/core'
import { Collegue } from './shared/domain/collegue'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'
import { Subject } from 'rxjs/Subject'
import { debounceTime } from 'rxjs/operator/debounceTime'
import { CollegueService } from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  collegues: Collegue[]
  private _success = new Subject<string>()
  successMessage: string

  staticAlertClosed = false

  constructor(private _collegueService: CollegueService) {

  }

  ngOnInit() {

    this._collegueService.listerCollegues()
      .then(data => { return this.collegues = data })
      .catch(exception => console.log(exception))

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    this._collegueService.sauvegarder(new Collegue(pseudo.value, imageUrl.value, 0))

    this._success.next(`Le collègue ${pseudo.value} a été ajouté avec succès`)

    pseudo.value = ''
    imageUrl.value = ''

    return false
  }

  supprimer(collegue: Collegue) {
    this._collegueService.supprimer(collegue)
    this._collegueService.listerCollegues()
      .then(data => { return this.collegues = data })
      .catch(exception => console.log(exception))
  }

}
