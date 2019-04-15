import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr;

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor = "let event of events" class="col-md-5">
                    <app-event-thumbnail (click)= "handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventListComponent implements OnInit {
    events: any[];

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}
