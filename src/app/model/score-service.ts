import { Injectable } from "@angular/core";
import { ScoreDetail } from "./score-detail";

@Injectable({
    providedIn: 'root'
})
export class ScoreService{
    private scoreDetails: ScoreDetail[] = [
        {
            id:1,
            nome:'Danilo Vulpiani',
            punteggio:150,
            insegnante: 'Riccardo Audano',
            casata: 'Hufflepuff',
            motivazione:'è andato a trans'
        },
        {
            id:3,
            nome:'Myryam NonVuoleCampare100Anni',
            punteggio:5000,
            insegnante: 'Riccardo Audano',
            casata: 'Slytherin',
            motivazione: 'non è andata a trans'
        }

    ];
    getScoreDetails():ScoreDetail[]{
        return this.scoreDetails;
    }
}