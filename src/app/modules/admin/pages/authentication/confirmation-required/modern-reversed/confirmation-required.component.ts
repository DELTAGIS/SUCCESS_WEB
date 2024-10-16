import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@deltagis/animations';

@Component({
    selector: 'confirmation-required-modern-reversed',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [RouterLink],
})
export class ConfirmationRequiredModernReversedComponent {
    /**
     * Constructor
     */
    constructor() {}
}
