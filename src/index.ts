// Dependencies
import { actions } from './actions';

// Types
import {
  Instruction,
} from './global';

const log = false;

async function processInstruction ({action, data}:Instruction) {
  if (!actions[action]) throw new Error('No action found for ' + action);
  const actionFn:Function = actions[action];
  await actionFn(data);  
}

async function handleFailedInstruction (instruction:Instruction, error:Error|unknown) {
  if (log) {
    console.log('Failed instruction', instruction);
    console.log('With data payload:');
    console.log(JSON.stringify(instruction.data));
    console.log('Error reported', error)
    console.log('Stopping execution at this point');  
  }
}

/*
  This runs the set of asynchronous actions
*/
export async function runInstructions(instructions:Array<Instruction>) {
  for await (const instruction of instructions) {
    if (log) console.log('Running instruction: ' + instruction.action);
    try {
      await processInstruction(instruction);
    } catch (err) {
      await handleFailedInstruction(instruction, err);
      break;
    }
  }
}