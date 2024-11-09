# Need it List

## Startup Specification

### Elevator Pitch
What do you use to communicate essential information within your family? Perhaps you use messaging apps or sticky notes. The app I'm developing will help make this process more reliable and easier for everyone. With this app, everyone who shares an ID and password can access the list and update it with the necessary tasks. Completed tasks will be marked as green, while incomplete tasks will appear in red, allowing you to see what needs attention at a glance. This app will help eliminate forgotten communications or tasks within your group.

## Design
![App Design Image](./pics/CS260-2.jpg)

## Key Features
- Secure login with shared ID and password
- Ability to add, update, and remove tasks on the list
- Real-time display of completed (green) and incomplete (red) tasks
- Accessible by all users who share the login credentials
- Task status updated and synchronized in real-time across all users
- Simple, easy-to-use interface for family or group communication
- Admin privileges to manage access and list settings

## Technologies
I am going to use the required technologies in the following ways:

- **HTML**: Uses correct HTML structure for the application. Two main HTML pages: one for login and one for the task management dashboard.
- **CSS**: Styling to ensure the app is responsive and looks clean on various devices, with appropriate whitespace, color contrasts (green for completed tasks, red for incomplete tasks), and easy readability.
- **React**: Provides the user interface, handling login, displaying, and updating tasks.
- **Service**: Backend service with endpoints for:
  - Secure login
  - Retrieving and updating task lists
  - Task status management (complete/incomplete)
- **Database/Login**: Stores user information, shared tasks, and task statuses. Provides secure storage of credentials and task data. Only authenticated users can access and update the list.
- **WebSocket**: Synchronizes task updates in real-time across all users, ensuring that changes made by one user are immediately visible to others.

### HTML Deliverable

➡️ The following is an example of the required information for the **Sharenote App HTML deliverable**.

For this deliverable, I built out the structure of my application using HTML.

- [x] **HTML Pages**: 
    - Multiple HTML pages represent different sections of the app. 
    - Pages include: `index.html`, `createroom.html`, `sharenote.html`, `about.html`, `thrid-party services.html`, and `websocket.html`.
    
- [x] **Links**: 
    - The home page (`index.html`) links to other key pages such as `about.html`, `createroom.html`, and `sharenote.html` for easier navigation.
    
- [x] **Text**: 
    - Each page provides descriptive text explaining its functionality. For example, `about.html` explains the purpose of the app, and `sharenote.html` allows users to add and share tasks.
    
- [x] **Images**: 
    - The `about.html` page includes an example image to enhance the content, but additional functionality will be added later.

- [x] **DB/Login**: 
    - The login form is present on the home page (`index.html`), allowing users to enter a room number and password to access or create a task-sharing room.

- [x] **WebSocket**: 
    - The WebSocket placeholder is set up in the `websocket.html` file. It will synchronize task updates in real-time once implemented, allowing users to see changes across devices instantly.

- [x] **Third-Party Services**: 
    - The `third-party services.html` file includes a placeholder for future integration with services like Google Calendar, which will allow users to sync tasks with external calendars.

### CSS Deliverable

➡️ The following summarizes the **Sharenote App CSS deliverable**.

For this deliverable, I applied consistent and responsive styling across all pages.

- [x] **Header, Footer, and Main Content**: 
    - Unified design with a centered layout, background color, and subtle shadows for depth.

- [x] **Navigation Elements**: 
    - Horizontal navigation with no underlines, white text, and hover effects for easy readability.

- [x] **Responsive Design**: 
    - Flexible layout that adapts to various screen sizes, ensuring a smooth user experience on mobile and desktop.

- [x] **Buttons and Forms**: 
    - Rounded buttons with hover effects. Input fields are styled with consistent spacing and focus states.

- [x] **Text Content**: 
    - Arial font with clear color contrasts. Titles are color-coded to enhance section visibility.

- [x] **Activity Log and Messaging**: 
    - Simple list layout with padding and borders for clear separation between items.

## React Deliverable
➡️ Below is the required information for the Startup React deliverable.

For this deliverable, I used JavaScript and React to ensure the application functions smoothly for a single user. Additionally, I incorporated placeholders for future technology.

### Modifications and Features Completed

- [x] **Bundled and Transpiled** - Application has been bundled and transpiled for optimized performance.
- [x] **Components** - Created reusable components, including:
  - `Home`
  - `About`
  - `CreateRoom`
  - `Sharenote`
  - `ThirdPartyServices`
  - `Settings`
  - `WebSocket`
- [x] **Database Integration** - Currently using local storage to display and store data, which will be replaced with a database in future updates.
- [x] **WebSocket Simulation** - created some memo system to simulate WebSocket functionality by periodically updating messages. This will be replaced with actual WebSocket integration.
- [x] **Router** - Implemented React Router for smooth navigation between components:
  - Login
  - Task Management (To-Do List)
  - Settings
  - Third-Party Services
- [x] **React Hooks** - Used `useState` and `useEffect` hooks for managing component state and simulating real-time updates within components.

### Future Enhancements

- [ ] **Database Implementation** - Replace local storage with a database to persist user data across sessions.
- [ ] **WebSocket Integration** - Implement real WebSocket connections for live message and task updates. Also, uppdate the design.
- [ ] **Authentication** - Secure user login functionality for multiple user support.