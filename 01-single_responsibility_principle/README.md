# Single Responsibility Principle

### Tech Stack

- UI Layer: React
- Language: Typescript
- Build Tool: Vite

### Template

- This project uses a template based on the **01-Basic-Setup**.

### Installation

- `npm install`

### Start the Application

- `npm run dev`

### Single Responsibity Principle

- The Single Responsibility Principle means that a React component should do only one specific task, so the code stays simple, easy to understand, and easy to update.
- Each React component should have its own responsibility, like displaying a button, handling user input, or fetching data.

### Separate Component and assign their Responsibilities

1. Main UI
2. Individual UI
3. Data Fetch -> hooks
4. Functionality
5. Types
6. Data

### Notes

1. Sometimes small change also renders the whole component.
2. we create own isolation components and own encapsulation.
