import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  searchText = '';
  filteredSearch: any[] = [];


  constructor(public confData: ConferenceData) { }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
      this.filteredSearch = Object.assign([], this.speakers);
    });
  }

  updateSearch(value) {
    this.filteredSearch = Object.assign([], this.speakers).filter(
      item => item.courseName.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    console.log(this.filteredSearch);
  }


}
