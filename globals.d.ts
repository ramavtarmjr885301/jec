// This file tells TypeScript how to handle CSS imports
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

// For side-effect imports
declare module './globals.css' {
    const content: void;
    export default content;
}