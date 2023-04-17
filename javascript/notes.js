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
  var note = values[BASE_NOTE];
  outlet(0, note);
  for (let i = 0; i < stepCount - 1; i++) {
    var interval = i % intervals.length;
    note += interval;
    outlet(0, note);
  }
}
