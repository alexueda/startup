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
- [x] **WebSocket Simulation** - Created a memo system to simulate WebSocket functionality by periodically updating messages. This will be replaced with actual WebSocket integration.
- [x] **Router** - Implemented React Router for smooth navigation between components:
  - Login
  - Task Management (To-Do List)
  - Settings
  - Third-Party Services
- [x] **React Hooks** - Used `useState` and `useEffect` hooks to manage component state and simulate real-time updates within components. Additional functionality was modularized using custom hooks, like `useTaskActions` in `Settings` for handling user interactions with tasks.

### Service deliverable

➡️ The following summarizes the **Service deliverable**.

For this deliverable, I developed both backend services and frontend pages to enable task sharing, messaging, and third-party integrations.

- [x] **Backend Service Endpoints**:
  - Implemented endpoints to:
    - Create rooms, add tasks, fetch tasks, and delete tasks.
    - Send and log messages in real-time (WebSocket simulation).
  - Simple in-memory data structure for task and room management.

- [x] **Frontend Integration**:
  - Built pages for Home, About, Create Room, Sharenote, Third-Party Services, and WebSocket using React.
  - Connected frontend with backend endpoints using `fetch`.
  - Added state management for tasks, members, and messaging.

- [x] **Third-Party Service Integration**:
  - Buttons for connecting to Google Calendar and Google Docs.
  - External links configured for seamless access.

- [x] **Styling and Layout**:
  - Applied consistent styling across all pages.
  - Responsive design with layouts adaptable to different screen sizes.

- [x] **WebSocket Messaging and Activity Log**:
  - Created a clean UI for sending messages and viewing activity logs.
  - Messages include timestamps for better tracking.

### DB/Login Deliverable

➡️ The following summarizes the **DB/Login deliverable**.

For this deliverable, I developed a backend authentication system and integrated it with a frontend to enable secure room creation, login, and task management functionality.

- [x] **MongoDB Atlas Database Setup**:
  - Successfully created a MongoDB Atlas database to store user credentials, rooms, and tasks.

- [x] **Room(User) Registration**:
  - Implemented backend functionality to create a new room (user registration) with a unique room number and password.
  - Validated inputs to ensure room numbers are unique, preventing duplicate entries.
  - Room details (room number, password, and tasks) are securely stored in MongoDB.

- [x] **Existing User Login**:
  - Enabled existing users to log in using their room number and password.
  - Validated login credentials against the database, ensuring secure authentication.
  - Restricted actions (e.g., creating tasks) for users who are not logged in.

- [x] **Data Storage and Association**:
  - Stored room-specific tasks in MongoDB under the corresponding room document.
  - Implemented endpoints to fetch, create, and update tasks for a specific room.

- [x] **Frontend Integration**:
  - Built the "Create Room" and "Login" pages using React.
  - Connected the frontend with backend API endpoints using `fetch`.
  - Displayed success or error messages for user actions such as creating a room or logging in.

- [x] **Functionality Restrictions**:
  - Prevented unauthorized users from accessing or modifying tasks by enforcing restrictions on the backend.
  - Users must be logged in to create or manage tasks in their room.

- [x] **Error Handling**:
  - Included robust error handling in both frontend and backend:
    - Validations for missing or incorrect inputs.
    - Clear feedback messages for actions like duplicate room creation or incorrect login credentials.

This deliverable successfully integrates MongoDB for data storage and implements a functional login system to manage user authentication and task sharing securely.


### WebSocket Deliverable
➡️ The following summarizes the **WebSocket deliverable**.

For this deliverable, I implemented a real-time messaging system using WebSockets, integrating both backend and frontend to enable instant communication between multiple clients.

- [x]WebSocket Backend Setup:

- Implemented a WebSocket server using the ws library in Node.js.
- Configured the server to handle connections on the /websocket endpoint.
- Upgraded HTTP requests to WebSocket connections and securely managed the lifecycle of connections.
- Developed functionality to broadcast messages to all connected clients, ensuring real-time updates.

- [x]Message Broadcasting:

- Ensured messages sent by one client are immediately broadcasted to all other connected clients.
- Added logic to differentiate between the sender and other recipients, preventing duplicates or missed messages.

- [x]Frontend Integration:

- Built a WebSocket client using the browser's WebSocket API.
- Integrated the WebSocket client into a React application, dynamically connecting it to the backend.
- Implemented functionality to send messages through WebSocket from the frontend.
- Handled received messages in real-time and updated the UI accordingly.

- [x]Immediate Local Updates:

- Optimized the frontend to display sent messages immediately in the sender’s UI without waiting for server confirmation.
- Ensured seamless synchronization between local UI updates and server broadcasts.

- [x]Reconnection Logic:

- Added robust reconnection logic to handle unexpected WebSocket disconnections.
- Automatically attempted reconnections with a delay to maintain connection reliability.

- [x]Error Handling:

- Backend: Managed invalid or malformed messages and handled inactive connections securely.
- Frontend: Displayed user-friendly error messages for connection failures or message sending issues.

This deliverable successfully integrates WebSockets for real-time communication and ensures a robust, error-handled, and user-friendly experience for messaging across multiple clients.