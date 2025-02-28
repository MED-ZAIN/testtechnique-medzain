import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule 
  ],
  template: `
    <div class="flex w-full h-screen">
    <aside class="w-20 h-[1024px] bg-white rounded-xl shadow-sm">
  <ul class="h-full">
    <li *ngFor="let item of menuItems" class="h-full">
      <a [routerLink]="item.route" 
         routerLinkActive="active-link" 
         class="flex flex-col items-center justify-center h-full p-2 hover:bg-gray-50 transition-colors">
        <img src="assets/images/menu.png" 
             alt="Menu icon" 
             class="w-[80px] h-[1024px] object-cover rounded-[15px]">
      </a>
    </li>
  </ul>
</aside>

      <div class="flex flex-col w-full">
        <header class="bg-gray-100 py-4 text-center">
          <img src="../assets/images/Frame 427319738.png" alt="Codingart Logo" class="mx-auto">
        </header>

        <section class="container mx-auto p-6">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-xl font-semibold text-purple-700">Ajouter un service</h1>
            <div class="flex gap-4">
              <button  (click)="onCreate()" class="bg-purple-700 text-white px-6 py-2 rounded-full">Créer</button>
              <button (click)="onCancel()" class="bg-gray-300 text-gray-700 px-6 py-2 rounded-full">Annuler</button>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold text-purple-700 mb-4">Détails du service</h2>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex flex-col gap-4">
                <label class="text-purple-700">Nom de service *</label>
                <input type="text" class="border border-purple-300 rounded-lg p-2" placeholder="Entrez le nom du service">
                
                <label class="text-purple-700">Description</label>
                <textarea class="border border-purple-300 rounded-lg p-2 h-36" placeholder="Entrez une description"></textarea>
              </div>

              <div class="flex flex-col items-center">
                <p class="text-purple-700">Photos</p>
                <div class="border border-purple-300 rounded-lg w-80 h-64 flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-cloud-upload-alt text-4xl text-purple-700"></i>
                    <p>Déposez le fichier ici ou <a href="#" class="text-purple-700 underline">sélectionnez-le</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 class="text-lg font-semibold text-purple-700 mb-4">Détails des prix</h2>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="text-purple-700">Prix du vent</label>
                <input type="text" class="border border-purple-300 rounded-lg p-2 w-full" placeholder="Entrez le prix">
              </div>
              <div>
                <label class="text-purple-700">TVA</label>
                <select class="border border-purple-300 rounded-lg p-2 w-full">
                  <option value="0%">0%</option>
                  <option value="10%">10%</option>
                  <option value="20%">20%</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class AddServiceComponent {
  menuItems = [
    { title: 'Ajouter un service', route: '/add-service' },
    { title: 'Services', route: '/services' },
    
  ];

  onCreate() {
    console.log('Création du service...');
    
  }


  onCancel() {
    this.resetForm();
    
  }

  private resetForm() {
    console.log('Formulaire réinitialisé');
}
}