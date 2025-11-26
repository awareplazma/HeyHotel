import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from './room.service';
import { Room } from './room.model';
import { catchError, of } from 'rxjs';
import { RoomCard } from './room-card/room-card';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RoomCard],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.css']
})
export class RoomList implements OnInit {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];
  searchText: string = '';

  constructor(private roomService: RoomService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.roomService.getRooms()
      .pipe(catchError(err => {
        console.error(err);
        return of([]);
      }))
      .subscribe(data => {
        this.rooms = data;
        this.applyFilter();              // populate filteredRooms
        this.cdr.detectChanges();        // force UI update
      });
  }

  onSearchChange() {
    this.applyFilter();                // called when input changes
  }

  private applyFilter() {
    const search = this.searchText.trim().toLowerCase();
    this.filteredRooms = !search
      ? this.rooms
      : this.rooms.filter(room =>
          room.room_name.toLowerCase().includes(search)
        );
  }
}
