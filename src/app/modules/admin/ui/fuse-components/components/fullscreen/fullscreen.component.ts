import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseHighlightComponent } from '@deltagis/components/highlight';
import { FuseComponentsComponent } from 'app/modules/admin/ui/fuse-components/fuse-components.component';

@Component({
    selector: 'fullscreen',
    templateUrl: './fullscreen.component.html',
    standalone: true,
    imports: [MatIconModule, MatButtonModule, FuseHighlightComponent],
})
export class FullscreenComponent {
    /**
     * Constructor
     */
    constructor(private _fuseComponentsComponent: FuseComponentsComponent) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._fuseComponentsComponent.matDrawer.toggle();
    }
}
