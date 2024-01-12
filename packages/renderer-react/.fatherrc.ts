import { defineConfig } from 'father';
import common from '../../.fatherrc.common.ts';

export default defineConfig({
  ...common,
  extends: '../../.fatherrc.base.ts',
  cjs: undefined,
  esm: {
    output: 'dist',
  },
});
