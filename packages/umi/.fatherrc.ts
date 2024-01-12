import { defineConfig } from 'father';
import common from '../../.fatherrc.common.ts';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  cjs: {
    ignores: ['src/client/**'],
  },
  esm: {
    input: 'src/client',
    output: 'client/client',
  },
  ...common,
});
