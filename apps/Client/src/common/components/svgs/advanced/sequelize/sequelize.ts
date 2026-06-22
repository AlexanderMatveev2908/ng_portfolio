

import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-advanced-sequelize',
  templateUrl: `./sequelize.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgAdvSequelize {
    width: InputSignal<'auto' | string> = input('100%');
    height: InputSignal<'auto' | string> = input('100%');
    
}
