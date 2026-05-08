"use client";

import { forwardRef } from "react";

type SplitTextProps = {
    text: string;
    className?: string;
};

/**
 * Splits text into individual <span> elements for character-by-character animation.
 * Supports line breaks with "\n" in the text string.
 */
const SplitText = forwardRef<HTMLDivElement, SplitTextProps>(
    ({ text, className }, ref) => {
        const lines = text.split("\n");

        return (
            <div ref={ref}>
                {lines.map((line, lineIndex) => (
                    <div key={lineIndex} style={{ display: "inline-block" }}>
                        {line.split("").map((char, charIndex) => (
                            <span
                                key={`${lineIndex}-${charIndex}`}
                                className={className}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
);

SplitText.displayName = "SplitText";

export default SplitText;
