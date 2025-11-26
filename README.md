# HeyHotel - Simple Hotel Room Booking

## Project Overview
HeyHotel is a front-end Angular application that displays available hotel rooms and allows users to book them.

## Features
- List all available rooms fetched from a mock API (mockapi.io)
- Display room details: Name, Type, Price, Availability
- Search rooms by name
- Book rooms through a modal form (Guest Name, Check-in, Check-out)
- Toast notification after successful booking
- Fully responsive design (desktop + mobile)
- Modular structure with standalone components

## Tech Stack
- Angular 17+
- TypeScript (strict mode)
- Bootstrap 5 (utility classes + grid)
- RxJS and Angular HttpClient
- Angular Reactive Forms

## Project Structure

```text
src/app/
├─ app.ts -> main entry point, root component
├─ header/ -> header/navbar component
├─ room-list/ -> parent component listing rooms
│ ├─ room-card/ -> child component for each room card
│ ├─ room.model.ts -> Room interface
│ └─ room.service.ts -> API service using HttpClient
├─ index. html
└─ main.ts
```
 
## Installation & Running
1. Clone the repo:  
   Go to terminal and run these command:
   git clone https://github.com/awareplazma/HeyHotel.git
   cd HeyHotel
   
2. Install dependency
   npm install

3. Run application
   ng serve
   
4. Go to http://localhost:4200 on any web browser
   
## Design Decisions
  - Project Structure: To enforce Seperation of Concerns (SoC)
  - Standalone Components: To simplify structure without NgModules
  - RoomCard (Components): To encapsulates room card UI + booking modal
  - Bootstrap Grid & Utilities: To create responsive layout and consistent styling
  - Reactive Forms: To handle booking form validation

## Assumptions
  - API provides consistent data types and field name
  - POST requests handled via form submission
  - Part of a larger enterprise system
  - Booking availability updates only on the front-end
 
## Screenshots

#Desktop View
  - Room List

    

<img width="1280" height="560" alt="image" src="https://github.com/user-attachments/assets/35c4fb83-da04-4610-81b1-0da48b049f49" />



  - Room Booking



<img width="1280" height="563" alt="image" src="https://github.com/user-attachments/assets/4316d7ab-e8f0-41b3-9e90-3883bb42b03a" />




  - Toast Notification & Changed State




<img width="1280" height="566" alt="image" src="https://github.com/user-attachments/assets/cc8eb0c5-48d2-4741-a54f-5183c9ca9b91" />





#Mobile View (Chrome DevTools)




<img width="516" height="559" alt="image" src="https://github.com/user-attachments/assets/49c21ba2-bd28-4660-82ac-08fcddd85071" />

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
