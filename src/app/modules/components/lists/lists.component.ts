import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { TasksList } from 'src/app/models/tasks-list';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  baseUrl = ''
  constructor(
    public store: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController

  ) { 
    this.baseUrl = this.route.snapshot.parent['_routerState'].url
  }

  @Input('status')
  status: string

  ngOnInit() {
  }

  onClick(taskList: TasksList) {
    this.router.navigateByUrl(`${this.baseUrl}/add/${taskList.id}`)
  }

  removeList(taskList: TasksList) {
    this.store.removeList(taskList)
  }

  async editTaskList(taskList: TasksList) {
    const alert = await this.alertController.create({
      header: 'Edit task list title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: taskList.title,
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
            if(data.title) {
              this.store.editTaskLisk(taskList, data.title)
            }
          }
        }
      ]
    });

    await alert.present();
  }


}
