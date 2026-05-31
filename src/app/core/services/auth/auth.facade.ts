import {inject, Injectable, signal} from "@angular/core";

import {Observable, tap, catchError, of, finalize} from "rxjs";
import { AuthService, ConfirmOTPReq, ConfirmOTPRes, ForgetPasswordReq, ForgetPasswordRes, RegisterEmailReq, RegisterEmailRes, RegisterFormReq, RegisterFormRes, ResetPasswordReq, ResetPasswordRes } from "../../../../../dist/auth";

@Injectable({
    providedIn: "root",
})
export class AuthFacade {
    private readonly AuthService = inject(AuthService);

    // Signals for state tracking
    readonly loading = signal<boolean>(false);
    readonly error = signal<string | null>(null);
    readonly userEmail = signal<string | null>(null); // To store email across signup steps
    readonly registrationData = signal<RegisterFormReq | null>(null); // To store info across signup steps

    /**
     * Set temporary registration data
     */
    setRegistrationData(data: RegisterFormReq | null): void {
        this.registrationData.set(data);
    }

    /**
     * Send email verification code
     */
    sendEmailVerification(payload: RegisterEmailReq): Observable<RegisterEmailRes> {
        this.setLoading(true);
        return this.AuthService.verifyEmail(payload).pipe(
            tap((res) => {
                if (res) {
                    this.userEmail.set(payload.email);
                    this.error.set(null);
                }
            }),
            catchError(this.handleError.bind(this)),
            finalize(() => this.setLoading(false))
        );
    }

    /**
     * Confirm email verification code
     */
    confirmEmailVerification(payload: ConfirmOTPReq): Observable<ConfirmOTPRes> {
        this.setLoading(true);
        return this.AuthService.confirmEmail(payload).pipe(
            tap((res) => {
                if (res.status) {
                    this.error.set(null);
                }
            }),
            catchError(this.handleError.bind(this)),
            finalize(() => this.setLoading(false))
        );
    }

    /**
     * Register a new user
     */
    register(payload: RegisterFormReq): Observable<RegisterFormRes> {
        this.setLoading(true);
        return this.AuthService.register(payload).pipe(
            tap((res) => {
                if (res) {
                    this.error.set(null);
                }
            }),
            catchError(this.handleError.bind(this)),
            finalize(() => this.setLoading(false))
        );
    }

    /**
     * Get dynamic redirect URL for password reset
     */
    getRedirectUrl(): string {
        return `${window.location.origin}/auth/create-new-password`;
    }

    /**
     * Forgot password request
     */
    forgotPassword(payload: ForgetPasswordReq & {redirectUrl?: string}): Observable<ForgetPasswordRes> {
        this.setLoading(true);
        return this.AuthService.forgetPassword(payload).pipe(
            tap((res) => {
                if (res) {
                    this.userEmail.set(payload.email);
                    this.error.set(null);
                }
            }),
            catchError(this.handleError.bind(this)),
            finalize(() => this.setLoading(false))
        );
    }

    /**
     * Reset password with token
     */
    resetPassword(payload: ResetPasswordReq): Observable<ResetPasswordRes> {
        this.setLoading(true);
        return this.AuthService.resetPassword(payload).pipe(
            tap((res) => {
                if (res) {
                    this.error.set(null);
                }
            }),
            catchError(this.handleError.bind(this)),
            finalize(() => this.setLoading(false))
        );
    }

    private setLoading(value: boolean): void {
        this.loading.set(value);
    }

    private handleError(error: unknown): Observable<never> {
        const err = error as { error?: { message?: string }, message?: string };
        const message = err.error?.message || err.message || "An unexpected error occurred";
        this.error.set(message);
        throw error;
    }
}
