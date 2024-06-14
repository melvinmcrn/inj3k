import { Action, ActionStepCallback } from 'packages/core/src/type'

class Multiply implements Action {
  name = 'Multiply'

  validate = (name: string, surname: string) => {
    return new Promise<void>((resolve) => {
      console.log('Validating...', name, surname)
      setTimeout(() => {
        console.log('Validation done', name, surname)
        resolve()
      }, 5_000)
    })
  }

  execute = (name: string, surname: string, callback: ActionStepCallback) => {
    return new Promise<string>((resolve) => {
      callback(0)
      console.log('Executing...', name, surname)
      callback(1)
      setTimeout(() => {
        callback(2)
        console.log('Execution done', name, surname)
        callback(3)
        resolve(`${name}-${surname}`)
      }, 5_000)
    })
  }
}

export { Multiply }
