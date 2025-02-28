import { Service } from './../models/service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [];
  private nextId = 1;

  constructor() { }

  // Créer un nouveau service
  addService(serviceData: Omit<Service, 'id'>): Service {
    const newService: Service = {
      id: this.nextId++,
      ...serviceData,
      active: true,
      creationDate: new Date()
    };
    this.services.push(newService);
    return newService;
  }

  // Récupérer tous les services
  getServices(filter?: { category?: string; status?: boolean }): Service[] {
    if (!filter) return this.services;
    
    return this.services.filter(service => {
      const matchesCategory = !filter.category || service.category === filter.category;
      const matchesStatus = filter.status === undefined || service.active === filter.status;
      return matchesCategory && matchesStatus;
    });
  }

  // Supprimer un service
  deleteService(id: number): void {
    this.services = this.services.filter(service => service.id !== id);
  }

  // Mettre à jour un service
  updateService(id: number, updates: Partial<Service>): Service | null {
    const index = this.services.findIndex(s => s.id === id);
    if (index === -1) return null;
    
    this.services[index] = { ...this.services[index], ...updates };
    return this.services[index];
  }

  // Récupérer un service par ID
  getServiceById(id: number): Service | undefined {
    return this.services.find(service => service.id === id);
  }
}