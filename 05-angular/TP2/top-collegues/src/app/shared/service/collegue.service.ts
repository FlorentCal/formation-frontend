import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';


@Injectable()
export class CollegueService {

  // données en mémoire
  collegues: Collegue[] = [
    new Collegue('Florent',
      'https://avatars2.githubusercontent.com/u/32134408?s=400&u=0d4df0a68c62d8d448de2f801bb23dbdf86dba7c&v=4',
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

  constructor() { }

  listerCollegues(): Promise<Collegue[]> {
    return new Promise((resolve, reject) => {
      if (this.collegues == undefined) {
        reject('La liste est vide')
      } else {
        resolve(this.collegues)
      }
    })
  }

  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    this.collegues.push(newCollegue)
    return new Promise((resolve, reject) => {
      resolve(newCollegue)
    })
  }

  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.changerScore(unCollegue, 10)
  }

  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.changerScore(unCollegue, -5)
  }

  changerScore(unCollegue: Collegue, score: number): Promise<Collegue> {
    let index: number = this.collegues.findIndex(collegue => collegue.nom == unCollegue.nom)

    this.collegues[index].score += score

    return new Promise((resolve, reject) => {
      resolve(this.collegues[index])
    })
  }

  supprimer(collegue: Collegue) {
    this.collegues = this.collegues.filter(col => col.nom != collegue.nom)
  }
}