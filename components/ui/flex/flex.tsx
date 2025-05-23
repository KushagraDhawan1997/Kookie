"use client";

import React from "react";
import classNames from "classnames";
import { Box } from "../box/box";
import { FlexProps, flexPropDefs } from "./flex.props";
import { extractProps } from "../../helpers/extract-props";

/**
 * Flex component
 *
 * A versatile component for creating flex layouts with responsive properties.
 * Handles flex-specific props (direction, align, justify, etc.) while
 * inheriting layout props (padding, dimensions, etc.) and margin props from the Box component.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Flex>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * // With styling options
 * <Flex
 *   direction="column"
 *   align="center"
 *   justify="between"
 *   gap={4}
 *   p={6}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * // With margin props
 * <Flex
 *   mt={4}
 *   mb={8}
 *   gap={4}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * // With responsive properties
 * <Flex
 *   direction={{ base: "column", md: "row" }}
 *   gap={{ base: 2, md: 4, lg: 8 }}
 *   p={{ base: 4, lg: 8 }}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 *
 * @param {FlexProps} props - Component props
 * @returns {React.ReactElement} Flex component
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, forwardedRef) => {
  const { as = "div", asChild = false, className = "", style = {}, children, ...flexProps } = props;

  // Extract flex-specific props only - layout props will be handled by Box
  const { classes, styles, rest } = extractProps(
    flexProps,
    flexPropDefs // Only processing Flex-specific props here
  );

  // Combine classes
  const combinedClassName = classNames("--k-flex", ...classes, className);

  // Combine styles
  const combinedStyles = {
    ...styles,
    ...style,
  };

  // Forward remaining props (including all layout props) to Box
  // Box will process layout props like p, width, position, etc.
  return (
    <Box as={as} asChild={asChild} className={combinedClassName} style={combinedStyles} ref={forwardedRef} {...rest}>
      {children}
    </Box>
  );
});
