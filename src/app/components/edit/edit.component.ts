import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { laptops } from 'src/app/utils/laptops';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

laptops?: laptops[];

  constructor(private bs: BaseService) {
    this.bs.getLaptops().snapshotChanges().pipe(map( changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    ).subscribe(data => {
      this.laptops = data;
      console.log(this.laptops)

    })
  }

  updateLaptops(laptops: laptops) {
    const data = laptops;
    if(laptops.key) {
      this.bs.updateLaptops(laptops.key, data).then(() => {
        console.log('Sikeres frissítés');

      })
    }
  }

  deleteLaptops(laptops: laptops) {
    if (laptops.key) {
      this.bs.deleteLaptops(laptops.key).then(() => {
        console.log('Sikeresen törölve!')
      })
    }
  }

}
