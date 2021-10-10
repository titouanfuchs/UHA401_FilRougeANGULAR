import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums = [
    {
      "nom": "Hypnotize",
      "id": "1",
      "artiste": "System Of A Down",
      "pistes": "12",
      "sortie": "2005",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/9\/9a\/System_Of_A_Down-Hypnotize.jpg"
    },
    {
      "nom": "System Of A Down",
      "id": "2",
      "artiste": "System Of A Down",
      "pistes": "13",
      "sortie": "1998",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/b\/bc\/System_of_a_down.jpg"
    },
    {
      "nom": "Steal this album!",
      "id": "3",
      "artiste": "System Of A Down",
      "pistes": "16",
      "sortie": "2002",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/4\/45\/StealThisAlbum.png"
    },
    {
      "nom": "Muscle Museum",
      "id": "4",
      "artiste": "Muse",
      "pistes": "7",
      "sortie": "1999",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/2\/22\/Musclemuseumep.jpg"
    },
    {
      "nom": "Absolution",
      "id": "5",
      "artiste": "Muse",
      "pistes": "14",
      "sortie": "2003",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/b\/b4\/Muse_-_Absolution_Cover_UK.jpg"
    },
    {
      "nom": "Nightmare Anatomy",
      "id": "6",
      "artiste": "aiden",
      "pistes": "11",
      "sortie": "2005",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/4\/4f\/Nightmare_Anatomy_Cover.jpg"
    },
    {
      "nom": "Knives",
      "id": "7",
      "artiste": "aiden",
      "pistes": "10",
      "sortie": "2009",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/9\/9d\/AidenKNIVES.jpg"
    },
    {
      "nom": "Sgt. Pepper's Lonely Hearts Club Band",
      "id": "8",
      "artiste": "The Beatles",
      "pistes": "30",
      "sortie": "1968",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/en\/5\/50\/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"
    },
    {
      "nom": "The Beatles AKA the white album",
      "id": "9",
      "artiste": "The Beatles",
      "pistes": "12",
      "sortie": "1967",
      "couverture": "https:\/\/upload.wikimedia.org\/wikipedia\/commons\/2\/20\/TheBeatles68LP.jpg"
    },
    {
      "nom": "Hypnotize",
      "id": "10",
      "artiste": "System Of A Down",
      "pistes": "12",
      "sortie": "0",
      "couverture": "https:\/\/media.discordapp.net\/attachments\/755394000466346055\/760037163630461008\/Snapchat-1513701049.jpg"
    }
  ];

  constructor() { }
}
