import { Action } from './type'

export class Inj3kClient {
  private name: string
  private surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  run = async (action: Action) => {
    try {
      await action.validate(this.name, this.surname)
    } catch (error) {
      console.error(`Validation Error for ${action.name}`)
    }

    try {
      const id = await action.execute(this.name, this.surname, (step: number) => console.log(`Now at step ${step}`))
      console.log(`Execution success for id ${id}`)
    } catch (error) {
      console.error(`Execution Error for ${action.name}`)
    }
  }
}
