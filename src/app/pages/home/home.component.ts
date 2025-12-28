import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NOTES_ICON, TODO_ICON } from './home-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notesIcon: SafeHtml;
  todoIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.notesIcon = this.sanitizer.bypassSecurityTrustHtml(NOTES_ICON);
    this.todoIcon = this.sanitizer.bypassSecurityTrustHtml(TODO_ICON);
  }

  ngOnInit(): void {
  }

}
