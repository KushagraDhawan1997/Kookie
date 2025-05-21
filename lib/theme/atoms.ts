import { atom } from "jotai";

// Use standard Tailwind color names
export type ThemeColor = "blue" | "purple" | "green" | "red" | "yellow" | "orange" | "pink" | "indigo" | "violet" | "cyan" | "teal" | "emerald" | "amber" | "lime" | "rose";
export type ThemeGray = "slate" | "gray" | "zinc" | "neutral" | "stone";
export type ThemeSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ThemeStyle = "minimal" | "modern" | "classic";

// Global theme settings
export const colorAtom = atom<ThemeColor>("blue");
export const grayAtom = atom<ThemeGray>("slate");
export const sizeAtom = atom<ThemeSize>("sm");
export const styleAtom = atom<ThemeStyle>("modern");
export const radiusAtom = atom<"none" | "sm" | "md" | "lg" | "full">("md");

// Component inheritance atom
export const componentSizeAtom = atom<ThemeSize>("sm");
