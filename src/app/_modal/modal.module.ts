import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import{QuillModule} from'ngx-quill';

@NgModule({
    imports: [CommonModule,
      QuillModule.forRoot(),
    ],
    declarations: [ModalComponent],
    exports: [ModalComponent]
})
export class ModalModule { }
