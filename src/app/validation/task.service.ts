import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  scheduleNotification(id: any, notificationTime: any): void {
    // Logique pour planifier une notification
    console.log('Notification scheduled for task with ID:', id, 'at time:', notificationTime);
  }

  cancelNotification(id: any): void {
    // Logique pour annuler une notification
    console.log('Notification canceled for task with ID:', id);
  }

  addTask(task: any): void {
    // Logique pour ajouter une tâche
    console.log('Task added:', task);
  }

  getTasks(): any[] {
    // Logique pour récupérer les tâches
    return [
      { name: 'Task 1', notificationTime: '10:00', status: 'Pending' },
      { name: 'Task 2', notificationTime: '12:00', status: 'Pending' }
    ];
  }

  updateTask(task: any): void {
    // Logique pour mettre à jour une tâche
    console.log('Task updated:', task);
  }

  deleteTask(task: any): void {
    // Logique pour supprimer une tâche
    console.log('Task deleted:', task);
  }
}
