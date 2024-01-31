import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class SetThemesService {

  constructor() { }

  async setStatusBarStyle(color: string) {
    await StatusBar.setBackgroundColor({ color: color });
  }
}
