import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

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
  albumSubject = new Subject<any[]>();

  private emitAlbumsSubject(){
    this.albumSubject.next(this.albums.slice());
  }

  constructor(private httpClient:HttpClient) { }

  getAlbumByGroup(groupId:number){
    this.httpClient
      .get<any>("api/albums?groupe=" + groupId)
      .subscribe((response) =>{
        this.albums = response;
        this.emitAlbumsSubject();
      }, (error) => {
        console.log(error);
      });
  }

  getAlbumByID(albumID:number): any{
    let album:any = this.httpClient
      .get<any>("api/albums/" + albumID)
      .subscribe((response) =>{
        return response;
      }, (error) => {
        console.log(error);
      });

    return album;
  }

  searchAlbum(searcharg:string){
    if (searcharg){
      console.log("search");
      this.httpClient
        .get<any>("api/albums?search=" + searcharg)
        .subscribe((response) =>{
          this.albums = response;
          this.emitAlbumsSubject();
        }, (error) => {
          console.log(error);
        });
    }else{
      console.log("No Search");
      this.httpClient
        .get<any>("api/albums?search=" + searcharg)
        .subscribe((response) =>{
          this.albums = response;
          this.emitAlbumsSubject();
        }, (error) => {
          console.log(error);
        });
    }
  }
}
