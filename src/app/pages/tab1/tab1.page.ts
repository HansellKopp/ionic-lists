import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public store: StoreService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async presentAddTaskslist() {
    const alert = await this.alertController.create({
      header: 'Add new Tasks list',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'list name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.name) {
              const newId = this.store.addTaskLisk(data.name)
              this.router.navigate(['/tabs','tab1','add',newId])
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
