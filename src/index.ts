// Dependencies
import { actions } from './actions';

// Types
import {
  Instruction,
} from './global';

async function processInstruction ({action, data}:Instruction) {
  if (!actions[action]) throw new Error('No action found for ' + action);
  const actionFn:Function = actions[action];
  await actionFn(data);  
}

/*
  This runs the set of asynchronous actions

  TODO - if an instruction fails, do not run the rest of the list of instructions,
  find a way to hand this gracefully
*/
export async function runInstructions(instructions:Array<Instruction>) {
  for await (const instruction of instructions) {
    console.log('Running instruction: ' + instruction.action);
    await processInstruction(instruction);
  }
}