import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage_key';
import { UserDTO } from '../models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getLocalUser() {
    let user = localStorage.getItem(STORAGE_KEYS.localUser)
    if (user == null) {
      return null
    } else {
      return JSON.parse(user)
    }
  }

  setLocalUser(user: UserDTO) {
    if (user == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser)
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(user))
    }
  }
}
