import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Event } from '../index'; 

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location">
            <span>Locaton: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: Event;
    
    getStartTimeClass() {
        //Approach-1
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
        // //2
        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold';
        // return '';
        // //3
        // if(this.event && this.event.time === '8:00 am')
        //     return ['green', 'bold'];
        // return [];
    }
}