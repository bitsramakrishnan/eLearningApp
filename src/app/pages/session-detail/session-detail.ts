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
  selectedCourseName: any = '';
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
        line4: 'Let vs Const',
        line5: 'Introduction to Functions',
        line6: 'Introduction to Parameters',
        line7: 'Introduction to Classes'
      },
      {
        title: 'Lesson 02 - Features of Angular',
        line1: 'History of Angular',
        line2: 'Understanding Angular',
        line3: 'Set up Angular App',
        line4: 'Angular Building Blocks',
        line5: 'Observables',
        line6: 'Introduction to Reactive Forms',
        line7: 'Introduction to Server Communication'
      },
      {
        title: 'Lesson 03 - Ngmodule',
        line1: 'Angular Modules',
        line2: 'Routing Module',
        line3: 'Feature Module',
        line4: 'Sharing Module',
        line5: 'Systematically Arranging Components of App',
        line6: 'Lesson 04 - Ng Unit Testing and Observables'
      },
      {
        title: 'Introduction to Automated Testing',
        line1: 'Types of Automated Testing',
        line2: 'Introduction to Testing Tools',
        line3: 'Introduction to Test Bed',
        line4: 'Handling Component Dependencies',
        line5: 'RxJS - Observable'
      },
      {
        title: 'Lesson 05 - Bootstrap',
        line1: 'Learning Objectives',
        line2: 'Explain Responsive Web Design (RWD)',
        line3: 'Understand the Bootstrap Grid System',
        line4: 'Learn Bootstrap Components'
      },
      {
        title: 'Lesson 06 - Binding and Events',
        line1: 'Learning Objectives',
        line2: 'What is Template Model?',
        line3: 'How Angular Binding works and the Type of Bindings',
        line4: 'Understand Angular Built-in Directives',
        line5: 'Basics of Webpack and SystemJS'
      },
      {
        title: 'Lesson 07 - Dependency Injection and Service',
        line1: 'Learning Objectives',
        line2: 'Understand Dependency Injection (DI)',
        line3: 'Understand DI Application Programming Interface',
        line4: 'Explain a Service',
        line5: 'Describe How to Create a Service',
        line6: 'Explain Injecting a Service'
      },
      {
        title: 'Lesson 08 - Directives',
        line1: 'Learning Objectives',
        line2: 'Angular Directives',
        line3: 'Types of Angular Directives',
        line4: 'Built-in Angular Directives',
        line5: 'Working with Custom Directives'
      },
      {
        title: 'Lesson 09 - Pipes',
        line1: 'Learning Objectives',
        line2: 'What is Pipe in Angular',
        line3: 'Understand How Built-in Pipes Work in Angular',
        line4: 'Understand Angular Custom pipes',
        line5: 'Quiz',
        line6: 'Key Takeaways'
      },
      {
        title: 'Lesson 10 - Forms',
        line1: 'Learning Objectives',
        line2: 'Angular Form Benefits',
        line3: 'Template-Driven Approach',
        line4: 'Model-Driven Approach',
        line5: 'Angular Form Validation'
      },
      {
        title: 'Lesson 11 - Routing',
        line1: 'Learning Objectives',
        line2: 'Understand How Angular Helps to Achieve SPA Using Routing',
        line3: 'Define the Benefits of @NgModule',
        line4: 'Identify Multiple Ways of Accessing Routes',
        line5: 'Understand the Process of Routing Cycle'
      },
      {
        title: 'Lesson 12 - HTTP, Promises, and Observables',
        line1: 'Learning Objectives',
        line2: 'Understand Working with RxJS',
        line3: 'Understand Angular Interaction with HTTP GET',
        line4: 'Describe the Process of Sending Data to the Server',
        line5: 'Explain the Difference Between Promises and Observables'
      },
      {
        title: 'Lesson 13 - Testing',
        line1: 'Learning Objectives',
        line2: 'Understand Tools and Setup',
        line3: 'Understand Testing of Angular Class',
        line4: 'Describe Testing Service',
        line5: 'Understand Testing DOM',
        line6: 'Explain End to End Testing'
      }


    ]
  },
  {
    courseName: 'React',
    id: '8',
    syllabus: [
      {
        title: 'Lesson 01 - ES6',
        line1: 'Introduction',
        line2: 'Array Helper Methods',
        line3: 'Let and Const',
        line4: 'Template Literals',
        line5: 'Arrow Functions',
        line6: 'Default Function Parameters',
        line7: 'Rest and Spread',
        line8: 'Destructuring',
        line9: 'Classes',
        line10: 'Promises',
      },
      {
        title: 'Lesson 02 - Getting Started',
        line1: 'What Is React',
        line2: 'Environment Setup',
        line3: 'ES6 Refresher - Part 1',
        line4: 'ES6 Refresher - Part 2',
        line5: 'ES6 Refresher - Part 3',
        line6: 'Welcome To The Course',
        line7: 'Create React App vs Manual Setup',
        line8: 'Installing & Using The CLI',
        line9: 'A Look At The Initial React Files & How ',
        line10: 'They Work'
      },
      {
        title: 'Lesson 03 - Introduction to Redux',
        line1: 'Why Redux?',
        line2: 'Core Concepts of Redux'
      },
      {
        title: 'Lesson 04 - React & Redux',
        line1: 'The React Redux Node Package',
        line2: 'Provider Component',
        line3: 'Connecting React Components with Redux Store',
        line4: 'Reducer Composition',
        line5: 'Normalization: Points to Keep in Mind When Designing a Redux Store',
        line6: 'Redux Middleware'
      },
      {
        title: 'Lesson 05 - Components, JSX & Props',
        line1: 'Thinking In Components',
        line2: 'What Is JSX',
        line3: 'JSX Expressions',
        line4: 'Creating Your First Component',
        line5: 'Functional Components'
      },
      {
        title: 'Lesson 06 - State & The Context API',
        line1: 'State & The Context API',
      },
      {
        title: 'Lesson 07 - Working With Forms',
        line1: 'Changing State From Another Component',
        line2: 'Using The Context API & Provider State',
        line3: 'Adding A Context Reducer For Actions',
        line4: 'Creating A Form With State',
        line5: 'Controlled Components & onChange',
        line6: 'TextInputGroup Component For DRY Code',
        line7: 'Working With Props',
        line8: 'Typechecking With PropTypes',
        line9: 'CSS In React',
        line10: 'Adding Bootstrap',
        line11: 'Creating State',
        line12: 'Events In React',
        line13: 'Changing State',
        line14: 'Uncontrolled Components & Refs',
        line15: 'Form Submit Action To Context',
        line16: 'Error Checking & Display',
        line17: 'Course & Projects Outline',
        line18: 'Self-Paced Curriculum'
      },
      {
        title: 'Lesson 08 - Lifecycle, HTTP & Deployment',
        line1: 'Lifecycle Methods',
        line2: 'GET Requests',
        line3: 'POST & DELETE Requests',
        line4: 'Using AsyncAwait'
      },
      {
        title: 'Lesson 09 - React Router v4',
        line1: 'React Router Setup',
        line2: 'Links, Params & Redirect',
        line3: 'EditContact Component & Fetch Contact',
        line4: 'PUT Request & Update Action',
        line5: 'Deploy To Github Pages'
      },
      {
        title: 'Lesson 10 - Learning Redux',
        line1: 'A Note On Redux',
        line2: 'App Starting Point For Redux',
        line3: 'Redux Store Setup & Contact Reducer'
      },
      {
        title: 'Lesson 11 - Redux Thunk & HTTP',
        line1: 'GET Request Dispatch',
        line2: 'POST & DELETE Request Dispatch',
        line3: 'Get Single Contact For Edit',
        line4: 'Connecting Components & Dispatching Actions',
        line5: 'Creating A Separate Actions File',
        line6: 'Delete & Add Contact Action',
        line7: 'PUT Request & Dispatch',
        line8: 'Deploy To Apache',
        line9: 'App Intro & Demo',
        line10: 'FirebaseFirestore Setup',
      }

    ]
  },
  {
    courseName: 'JavaScript',
    id: '17',
    syllabus: [
      {
        title: 'Module 1: Introduction',
        line1: 'In this module we will learn about what is the JavaScript and benefits of the language. We can also learn how write',
        line2: 'the first JavaScript program.',
        line3: 'JavaScript Introduction'
      },
      {
        title: 'Module 2: Language Syntax',
        line1: 'In this module we will learn about JavaScript language syntax and how to use the program level. And we can also',
        line2: 'learn understanding the arrays.',
        line3: 'Variable declaration',
        line4: 'Operators',
        line5: 'Control Statements',
        line6: 'Error Handling',
        line7: 'Understanding arrays',
        line8: 'Function Declaration'
      },
      {
        title: 'Module 3: Built In Functions',
        line1: 'Deccansoft Software Services – Microsoft Silver Learning Partner JavaScript Syllabus',
        line2: 'In this module we will learn about what are the built in functions in JavaScript and how use the JavaScript',
        line3: 'functions.',
        line4: 'Built In Functions',
        line5: 'Standard Date and Time Functions',
      },
      {
        title: 'Module 4: HTML Forms',
        line1: 'In this module we will learn about how to use the forms. What are the properties in JavaScript. HTML form',
        line2: 'validation can be done by JavaScript.',
        line3: 'HTML Document object Model',
        line4: 'Working with HTML form and its elements',
      },
      {
        title: 'Module 5: HTML DOM',
        line1: 'In this module we will learn about JavaScript can access and change all the elements of an HTML document.',
        line2: 'HTML Document object Model',
        line3: 'Working with HTML form and its elements',
        line4: 'Other Document Object Model',
      },
      {
        title: 'Module 6: Cookies',
        line1: 'In this module we will learn about how to use the cookies. What are the advantages of the cookies and how to',
        line2: 'create cookies?',
        line3: 'Working with cookies',
      },
      {
        title: 'Module 7: Working with Objects and Classes',
        line1: 'In this module we will learn about what is the use of objects and how to call the data. We can also learn about',
        line2: 'inheriting data.',
        line3: 'Working with Objects',
        line4: 'Call method in JavaScript',
        line5: 'Inheritance in JavaScript using prototype',
        line6: 'At the end of the course participants will be able to:',
        line7: '1. HTML to define the content of web pages',
        line8: '2. CSS to specify the layout of web pages',
        line9: '3. JavaScript to program the behavior of web page',
      }

    ]
  },
  {
    courseName: 'MySQL',
    id: '5',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'Java',
    id: '18',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'SpringBoot',
    id: '14',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'Python',
    id: '',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'Html',
    id: '9',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'CSS 3',
    id: '9',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'AWS',
    id: '15',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'MongoDB',
    id: '13',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
  {
    courseName: 'Jquery',
    id: '',
    syllabus: [
      {
        title: 'Lesson 01 - Features of TypeScript',
        line1: 'Introduction',
        line2: 'Introduction to TypeScript',
        line3: 'Introduction to Data Types',
        line4: 'Let vs Const'
      }
    ]
  },
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
    const courseNameKey = 'courseName';
    this.selectedCourseName = result[0][courseNameKey];
    const key = 'syllabus';
    return result[0][key];
  }
}
