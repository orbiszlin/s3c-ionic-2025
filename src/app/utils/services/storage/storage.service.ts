import {Injectable} from "@angular/core";
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  async save(key: string, value: any) {
    await Preferences.set({
      key: key,
      value: JSON.stringify(value)
    });
  }

  async get<T = any>(key: string): Promise<T | null> {
    const {value} = await Preferences.get({
      key: key
    });

    return value ? JSON.parse(value) : null;

    /*
    const storage = await Preferences.get({
      key: key
    });

    return storage.value ? JSON.parse(storage.value) : null;
    */
  }

  async remove(key: string) {
    await Preferences.remove({key: key});
  }
}
