# HeyHotel - Simple Hotel Room Booking

## Project Overview
HeyHotel is a front-end Angular application that displays available hotel rooms and allows users to book them.

## Features
- List all available rooms fetched from a mock API (mockapi.io)
- Display room details: Name, Type, Price, Availability
- Search rooms by name
- Book rooms through a modal form (Guest Name, Check-in, Check-out)
- Toast notification after successful booking
- Uses localStorage to persist bookings
- Fully responsive design (desktop + mobile)
- Modular structure with standalone components

## Tech Stack
- Angular 17+
- TypeScript (strict mode)
- Bootstrap 5 (utility classes + grid)
- RxJS and Angular HttpClient
- Angular Reactive Forms
- LocalStorage for booking persistence

## Project Structure

src/app/
├─ app.ts -> main entry point, root component
├─ header/ -> header/navbar component
├─ room-list/ -> parent component listing rooms
│ ├─ room-card/ -> child component for each room card
│ ├─ room.model.ts -> Room interface
│ └─ room.service.ts -> API service using HttpClient
├─ index. html
 ─ main.ts

 
## Installation & Running
1. Clone the repo:  
   Go to terminal and run these command:
   git clone https://github.com/awareplazma/HeyHotel.git
   cd HeyHotel
   
2. Install dependency
   npm install

3. Run application
   ng serve
   
5. Go to http://localhost:4200 on any web browser
   
## Design Decisions
  i. Project Structure: To enforce Seperation of Concerns (SoC)
 ii. Standalone Components: To simplify structure without NgModules
iii. RoomCard (Components): To encapsulates room card UI + booking modal
 iv. Bootstrap Grid & Utilities: To create responsive layout and consistent styling
  v. Reactive Forms: To handle booking form validation
vi. LocalStorage: To simulates backend data persistence

## Assumptions
  i. API provides consistent data types and field names
 ii. POST requests handled via form submission 
iii. Part of a larger enterprise system
 iv. Booking availability updates only on the front-end/localStorage
 
## Screenshots

Desktop
<img width="1280" height="560" alt="image" src="https://github.com/user-attachments/assets/35c4fb83-da04-4610-81b1-0da48b049f49" />

Mobile (Google Inspector)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
