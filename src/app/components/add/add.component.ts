import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { laptops } from 'src/app/utils/laptops';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

ujLaptop: laptops = {
  comment: {
    text: ''
  }
};

constructor(private bs: BaseService) {}

newLaptop(ujLaptop: laptops) {
  this.bs.createLaptops(ujLaptop).then(() => {
    console.log('Új laptop sikeresen hozzáadva!')
  })

}

}
