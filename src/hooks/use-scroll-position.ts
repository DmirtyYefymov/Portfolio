"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that tracks the vertical scroll position.
 * SSR-safe: returns 0 on the server.
 *
 * @param threshold - optional scroll offset to return a boolean flag
 * @returns object with scrollY value and isScrolled boolean
 */
export function useScrollPosition(threshold = 50) {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrollY(offset);
            setIsScrolled(offset > threshold);
        };

        // Set initial value
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return { scrollY, isScrolled };
}
