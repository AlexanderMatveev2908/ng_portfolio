

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-stripe',
  templateUrl: `./stripe.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvStripe {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
