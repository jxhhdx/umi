import { defineConfig } from 'father';
import common from '../../.fatherrc.common.ts';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  ...common,
});
