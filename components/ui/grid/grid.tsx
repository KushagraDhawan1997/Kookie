"use client";

import React from "react";
import classNames from "classnames";
import { Box } from "../box/box";
import { GridProps, gridPropDefs } from "./grid.props";
import { extractProps } from "../../helpers/extract-props";

/**
 * Grid component
 *
 * A component for creating grid layouts with responsive properties.
 * Handles grid-specific props (columns, rows, areas, etc.) while
 * inheriting layout props (padding, dimensions, etc.) and margin props from the Box component.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Grid columns={2} gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Grid>
 *
 * // With responsive properties
 * <Grid
 *   columns={{ base: 1, md: 2, lg: 3 }}
 *   gap={{ base: 2, md: 4 }}
 *   p={4}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // With margin props
 * <Grid
 *   mt={6}
 *   mb={8}
 *   columns={3}
 *   gap={4}
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // With grid template areas
 * <Grid
 *   areas={`
 *     "header header"
 *     "sidebar content"
 *     "footer footer"
 *   `}
 *   columns="1fr 3fr"
 *   rows="auto 1fr auto"
 *   gap={4}
 * >
 *   <Box style={{ gridArea: 'header' }}>Header</Box>
 *   <Box style={{ gridArea: 'sidebar' }}>Sidebar</Box>
 *   <Box style={{ gridArea: 'content' }}>Content</Box>
 *   <Box style={{ gridArea: 'footer' }}>Footer</Box>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, forwardedRef) => {
  const { as = "div", asChild = false, className = "", style = {}, children, ...gridProps } = props;

  // Extract grid-specific props only - layout props will be handled by Box
  const { classes, styles, rest } = extractProps(
    gridProps,
    gridPropDefs // Only processing Grid-specific props here
  );

  // Combine classes
  const combinedClassName = classNames("--k-grid", ...classes, className);

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
