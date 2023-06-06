import {Injectable} from '@angular/core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {BehaviorSubject} from "rxjs";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Injectable({
  providedIn: 'root'
})
export class RandomIconService {
  public randomIcon$ = new BehaviorSubject<IconDefinition | null>(null);
  public randomIconGenerator = (): void => {
    const randomFas = Math.floor(Math.random() * Object.values(fas).length);
    const randomFar = Math.floor(Math.random() * Object.values(far).length);
    const randomFab = Math.floor(Math.random() * Object.values(fab).length);
    const randomIcons = [Object.values(fas)[randomFas], Object.values(fas)[randomFar], Object.values(fas)[randomFab]];
    const randomIcon = randomIcons[Math.floor(Math.random() * randomIcons.length)];
    this.randomIcon$.next(randomIcon);
  }
}
