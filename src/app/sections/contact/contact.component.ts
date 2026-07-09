import { NgFor, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { fadeSlideUp } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { motionParams } from '../../core/utils/reduced-motion';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, SectionHeaderComponent, AppearOnScrollDirective],
  animations: [fadeSlideUp],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly formVisible = signal(false);
  readonly submitted = signal(false);
  readonly params = motionParams('600ms');
  readonly currentYear = new Date().getFullYear();

  readonly vehicleClasses = [
    'Mercedes S-Class Coupé',
    'Mercedes C-Class',
    'Mercedes E-Class',
    'Mercedes V-Class',
    'Toyota Corolla Axio',
    'Toyota HiAce',
  ];

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{7,}$/)]],
    pickup: ['', Validators.required],
    dropoff: ['', Validators.required],
    datetime: ['', Validators.required],
    vehicleClass: ['', Validators.required],
    message: [''],
  });

  constructor(private readonly fb: FormBuilder) {}

  field(name: keyof typeof this.form.controls) {
    return this.form.controls[name];
  }

  isInvalid(name: keyof typeof this.form.controls): boolean {
    const control = this.field(name);
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend wired up yet — simulate a successful enquiry submission.
    this.submitted.set(true);
    this.form.reset();
  }

  bookAnother(): void {
    this.submitted.set(false);
  }
}
