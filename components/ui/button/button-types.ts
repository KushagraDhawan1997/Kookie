import { SemanticColorKey, ThemeColor, ThemeRoundness } from "@/components/providers/theme-types";

export type ButtonSize = 1 | 2 | 3 | 4 | 5 | 6;
export type ButtonVariant = "modern" | "solid" | "tinted" | "outline" | "ghost" | "link";
export type ButtonColor = SemanticColorKey | ThemeColor;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  roundness?: ThemeRoundness;
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}
