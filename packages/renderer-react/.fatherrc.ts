import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  sourcemap: true,
  cjs: undefined,
  esm: {
    output: 'dist',
  },
  sourcemap: true,
});
