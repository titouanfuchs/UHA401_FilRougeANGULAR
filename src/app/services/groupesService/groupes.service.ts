import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupesService {
  groupes = [
    {
      "nom": "System Of A Down",
      "id": "1",
      "chanteur": "Serj Tankian",
      "origin": "Glendale",
      "genres": [
        {
          "nom": "nu metal"
        },
        {
          "nom": "hard rock"
        },
        {
          "nom": "heavy metal"
        },
        {
          "nom": "alternative metal"
        }
      ]
    },
    {
      "nom": "Mika",
      "id": "2",
      "chanteur": "Michael Holbrook",
      "origin": "Beyrouth",
      "genres": [
        {
          "nom": "pop"
        },
        {
          "nom": "pop-rock"
        },
        {
          "nom": "classique"
        }
      ]
    },
    {
      "nom": "Muse",
      "id": "3",
      "chanteur": "Matthew Bellamy",
      "origin": "Royaume-Uni",
      "genres": [
        {
          "nom": "rock alternatif"
        },
        {
          "nom": "rock progressif"
        },
        {
          "nom": "new prog"
        },
        {
          "nom": "art rock"
        }
      ]
    },
    {
      "nom": "aiden",
      "id": "4",
      "chanteur": "William Francis",
      "origin": "Seattle",
      "genres": [
        {
          "nom": "Horror punk"
        },
        {
          "nom": "post-hardcore"
        },
        {
          "nom": "gothic rock"
        },
        {
          "nom": "screamo"
        }
      ]
    },
    {
      "nom": "The Beatles",
      "id": "5",
      "chanteur": "John Lennon",
      "origin": "Liverpool",
      "genres": [
        {
          "nom": "pop"
        },
        {
          "nom": "Rock"
        },
        {
          "nom": "psychedelique"
        }
      ]
    },
    {
      "nom": "Booba",
      "id": "6",
      "chanteur": "Elie Yaffa",
      "origin": "Boulogne-Billancourt",
      "genres": [
        {
          "nom": "hip-hop"
        },
        {
          "nom": "rap francais"
        },
        {
          "nom": "trap"
        },
        {
          "nom": "gansta rap"
        }
      ]
    }
  ]

  getGroupAlbums(group: number){
    alert("Requète des albums du groupe : " + group.toString());
  }
}
