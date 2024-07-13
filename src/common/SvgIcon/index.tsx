// SvgIcon.tsx

import React from 'react';
import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width = "100%", height = "auto" }: SvgIconProps) => (
  src ? <img src={`/img/svg/${src}`} alt={src || 'Default'} width={width} height={height} /> : null
);
