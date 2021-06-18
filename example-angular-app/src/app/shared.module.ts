import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    imports: [
        Ng2FlatpickrModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        NgSelectModule
    ],
    providers: [
    ],
    declarations: [
    ],
    exports: [
        // Modules
        Ng2FlatpickrModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        NgSelectModule
    ],
})
export class SharedModule { }
