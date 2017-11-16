import { Component } from '@angular/core'
import { Collegue } from './shared/domain/collegue'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'
import {Subject} from 'rxjs/Subject'
import {debounceTime} from 'rxjs/operator/debounceTime'

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

  ngOnInit() {
    this.collegues = [
      new Collegue('Florent',
                  'http://i.imgur.com/eRKJG.jpg',
                  150),
      new Collegue('Olivier', 
                  'https://pbs.twimg.com/profile_images/570625160508485632/B1cGbyTD.png',
                  200),
      new Collegue('Nicolas', 
                  'https://d1zfszn0v5ya99.cloudfront.net/user/549521/profile_picture/5584eb547af16_square.png', 
                  170),
      new Collegue('Ange', 
                  'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAm9AAAAJGFlNjI3NmZmLTc5ZDMtNDA1Zi05MjBiLWM1OTNmZmY2MjM2ZA.jpg',
                  15),
      new Collegue('Benjamin', 
                  'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAy2AAAAJGQ4ZjNkNDRhLTg5MGQtNGY3MC1hODA1LTcyODk1Y2ViYzg4Yg.jpg', 
                  32)
    ]
    setTimeout(() => this.staticAlertClosed = true, 20000);
    
        this._success.subscribe((message) => this.successMessage = message);
        debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {

    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 0))

    this._success.next(`Le collègue ${pseudo.value} a été ajouté avec succès`)

    pseudo.value = ''
    imageUrl.value = ''

    return false
  }
}
