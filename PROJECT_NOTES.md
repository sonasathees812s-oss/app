# Notes & Todo App - Project Documentation

## Branch: `to-do-app-base-component`

### Changes Made in This Branch

**Summary**: Set up the base Angular application structure with routing, components, and initial Notes functionality.

**Files Changed**: 26 files (694 additions, 493 deletions)

#### Key Changes:

1. **Project Structure Setup**
   - Created 4 page components: Home, Notes, Todo, Settings
   - Set up Angular routing module
   - Added FormsModule for two-way data binding
   - Created constants file for centralized string management
   - Set up SCSS color system

2. **Dependencies**
   - Added `@types/node` for TypeScript Node.js type definitions
   - Updated TypeScript configuration

3. **Component Implementation**
   - **Home Component**: Landing page with navigation buttons
   - **Notes Component**: Fully functional with CRUD operations and localStorage persistence
   - **Todo Component**: Placeholder (not yet implemented)
   - **Settings Component**: Placeholder (not yet implemented)

4. **Styling**
   - Created color palette system in `_colors.scss`
   - Added custom styles for Notes component
   - Cleaned up app component template (removed default Angular template)

---

## Step-by-Step: What You've Built So Far

### Step 1: Angular Project Initialization
**What happened**: Created a new Angular 14 project
- Angular CLI generated the base project structure
- Set up TypeScript configuration
- Configured build tools (Angular DevKit)

**Files created**:
- `angular.json` - Angular workspace configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Project dependencies

### Step 2: Application Module Setup (`app.module.ts`)
**What happened**: Configured the root Angular module

```typescript
// Key imports:
- BrowserModule: Enables browser-specific features
- FormsModule: Enables two-way data binding [(ngModel)]
- AppRoutingModule: Handles navigation between pages
```

**Components declared**:
- `AppComponent` - Root component
- `HomeComponent` - Landing page
- `NotesComponent` - Notes management page
- `TodoComponent` - Todo list page (placeholder)
- `SettingsComponent` - Settings page (placeholder)

### Step 3: Routing Configuration (`app-routing.module.ts`)
**What happened**: Set up client-side routing

**Routes configured**:
- `/` → Redirects to `/home`
- `/home` → HomeComponent
- `/notes` → NotesComponent
- `/todo` → TodoComponent
- `/settings` → SettingsComponent

**How it works**:
- Angular Router intercepts URL changes
- Loads appropriate component based on route
- Uses `<router-outlet>` in app.component.html to display routed components

### Step 4: Home Component (`home.component.ts/html/scss`)
**What happened**: Created landing page with navigation

**Features**:
- Welcome message
- Two navigation buttons (Notes & Todo)
- Custom SVG icons (stored in `home-icons.ts`)
- Uses Angular's `DomSanitizer` to safely inject SVG HTML

**Key concepts**:
- `routerLink` directive: Creates navigation links
- `[innerHTML]` binding: Renders HTML content
- `SafeHtml`: TypeScript type for sanitized HTML

### Step 5: Notes Component - Full Implementation
**What happened**: Built complete Notes management system

#### Component Logic (`notes.component.ts`):

**Data Structure**:
```typescript
interface Note {
  id: number;           // Unique identifier
  title: string;        // Note title
  content: string;      // Note body text
  createdAt: Date;      // Timestamp
}
```

**Properties**:
- `title: string` - Input field for note title
- `content: string` - Input field for note content
- `notes: Note[]` - Array storing all notes
- `nextId: number` - Counter for generating unique IDs

**Methods**:

1. **`ngOnInit()`**: Lifecycle hook
   - Called when component initializes
   - Loads saved notes from localStorage

2. **`addNote()`**: Creates new note
   - Validates that title or content exists
   - Creates Note object with unique ID
   - Adds to beginning of array (`unshift`)
   - Clears input fields
   - Saves to localStorage

3. **`deleteNote(id)`**: Removes note
   - Filters out note with matching ID
   - Updates localStorage

4. **`saveNotes()`**: Persists data
   - Converts notes array to JSON string
   - Stores in browser's localStorage
   - Key: `'notes'` (from AppConstants)

5. **`loadNotes()`**: Retrieves saved data
   - Reads JSON string from localStorage
   - Parses back to Note array
   - Calculates nextId from existing notes

#### Template (`notes.component.html`):

**Two-way Data Binding**:
- `[(ngModel)]="title"` - Binds input to component property
- `[(ngModel)]="content"` - Binds textarea to component property

**Event Binding**:
- `(keyup.enter)="addNote()"` - Calls addNote when Enter pressed
- `(click)="addNote()"` - Calls addNote on button click
- `(click)="deleteNote(note.id)"` - Calls deleteNote with note ID

**Structural Directives**:
- `*ngIf="notes.length > 0"` - Shows notes list only if notes exist
- `*ngFor="let note of notes"` - Loops through notes array
- `*ngIf="note.title"` - Shows title only if it exists

**Constants Usage**:
- `{{ constants.PAGE_TITLE }}` - Displays "Notes"
- Uses AppConstants for all user-facing strings

### Step 6: Constants File (`app.constants.ts`)
**What happened**: Centralized string management

**Why it's useful**:
- Single source of truth for text
- Easy to update labels
- Supports future internationalization
- Reduces typos

**Structure**:
```typescript
AppConstants.NOTES.PAGE_TITLE
AppConstants.NOTES.TITLE_PLACEHOLDER
AppConstants.STORAGE_KEYS.NOTES
```

### Step 7: Styling System (`_colors.scss`)
**What happened**: Created reusable color system

**SCSS Features Used**:
- **Maps**: `$colors` map stores all color values
- **Functions**: `color($name)` function retrieves colors
- **Usage**: `color(primary)` returns `#ff9800`

**Color Categories**:
- Primary colors (orange theme)
- Background colors
- Text colors
- Border colors
- Error colors
- Shadow colors

**Import**: Added to `styles.scss` for global access

### Step 8: App Component Simplification
**What happened**: Cleaned up root component

**Before**: Default Angular template with lots of boilerplate
**After**: Simple `<router-outlet>` that displays routed components

---

## What is PrimeNG (ng-prime)?

**PrimeNG** is a comprehensive UI component library for Angular applications.

### Overview:
- **Official Name**: PrimeNG (often called "ng-prime")
- **Type**: Angular component library
- **License**: MIT (free and open-source)
- **Website**: https://primeng.org/

### What It Provides:

1. **Rich UI Components**:
   - Data tables with sorting, filtering, pagination
   - Forms (inputs, dropdowns, calendars, file uploads)
   - Overlays (dialogs, tooltips, popovers)
   - Menus and navigation components
   - Charts and graphs
   - Data visualization components

2. **Themes**:
   - Multiple built-in themes (Material, Bootstrap, custom)
   - Theme customization tools
   - Dark mode support

3. **Features**:
   - Accessibility (ARIA support)
   - Responsive design
   - TypeScript support
   - Well-documented with examples

### Common PrimeNG Components:

- **p-table**: Advanced data table
- **p-dialog**: Modal dialogs
- **p-dropdown**: Select dropdowns
- **p-calendar**: Date picker
- **p-button**: Styled buttons
- **p-inputText**: Text inputs
- **p-checkbox**: Checkboxes
- **p-radioButton**: Radio buttons
- **p-toast**: Toast notifications
- **p-menu**: Navigation menus

### Installation (if you want to use it):

```bash
npm install primeng primeicons
```

Then in `app.module.ts`:
```typescript
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
// ... import other modules

@NgModule({
  imports: [
    ButtonModule,
    TableModule,
    // ... other PrimeNG modules
  ]
})
```

### Current Status in Your Project:
**PrimeNG is NOT currently installed** in your project. Your app uses:
- Native HTML elements (inputs, buttons, textareas)
- Custom SCSS styling
- Angular directives (`*ngIf`, `*ngFor`, `[(ngModel)]`)

### When to Use PrimeNG:
- **Use it if**: You need complex components (tables, calendars, charts) quickly
- **Don't use it if**: You want full control over styling, or prefer lightweight solutions

---

## Key Angular Concepts Used

### 1. Components
- **What**: Reusable UI building blocks
- **Structure**: `.ts` (logic), `.html` (template), `.scss` (styles)
- **Example**: `NotesComponent` handles all notes-related functionality

### 2. Modules
- **What**: Containers that group related components, directives, services
- **Example**: `AppModule` declares all components and imports dependencies

### 3. Routing
- **What**: Navigation between different views/pages
- **How**: Angular Router matches URLs to components
- **Example**: `/notes` URL loads `NotesComponent`

### 4. Two-Way Data Binding
- **What**: Automatic synchronization between component and template
- **Syntax**: `[(ngModel)]="propertyName"`
- **Example**: Typing in input automatically updates `title` property

### 5. Directives
- **Structural**: `*ngIf`, `*ngFor` - Modify DOM structure
- **Attribute**: `routerLink`, `[innerHTML]` - Modify element behavior
- **Example**: `*ngFor` creates multiple note cards from array

### 6. Lifecycle Hooks
- **What**: Methods called at specific points in component lifecycle
- **Example**: `ngOnInit()` runs when component initializes

### 7. LocalStorage
- **What**: Browser storage that persists after page reload
- **Methods**: `setItem()`, `getItem()`, `removeItem()`
- **Example**: Notes saved to localStorage survive browser refresh

### 8. TypeScript Interfaces
- **What**: Define shape/structure of objects
- **Example**: `Note` interface ensures all notes have id, title, content, createdAt

---

## Next Steps (What's Left to Build)

### Todo Component
- **Status**: Placeholder only
- **Needed**: 
  - Todo item interface (id, task, completed, createdAt)
  - Add/delete todo functionality
  - Mark as complete/incomplete
  - Filter (all/active/completed)
  - localStorage persistence

### Settings Component
- **Status**: Placeholder only
- **Possible features**:
  - Theme selection
  - Clear all data
  - Export/import data
  - User preferences

### Enhancements
- Edit notes functionality
- Search/filter notes
- Categories/tags for notes
- Due dates for todos
- Data export (JSON/CSV)
- Responsive design improvements

---

## File Structure Summary

```
src/app/
├── app.module.ts              # Root module (declares all components)
├── app-routing.module.ts      # Route configuration
├── app.component.ts/html/scss # Root component (just router-outlet)
├── constants/
│   └── app.constants.ts       # Centralized strings
├── pages/
│   ├── home/                  # Landing page
│   │   ├── home.component.ts/html/scss
│   │   └── home-icons.ts      # SVG icon definitions
│   ├── notes/                 # Notes management (COMPLETE)
│   │   └── notes.component.ts/html/scss
│   ├── todo/                  # Todo list (PLACEHOLDER)
│   │   └── todo.component.ts/html/scss
│   └── settings/               # Settings (PLACEHOLDER)
│       └── settings.component.ts/html/scss
└── styles/
    └── _colors.scss           # Color system
```

---

## Running the Application

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm start
# or
ng serve

# Application runs on http://localhost:4200
```

---

## Key Takeaways

1. **Angular Structure**: Components, Modules, Routing
2. **Data Binding**: Two-way binding with `[(ngModel)]`
3. **Persistence**: localStorage for client-side data storage
4. **TypeScript**: Interfaces for type safety
5. **SCSS**: Variables, maps, functions for styling
6. **Constants**: Centralized string management
7. **Routing**: Client-side navigation without page reloads

---

*Documentation created: Based on current branch `to-do-app-base-component`*

