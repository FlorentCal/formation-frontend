export class Collegue {

    constructor(private _nom:string, private _url:string, private _score:number){

    }

    public get nom():string{
        return this._nom
    }
    public set nom(nom:string){
        this._nom = nom
    }

    public get url():string{
        return this._url
    }
    public set url(url:string){
        this._url = url
    }

    public get score():number{
        return this._score
    }
    public set score(score:number){
        this._score = score
    }
}
