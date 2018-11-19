import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export class MatchValidators {

    public match$ = new BehaviorSubject(false);

    constructor(private controls: FormControl[], private config: any) {
        if (this.config.reactive) {
            this.controls.forEach((control) => {
                control.valueChanges.subscribe((response) => {
                    this.validate();
                });
            });
        }
    }

    public validate() {
        let valid = true;
        this.controls.forEach((control, index) => {
            if (control.value !== this.controls[index + 1].value) {
                valid = false;
                return false;
            }
        });
        this.match$.next(valid);
    }

}
