import { atom } from "jotai";

// Use standard Tailwind color names
export type ThemeColor = "blue" | "purple" | "green" | "red" | "yellow" | "orange" | "pink" | "indigo" | "violet" | "cyan" | "teal" | "emerald" | "amber" | "lime" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone";
export type ThemeGray = "slate" | "gray" | "zinc" | "neutral" | "stone";
export type ThemeSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ThemeStyle = "minimal" | "standard" | "detailed";
export type ThemeRadius = "none" | "sm" | "md" | "lg" | "full";

// Semantic color keys for the theme system
export type SemanticColorKey = "primary" | "success" | "warning" | "danger" | "gray";

// Global theme settings
export const colorAtom = atom<ThemeColor>("blue");
export const grayAtom = atom<ThemeGray>("slate");
export const sizeAtom = atom<ThemeSize>("sm");
export const styleAtom = atom<ThemeStyle>("standard");
export const radiusAtom = atom<ThemeRadius>("md");

// Component inheritance atom
export const componentSizeAtom = atom<ThemeSize>("sm");
