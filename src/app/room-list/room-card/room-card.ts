import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Room } from '../room.model';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.css']
})
export class RoomCard {
  @Input() room!: Room;
  bookingForm: FormGroup;
  showModal = false;
  showToast = false;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      guestName: [''],
      checkIn: [''],
      checkOut: ['']
    });
  }

  openBookingModal() { this.showModal = true; }
  closeBookingModal() { this.showModal = false; }

  submitBooking() {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({ roomId: this.room.id, ...this.bookingForm.value });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // mark room as booked locally
    this.room.room_open = 'Booked';

    this.closeBookingModal();
    this.showToast = true;

    setTimeout(() => this.showToast = false, 3000);
  }

  closeToast() { this.showToast = false; }
}
