import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'app/events/create-event/create-event.html'
})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router) {}
    
    cancel() {
        this.router.navigate(['/events']);
    }
}