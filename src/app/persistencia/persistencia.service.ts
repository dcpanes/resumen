import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersistenciaService {
  setItemLS(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemLS(key: string) {
    return localStorage.getItem(key);
  }

  removeItemLS(key: string) {
    localStorage.removeItem(key);
  }

  clearLS() {
    localStorage.clear();
  }

  setItemSS(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getItemSS(key: string) {
    return sessionStorage.getItem(key);
  }

  removeItemSS(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSS() {
    sessionStorage.clear();
  }

}
