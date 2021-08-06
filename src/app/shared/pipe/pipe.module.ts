import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePipe } from './rate.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RatePipe
    ],
    declarations: [
        RatePipe
    ]
})
export class PipeModule { }