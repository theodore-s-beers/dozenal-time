// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/*.min.js"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
