"use client";

import { Button } from "@material-tailwind/react";
import type { ButtonStyleTypes } from "@material-tailwind/react";

import React, { FC } from "react";

type variant = "filled" | "outlined" | "gradient" | "text";
type color =
  | "white"
  | "black"
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";

interface DefaultButtonProps extends ButtonStyleTypes {
  variant: variant;
  label: string;
  icon?: any;
  style?: string;
  color: color;
  onClick: () => void;
  disabled?: boolean;
}

const DefaultButton: FC<DefaultButtonProps> = ({
  variant,
  label,
  icon,
  style,
  color,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={`items-center gap-3 py-3 font-grotesque capitalize flex justify-center ${
        style ? style : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      placeholder={label}
    >
      {label}
      {icon && icon}
    </Button>
  );
};

export default DefaultButton;
