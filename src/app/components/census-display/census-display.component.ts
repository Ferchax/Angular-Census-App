import { Component } from '@angular/core';
import { CensusService } from '../../services/census.service';
import { Census } from '../../models/census';

@Component({
  selector: 'app-census-display',
  standalone: true,
  imports: [],
  templateUrl: './census-display.component.html',
  styleUrl: './census-display.component.scss'
})
export class CensusDisplayComponent {
  
  censusData: Census[] = [];
  filteredData: Census[] = [];
  professions: string[] = [];

  constructor(private censusService: CensusService) { }
  
  ngOnInit() {
    this.censusData = this.censusService.getCensusData();
    //I filter in this way because censusData collection is smalll
    this.professions = [...new Set(this.censusData.map(person => person.profession))];
    this.filteredData = this.censusData;
  }

  filterByProfession(event: Event): void {
    const profession = (event.target as HTMLInputElement).value;
    this.filteredData = profession ? 
      this.censusData.filter(person => person.profession.toLowerCase() === profession.toLowerCase()) :
      this.censusData;
  }

}
