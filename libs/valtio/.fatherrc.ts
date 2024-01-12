import { defineConfig } from 'father';
import common from '../../.fatherrc.common.ts';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  cjs: undefined,
  esm: {
    output: 'dist',
  },
  ...common,
});
