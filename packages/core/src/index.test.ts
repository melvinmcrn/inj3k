import { Inj3kClient } from '.'
import { describe } from 'vitest'
import { test } from 'vitest'
import { expect } from 'vitest'

describe('Inj3kClient', () => {
  test.concurrent('should be defined', () => {
    const client = new Inj3kClient('name', 'surname')
    expect(client).toBeDefined()
  })
})
