"use client";

import React from "react";
import { useTheme } from "../providers/theme-provider";
import { ThemeColor, ThemeGray, ThemeSize, ThemeRoundness, THEME_COLORS, THEME_GRAYS, ERROR_COLORS, SUCCESS_COLORS, WARNING_COLORS, THEME_SIZES, THEME_ROUNDNESS_OPTIONS } from "../providers/theme-types";
import { Box } from "../ui/box";
import { Flex } from "../ui/flex";
import { Text, Heading } from "../ui/text";
import { Button } from "../ui/button";

export interface ThemePlaygroundProps {
  className?: string;
}

export function ThemePlayground({ className }: ThemePlaygroundProps) {
  const { color, setColor, gray, setGray, error, setError, success, setSuccess, warning, setWarning, size, setSize, roundness, setRoundness } = useTheme();

  const handlePrimaryColorChange = (newColor: ThemeColor) => {
    setColor(newColor);
    document.documentElement.setAttribute("data-primary-color", newColor);
  };

  const handleGrayChange = (newGray: ThemeGray) => {
    setGray(newGray);
    document.documentElement.setAttribute("data-gray-color", newGray);
  };

  const handleErrorColorChange = (newColor: ThemeColor) => {
    setError(newColor);
    document.documentElement.setAttribute("data-error-color", newColor);
  };

  const handleSuccessColorChange = (newColor: ThemeColor) => {
    setSuccess(newColor);
    document.documentElement.setAttribute("data-success-color", newColor);
  };

  const handleWarningColorChange = (newColor: ThemeColor) => {
    setWarning(newColor);
    document.documentElement.setAttribute("data-warning-color", newColor);
  };

  const handleSizeChange = (newSize: ThemeSize) => {
    setSize(newSize);
    document.documentElement.setAttribute("data-size", newSize.toString());
  };

  const handleRoundnessChange = (newRoundness: ThemeRoundness) => {
    setRoundness(newRoundness);
    document.documentElement.setAttribute("data-roundness", newRoundness);
  };

  return (
    <Box
      className={className}
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 1000,
        width: "320px",
        maxHeight: "90vh",
        overflow: "auto",
        backgroundColor: "var(--gray-2)",
        border: "1px solid var(--gray-6)",
        borderRadius: "8px",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <Box p="4">
        <Flex direction="column" gap="4">
          <Heading size={4} style={{ marginBottom: "8px" }}>
            Theme
          </Heading>

          {/* Primary Color */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Accent color
            </Text>
            <Flex wrap="wrap" gap="1">
              {THEME_COLORS.map((colorOption) => (
                <Button key={colorOption} size={3} variant={color === colorOption ? "solid" : "ghost"} onClick={() => handlePrimaryColorChange(colorOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {colorOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Gray Color */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Gray color
            </Text>
            <Flex wrap="wrap" gap="1">
              {THEME_GRAYS.map((grayOption) => (
                <Button key={grayOption} size={3} variant={gray === grayOption ? "solid" : "ghost"} onClick={() => handleGrayChange(grayOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {grayOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Radius */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Radius
            </Text>
            <Flex wrap="wrap" gap="1">
              {THEME_ROUNDNESS_OPTIONS.map((roundnessOption) => (
                <Button key={roundnessOption} size={3} variant={roundness === roundnessOption ? "solid" : "ghost"} onClick={() => handleRoundnessChange(roundnessOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {roundnessOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Size */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Size ({size})
            </Text>
            <Flex wrap="wrap" gap="1">
              {THEME_SIZES.map((sizeOption) => (
                <Button key={sizeOption} size={3} variant={size === sizeOption ? "solid" : "ghost"} onClick={() => handleSizeChange(sizeOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {sizeOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Error Color */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Error ({error})
            </Text>
            <Flex wrap="wrap" gap="1">
              {ERROR_COLORS.map((colorOption) => (
                <Button key={`error-${colorOption}`} size={3} variant={error === colorOption ? "solid" : "ghost"} onClick={() => handleErrorColorChange(colorOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {colorOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Success Color */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Success ({success})
            </Text>
            <Flex wrap="wrap" gap="1">
              {SUCCESS_COLORS.map((colorOption) => (
                <Button key={`success-${colorOption}`} size={3} variant={success === colorOption ? "solid" : "ghost"} onClick={() => handleSuccessColorChange(colorOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {colorOption}
                </Button>
              ))}
            </Flex>
          </Box>

          {/* Warning Color */}
          <Box>
            <Text size={2} weight="medium" style={{ color: "var(--gray-11)", marginBottom: "8px", display: "block" }}>
              Warning ({warning})
            </Text>
            <Flex wrap="wrap" gap="1">
              {WARNING_COLORS.map((colorOption) => (
                <Button key={`warning-${colorOption}`} size={3} variant={warning === colorOption ? "solid" : "ghost"} onClick={() => handleWarningColorChange(colorOption)} style={{ fontSize: "11px", minWidth: "auto", padding: "2px 6px" }}>
                  {colorOption}
                </Button>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
