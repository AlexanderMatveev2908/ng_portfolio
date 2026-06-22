

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-postgres',
  templateUrl: `./postgres.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvPostgres {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
