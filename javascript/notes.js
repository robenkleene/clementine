// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
const BASE_NOTE = 0;
const STEP_COUNT = 1;
const INTERVALS = 2;
inlets = 3;
outlets = 1;

// Store input
var values = [0, 0, [0]];

function msg_int(value) {
  values[inlet] = value;
  trigger_output();
}

function bang() {
  trigger_output();
}

function list(value) {
  var arr = arrayfromargs(value, arguments);
  values[inlet] = arr;
  trigger_output();
}

function trigger_output() {
  var intervals = values[INTERVALS];
  var stepCount = values[STEP_COUNT];
  var baseNote = values[BASE_NOTE];
  for (let i = 0; i < intervals.length; i++) {
    
  }
}
