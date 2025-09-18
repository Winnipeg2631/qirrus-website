
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const setCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    if (typeof document !== 'undefined') {
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
}

const getCookie = (name: string) => {
    if (typeof document === 'undefined') {
        return null;
    }
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

export function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // This check ensures the code only runs on the client-side
        if (typeof window !== "undefined") {
            if (!getCookie('cookie_consent')) {
                setShowConsent(true);
            }
        }
    }, []);

    const acceptCookie = () => {
        setShowConsent(false);
        setCookie('cookie_consent', 'true', 365);
    };

    if (!showConsent) {
        return null;
    }

    return (
        <div className="fixed inset-x-0 bottom-0 z-50">
            <div className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-center md:text-left">
                        By using the Qirrus website, you agree to the website{' '}
                        <Link href="/terms" className="underline hover:text-accent">terms of use</Link>, the{' '}
                        <Link href="/privacy" className="underline hover:text-accent">privacy statement</Link>, and the use of cookies.
                    </p>
                    <Button onClick={acceptCookie} variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black shrink-0">
                        ACCEPT
                    </Button>
                </div>
            </div>
        </div>
    );
}
