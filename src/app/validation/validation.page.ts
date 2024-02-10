import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService } from './task.service'; // Importez le service de gestion des tâches

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage {
  selectedTasks: any[] = [];

  constructor(private navCtrl: NavController, private taskService: TaskService) {}

  removeTask(task: any) {
    const index = this.selectedTasks.indexOf(task);
    if (index > -1) {
      this.selectedTasks.splice(index, 1);
      // Supprimez la notification associée à cette tâche
      this.taskService.cancelNotification(task.id);
    }
  }

  updateTaskStatus(task: any, newStatus: string) {
    task.status = newStatus;
    // Mettez à jour la logique en fonction du nouvel état de la tâche
    if (newStatus === 'completed') {
      // Planifiez une notification pour cette tâche
      this.taskService.scheduleNotification(task.id, task.notificationTime);
    } else if (newStatus === 'in_progress') {
      // Mettez en œuvre d'autres actions pour les tâches en cours
    }
  }

  validateTasks() {
    // Effectuez la validation des tâches sélectionnées
    // Mettez en œuvre d'autres actions nécessaires
  }
}
