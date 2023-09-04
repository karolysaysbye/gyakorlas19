import { Component } from '@angular/core';
import { laptops } from 'src/app/utils/laptops';
import { cpus } from 'src/app/utils/cpus';
import { BaseService } from '../../services/base.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  laptops?: laptops[];
  cpus?: cpus[];

constructor(private bs: BaseService) {
  this.bs.getLaptops().snapshotChanges().pipe(map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
  ).subscribe(data => {
    this.laptops = data;
    console.log(this.laptops);
  })

  this.bs.getCpus().snapshotChanges().pipe(map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
  ).subscribe(data => {
    this.cpus = data;
    console.log(this.cpus);
  })

}

getAllCpus(key: string | undefined) {
  return this.cpus?.find((k: any) => {
    return k.key == key;
  })
}

}
