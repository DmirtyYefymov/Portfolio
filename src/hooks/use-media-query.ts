"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that tracks whether a CSS media query matches.
 * SSR-safe: returns `false` on the server.
 *
 * @param query - CSS media query string, e.g. "(min-width: 768px)"
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [query]);

    return matches;
}
