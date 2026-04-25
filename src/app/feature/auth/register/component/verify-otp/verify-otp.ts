import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
interface OtpControl {
  value: string;
}

@Component({
  selector: 'app-verify-otp',
  imports: [RouterLink],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css',
})
export class VerifyOTP {
  // ── Config ─
  DEMO_CODE = '123456';
  readonly OTP_LENGTH = 6;
  readonly TOTAL_STEPS = 4;
  private _cdr = inject(ChangeDetectorRef);
  private timerSub: Subscription | null = null;
  // ── Stepper
  steps = Array.from({ length: this.TOTAL_STEPS }); // used for *ngFor
  currentStep = 1; // 0-indexed; step index 1 is the active "Verify OTP" step

  // ── OTP ────
  otpControls: OtpControl[] = Array.from({ length: this.OTP_LENGTH }, () => ({ value: '' }));
  focusedIndex = -1;
  shaking = false;
  errorMessage = '';
  verified = false;

  // ── Email
  email = input();

  countdown = 60;
  private timerRef: ReturnType<typeof setInterval> | null = null;

  // ── DOM refs
  @ViewChildren('otpRef') otpRefs!: QueryList<ElementRef<HTMLInputElement>>;

  private startCountdown(): void {
    this.countdown = 60;
    this.clearTimer();

    this.timerSub = interval(1000)
      .pipe(takeWhile(() => this.countdown > 0))
      .subscribe(() => {
        this.countdown--;
        this._cdr.markForCheck(); // ← tells OnPush to re-render
      });
  }

  private clearTimer(): void {
    this.timerSub?.unsubscribe();
    this.timerSub = null;
  }

  resendCode(): void {
    this.otpControls.forEach((c) => (c.value = ''));
    this.errorMessage = '';
    this.verified = false;
    this.startCountdown();
    setTimeout(() => this.focusAt(0), 0);
  }

  // ── OTP input handlers ────────────────────────────────────────────────────
  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const digit = input.value.replace(/\D/g, '').slice(-1); // keep last digit only

    this.otpControls[index].value = digit;
    input.value = digit; // sync DOM value

    if (digit && index < this.OTP_LENGTH - 1) {
      this.focusAt(index + 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    switch (event.key) {
      case 'Backspace':
        if (!this.otpControls[index].value && index > 0) {
          this.otpControls[index - 1].value = '';
          this.focusAt(index - 1);
        }
        break;
      case 'ArrowLeft':
        if (index > 0) this.focusAt(index - 1);
        break;
      case 'ArrowRight':
        if (index < this.OTP_LENGTH - 1) this.focusAt(index + 1);
        break;
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const digits = (event.clipboardData?.getData('text') ?? '')
      .replace(/\D/g, '')
      .slice(0, this.OTP_LENGTH)
      .split('');

    digits.forEach((ch, i) => {
      if (this.otpControls[i]) this.otpControls[i].value = ch;
    });

    const nextEmpty = this.otpControls.findIndex((c) => !c.value);
    this.focusAt(nextEmpty !== -1 ? nextEmpty : this.OTP_LENGTH - 1);
  }

  private focusAt(index: number): void {
    this.otpRefs?.toArray()[index]?.nativeElement.focus();
  }

  // ── Verify ───
  verifyCode(): void {
    const code = this.otpControls.map((c) => c.value).join('');

    if (code.length < this.OTP_LENGTH) {
      this.errorMessage = 'Please enter all 6 digits.';
      this.triggerShake();
      return;
    }

    if (code === this.DEMO_CODE) {
      this.errorMessage = '';
      this.verified = true;
      this.clearTimer();
      this.advanceStepper();
    } else {
      this.errorMessage = `Invalid code. Demo code is: ${this.DEMO_CODE}`;
      this.triggerShake();
    }
  }

  private triggerShake(): void {
    this.shaking = false;
    setTimeout(() => (this.shaking = true), 0); // micro-tick forces CSS re-trigger
  }

  private advanceStepper(): void {
    this.currentStep = Math.min(this.currentStep + 1, this.TOTAL_STEPS - 1);
  }

  // ── Edit email ────────────────────────────────────────────────────────────
  onEdit(): void {
    // Hook into your router or open a modal here
    console.log('Edit email clicked');
  }

  // ── Lifecycle
  ngOnInit(): void {
    this.startCountdown();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.focusAt(0), 0);
  }
  ngOnDestroy() {
    this.clearTimer();
  }
}
