import { NgModule } from '@angular/core';
import { ApplyFilterPipe } from '../pipes/apply-filter.pipe';

@NgModule({
    declarations: [ApplyFilterPipe],
    imports: [],
    exports: [
        ApplyFilterPipe
    ]
})
export class SharedPipeModule {}