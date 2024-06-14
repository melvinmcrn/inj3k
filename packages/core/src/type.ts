export type ActionStepCallback = (step: number) => void

export interface Action {
  name: string

  /**
   * 
   * @param name 
   * @param surname 
   * @returns 
   */
  validate: (name: string, surname: string) => Promise<void>

  /**
   * 
   * @param name 
   * @param surname 
   * @param callback Action's step callback to keep track of current step 
   * @returns uuid of the execution
   */
  execute: (name: string, surname: string, callback: ActionStepCallback) => Promise<string>
}