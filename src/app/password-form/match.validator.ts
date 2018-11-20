import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export class MatchValidator {

    public match$ = new BehaviorSubject(false);

    constructor(private controls: FormControl[], private config: any) {
        if (this.config.reactive) {
            this.controls.forEach((control) => {
                control.valueChanges.subscribe(() => this.validate());
            });
        }
    }

    public validate(): boolean {
        if (!this.controls.length) {
            this.match$.next(false);
            return false;
        }

        let valid = true;
        this.controls.forEach((control, index) => {
            const next = this.controls[index + 1];
            if (next && control.value !== next.value) {
                valid = false;
                return false;
            }
        });
        this.match$.next(valid);
        return valid;
    }

}
