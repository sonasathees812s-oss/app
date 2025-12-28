import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../constants/app.constants';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  title: string = '';
  content: string = '';
  notes: Note[] = [];
  private nextId: number = 1;

  // Constants
  readonly constants = AppConstants.NOTES;

  constructor() { }

  ngOnInit(): void {
    this.loadNotes();
  }

  addNote(): void {
    if (this.title.trim() || this.content.trim()) {
      const newNote: Note = {
        id: this.nextId++,
        title: this.title.trim(),
        content: this.content.trim(),
        createdAt: new Date()
      };
      this.notes.unshift(newNote);
      this.title = '';
      this.content = '';
      this.saveNotes();
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }

  private saveNotes(): void {
    localStorage.setItem(AppConstants.STORAGE_KEYS.NOTES, JSON.stringify(this.notes));
  }

  private loadNotes(): void {
    const savedNotes = localStorage.getItem(AppConstants.STORAGE_KEYS.NOTES);
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
      if (this.notes.length > 0) {
        this.nextId = Math.max(...this.notes.map(n => n.id)) + 1;
      }
    }
  }
}
