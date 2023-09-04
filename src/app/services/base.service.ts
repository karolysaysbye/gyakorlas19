import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database'
import { laptops } from '../utils/laptops';
import { cpus } from '../utils/cpus';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refLaptops: AngularFireList<laptops>;
  refCpus: AngularFireList<cpus>;

  constructor(private db: AngularFireDatabase) {
    this.refLaptops = this.db.list('laptops');
    this.refCpus = this.db.list('cpus')
   }

   getLaptops() {
    return this.refLaptops;
   }

   getCpus () {
    return this.refCpus;
   }

   createLaptops(laptops: laptops) {
    return this.refLaptops.push(laptops);
   }

   updateLaptops(key: string, data: any) {
    return this.refLaptops.update(key, data)
   }

   deleteLaptops(key: string) {
    return this.refLaptops.remove(key);
   }

}
