import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FuseAlertComponent } from '@deltagis/components/alert';
import { FuseHighlightComponent } from '@deltagis/components/highlight';
import { GuidesComponent } from 'app/modules/admin/docs/guides/guides.component';

@Component({
    selector: 'component-structure',
    templateUrl: './component-structure.html',
    standalone: true,
    imports: [
        MatIconModule,
        MatButtonModule,
        FuseAlertComponent,
        FuseHighlightComponent,
        RouterLink,
    ],
})
export class ComponentStructureComponent {
    /**
     * Constructor
     */
    constructor(private _guidesComponent: GuidesComponent) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void {
        // Toggle the drawer
        this._guidesComponent.matDrawer.toggle();
    }
}
