import { Injectable } from '@angular/core';

import { Census } from '../models/census';

@Injectable({
  providedIn: 'root'
})
export class CensusService {

  private censusData: Census[] = [
    { "id": 1, "name": "John Doe", "photo": "https://randomuser.me/api/portraits/men/1.jpg", "profession": "Teacher" },
    { "id": 2, "name": "Jane Smith", "photo": "https://randomuser.me/api/portraits/women/1.jpg", "profession": "Engineer" },
    { "id": 3, "name": "Alice Johnson", "photo": "https://randomuser.me/api/portraits/women/2.jpg", "profession": "Doctor" },
    { "id": 4, "name": "Bob Brown", "photo": "https://randomuser.me/api/portraits/men/2.jpg", "profession": "Artist" },
    { "id": 5, "name": "Carol White", "photo": "https://randomuser.me/api/portraits/women/3.jpg", "profession": "Scientist" },
    { "id": 6, "name": "David Wilson", "photo": "https://randomuser.me/api/portraits/men/3.jpg", "profession": "Chef" },
    { "id": 7, "name": "Eva Parker", "photo": "https://randomuser.me/api/portraits/women/4.jpg", "profession": "Lawyer" },
    { "id": 8, "name": "Frank Murphy", "photo": "https://randomuser.me/api/portraits/men/4.jpg", "profession": "Musician" },
    { "id": 9, "name": "Grace Lee", "photo": "https://randomuser.me/api/portraits/women/5.jpg", "profession": "Architect" },
    { "id": 10, "name": "Henry Gomez", "photo": "https://randomuser.me/api/portraits/men/5.jpg", "profession": "Politician" },
    { "id": 11, "name": "Isabel Martinez", "photo": "https://randomuser.me/api/portraits/women/6.jpg", "profession": "Teacher" },
    { "id": 12, "name": "James Thomson", "photo": "https://randomuser.me/api/portraits/men/6.jpg", "profession": "Engineer" },
    { "id": 13, "name": "Laura Howard", "photo": "https://randomuser.me/api/portraits/women/7.jpg", "profession": "Doctor" },
    { "id": 14, "name": "Mike Reynolds", "photo": "https://randomuser.me/api/portraits/men/7.jpg", "profession": "Artist" },
    { "id": 15, "name": "Nora Espinoza", "photo": "https://randomuser.me/api/portraits/women/8.jpg", "profession": "Scientist" },
    { "id": 16, "name": "Oscar Wells", "photo": "https://randomuser.me/api/portraits/men/8.jpg", "profession": "Chef" },
    { "id": 17, "name": "Patricia Johnson", "photo": "https://randomuser.me/api/portraits/women/9.jpg", "profession": "Lawyer" },
    { "id": 18, "name": "Quentin Clark", "photo": "https://randomuser.me/api/portraits/men/9.jpg", "profession": "Musician" },
    { "id": 19, "name": "Rachel Diaz", "photo": "https://randomuser.me/api/portraits/women/10.jpg", "profession": "Architect" },
    { "id": 20, "name": "Steve McMahon", "photo": "https://randomuser.me/api/portraits/men/10.jpg", "profession": "Politician" }
  ];


  constructor() { }

  getCensusData() {
    return this.censusData;
  }
}
