import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  sessionId: any = '';
  session: any;
  isFavorite = false;
  defaultHref = '';
  selectedSyllabus: any[] = [];
  syllabusDetails: any[] = [{
    courseName: 'Angular',
    id: '15',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      },
      {
        title: 'Lesson 02 - Features of Angular',
        line1: 'History of Angular',
        line2: 'Understanding Angular',
        line3: 'Set up Angular App',
        line4: 'Angular Building Blocks'
      }
      , {
        title: 'Lesson 03 - Ngmodule',
        line1: 'Angular Modulesr',
        line2: 'Routing Module',
        line3: 'Feature Module',
        line4: 'Sharing Module'
      }

    ]
  },
  {
    courseName: 'React',
    id: '8',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      },
      {
        title: 'Lesson 02 - Features of Angular',
        line1: 'History of Angular',
        line2: 'Understanding Angular',
        line3: 'Set up Angular App',
        line4: 'Angular Building Blocks'
      }
      , {
        title: 'Lesson 03 - Ngmodule',
        line1: 'Angular Modulesr',
        line2: 'Routing Module',
        line3: 'Feature Module',
        line4: 'Sharing Module'
      }

    ]
  }
  ];

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        this.sessionId = sessionId;
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.session.name
                );

                break;
              }
            }
          }
        }
      }
    });

    this.selectedSyllabus = this.getSelectedSubjectSyllabus();
    console.log(this.selectedSyllabus);
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/speakers`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }


  getSelectedSubjectSyllabus() {
    const result = this.syllabusDetails.filter((syllabus) => {
      return syllabus.id === this.sessionId;
    });
    const key = 'syllabus';
    return result[0][key];
  }
}
