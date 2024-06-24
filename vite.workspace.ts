import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/*',
  {
    extends: './vite.config.ts',
    test: {
      name: '@infinit/infinit-core',
      include: ['./packages/infinit-core/src/**/*.test.ts'],
      environment: 'node',
    },
  },
])
