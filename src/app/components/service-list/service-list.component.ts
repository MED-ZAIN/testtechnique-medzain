
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 bg-gray-50 min-h-screen">
      <div class="max-w-6xl mx-auto">
      
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-purple-700">Liste des services</h1>
        </div>

       
        <div class="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div class="flex gap-4 items-center">
            <span class="text-gray-600">Filtrer par :</span>
            
            <select [(ngModel)]="selectedCategory" 
                    class="px-4 py-2 border rounded-lg bg-white w-40">
              <option value="">Catégories</option>
              <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
            </select>

            <select [(ngModel)]="selectedStatus" 
                    class="px-4 py-2 border rounded-lg bg-white w-40">
              <option value="">Statut</option>
              <option *ngFor="let status of statusOptions" [value]="status">{{ status }}</option>
            </select>
          </div>
        </div>

     
        <div class="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left text-gray-600 font-semibold">Nom du service</th>
                <th class="px-6 py-4 text-left text-gray-600 font-semibold">Catégorie</th>
                <th class="px-6 py-4 text-left text-gray-600 font-semibold">Statut</th>
                <th class="px-6 py-4 text-left text-gray-600 font-semibold">Prix</th>
                <th class="px-6 py-4 text-left text-gray-600 font-semibold">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              <tr *ngFor="let service of filteredServices" 
                  class="border-t hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4">{{ service.name }}</td>
                <td class="px-6 py-4">{{ service.category }}</td>
                <td class="px-6 py-4">
                  <span class="text-green-500">✓✓✓</span>
                </td>
                <td class="px-6 py-4 font-semibold">{{ service.price }} Dhs</td>
                <td class="px-6 py-4 flex gap-3">
                  <button *ngFor="let action of service.actions" 
                          [class.text-red-500]="action === 'Supprimer'"
                          class="text-purple-600 hover:text-purple-800 px-2 py-1 rounded-md transition-colors"
                          (click)="handleAction(action, service)">
                    {{ action }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ServiceListComponent {
  selectedCategory = '';
  selectedStatus = '';
  
  categories = ['Maintenance', 'Réparation', 'Nettoyage'];
  statusOptions = ['Actif', 'Inactif'];

  services = [
    {
      name: 'Réparation smartphone',
      category: 'Maintenance',
      status: 'Actif',
      price: 350.00,
      actions: ['Voir details', 'Modifier', 'Supprimer', 'Dupliquer']
    },
    {
      name: 'Nettoyage complet',
      category: 'Nettoyage',
      status: 'Actif',
      price: 200.00,
      actions: ['Voir details', 'Modifier', 'Supprimer']
    },
    {
      name: 'Réparation ordinateur',
      category: 'Maintenance',
      status: 'Inactif',
      price: 500.00,
      actions: ['Voir details', 'Modifier', 'Supprimer']
    }
  ];

  get filteredServices() {
    return this.services.filter(service => {
      const categoryMatch = !this.selectedCategory || service.category === this.selectedCategory;
      const statusMatch = !this.selectedStatus || service.status === this.selectedStatus;
      return categoryMatch && statusMatch;
    });
  }

  handleAction(action: string, service: any) {
    switch(action) {
      case 'Supprimer':
        this.deleteService(service);
        break;
      case 'Dupliquer':
        this.duplicateService(service);
        break;
     
    }
  }

  deleteService(service: any) {
    this.services = this.services.filter(s => s !== service);
  }

  duplicateService(service: any) {
    this.services.push({...service, name: service.name + ' (copie)'});
  }
}