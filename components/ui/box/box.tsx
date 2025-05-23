"use client";

import React from "react";
import classNames from "classnames";
import { BoxProps, boxPropDefs } from "./box.props";
import { extractProps } from "../../helpers/extract-props";
import { layoutPropDefs } from "../../props/layout.props";
import { marginPropDefs } from "../../props/margin.props";
import { flexChildPropDefs } from "../../props/flex-child.props";
import { gridChildPropDefs } from "../../props/grid-child.props";

/**
 * Box component
 *
 * A fundamental layout building block for creating UI components.
 * Directly handles layout props (padding, dimensions, position, overflow)
 * as well as margin props, flex-child and grid-child properties.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Box>
 *   Content goes here
 * </Box>
 *
 * // With styling options
 * <Box
 *   display="block"
 *   p={4}
 *   width="100%"
 *   position="relative"
 * >
 *   Content goes here
 * </Box>
 *
 * // With margin props
 * <Box
 *   mb={4}
 *   mt={2}
 * >
 *   Content with margin
 * </Box>
 *
 * // With responsive properties
 * <Box
 *   display={{ base: "block", md: "inline-block" }}
 *   p={{ base: 2, md: 4, lg: 6 }}
 *   width={{ base: "100%", md: "50%" }}
 * >
 *   Content goes here
 * </Box>
 * ```
 *
 * @param {BoxProps} props - Component props
 * @returns {React.ReactElement} Box component
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, forwardedRef) => {
  const { as = "div", asChild = false, className = "", style = {}, children, ...boxProps } = props;

  // Extract props using our new system
  const { classes, styles, rest } = extractProps(
    boxProps,
    boxPropDefs, // Box-specific props (display)
    layoutPropDefs, // Shared layout props (padding, dimensions, position)
    marginPropDefs, // Margin props (m, mx, my, mt, mr, mb, ml)
    flexChildPropDefs, // Flex child props (flexGrow, flexShrink)
    gridChildPropDefs // Grid child props (gridArea, gridColumn)
  );

  // Combine all classes and styles
  const combinedClassName = classNames("--k-box", ...classes, className);

  const combinedStyles = {
    ...styles,
    ...style,
  };

  // If asChild and children is a valid element, clone it instead
  if (asChild && React.isValidElement(children)) {
    // Type assertion to help TypeScript understand the structure
    const childProps = children.props as Record<string, any>;
    const childWithProps = React.cloneElement(children, {
      ...rest,
      // @ts-ignore - React's typings don't handle dynamic props well
      className: classNames(combinedClassName, childProps.className),
      // @ts-ignore - Same issue with style prop
      style: { ...combinedStyles, ...childProps.style },
      ref: forwardedRef,
    });
    return childWithProps;
  }

  // Create the element using the specified component type
  const ElementType = as as React.ElementType;

  return (
    <ElementType ref={forwardedRef} className={combinedClassName} style={combinedStyles} {...rest}>
      {children}
    </ElementType>
  );
});
