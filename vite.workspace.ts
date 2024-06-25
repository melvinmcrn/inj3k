import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/*',
  {
    extends: './vite.config.ts',
    test: {
      name: '@inj3k/core',
      include: ['./packages/core/src/**/*.test.ts'],
      environment: 'node',
    },
  },
])
