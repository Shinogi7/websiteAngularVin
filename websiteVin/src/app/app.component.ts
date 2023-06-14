import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websiteVin';
  vins:any[]=[
    {id:"Vin rouge", annee: "1994", info: "un millésime de notre meilleure année"}, 
    {id:"Vin blanc", annee:"2019", info:"un vin sec, idéal pour les fortes chaleurs"},
    {id:"Rosé", annee:"2021", info: "pour un apéritif réussi"},
    {id:"Rosé pétillant", annee: "2022", info: 'idéal pour un événement à célébrer'},
    {id:"Cidre", annee: "2022", info: "du jus de pomme qui pique" }]
}
