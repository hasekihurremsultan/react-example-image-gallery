import React from "react";

const iconSize = {
    width: 20,
    height: 20
};

const LeftArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...iconSize}
        fill="none"
        viewBox="0 0 15 15"
    >
        <path fill="currentColor" d="M9 4v7L4.5 7.5 9 4z"></path>
    </svg>
);

const RightArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        {...iconSize}
        fill="none"
        viewBox="0 0 15 15"
    >
        <path fill="currentColor" d="M6 11V4l4.5 3.5L6 11z"></path>
    </svg>
)

export { LeftArrow, RightArrow };