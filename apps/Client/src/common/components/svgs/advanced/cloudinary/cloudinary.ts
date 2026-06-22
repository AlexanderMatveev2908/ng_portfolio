

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-cloudinary',
  templateUrl: `./cloudinary.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvCloudinary {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
