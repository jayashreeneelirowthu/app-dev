import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  availableKeywords: string[] =[
    'html',
    'CSS',
    'JavaScript',
    'Web design tutorials',
    'where to learn coding online',
    'Easy tutorials',
    'where to learn web design',
    'How to create a website',
    'how to create a table',
    'songs',
    'melody songs',
  ];

  searchQuery: string = '';
  filteredResults: string[] = [];
  // apiService: any;
  homeData: string = 'some data';

  constructor(private apiService: ApiService) {}

  filterResults(){
    var query = this.searchQuery.toLowerCase();
    if(query.length){
      this.filteredResults = this.availableKeywords.filter
      (keyword =>
       keyword.toLowerCase().includes(query)
      );
    } else {
      this.filteredResults = [];
    }
  }

  selectResult(result: string){
    this.searchQuery = result;
    this.filteredResults = [];
  }

  sendHomeData() {
    this.apiService.sendHomeData({ data: this.homeData }).subscribe(
      (Response: any) => {
        console.log('Home data sent successfully', Response);
        alert('Home data sent sucessfully: ' +Response);
      },
      ( error: any) => {
        console.error('Failed to send home data',error);
      }
    );
  }

}
