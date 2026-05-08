"use client";

import { useState, useCallback, type MouseEvent } from "react";

type MousePosition = {
    x: number;
    y: number;
};

/**
 * Custom hook for tracking mouse position within an element.
 * Also tracks whether the cursor is inside the element boundary.
 */
export function useMousePosition() {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLDivElement>): void => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsHovered(true);
        },
        []
    );

    const resetHover = useCallback(() => {
        setIsHovered(false);
    }, []);

    return { mousePos, isHovered, handleMouseMove, resetHover };
}
