Simple team member manager built with React, `react-hook-form`, and Tailwind CSS.

## Features

- Add, edit, and delete team members
- Search by first + last name
- Local storage persistence
- Responsive layout for phone, tablet, and desktop

## How It Works (Main Functions)

- `App` (`src/App.jsx`)
  - Holds main state: `card` (members), `search`, `toggle` (form visibility), `edit`
  - `handleDelete(id)`: removes a member and updates `localStorage`
  - `searchValues`: filters members by name using the search text
- `Form` (`src/components/Form.jsx`)
  - `handleSubmit(submit)` from `react-hook-form`
  - `submit(data)`:
    - If editing: updates the matching member by `id`
    - If adding: pushes a new member with a generated `id`
    - Updates `localStorage`
    - Closes the form
- `Navbar` (`src/components/Navbar.jsx`)
  - Toggles the form open/close
  - Captures search input and updates `search` state

## Responsive Changes (Tailwind Logic)

The UI uses Tailwind responsive classes to adapt:

- Form width scales: `w-full` on mobile, wider on tablet/desktop
- Name fields stack on mobile (`flex-col`) and sit side-by-side on larger screens (`sm:flex-row`)
- Cards are full width on mobile and fixed width on larger screens
- Buttons and inputs expand to full width on mobile for easier tapping

## Run Locally

1. Install dependencies
2. Start the dev server

Example:

```bash
npm install
npm run dev
```

## Folder Structure

```
src/
  App.jsx
  components/
    Navbar.jsx
    Form.jsx
    Card.jsx
```

"# team-managment"
