// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 3;
// 1: Base note
// 2: Step count
// 3: Scale intervals
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
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }

  var arr = arrayfromargs(value, arguments);
  values[inlet] = arr;
  trigger_output();
}

function trigger_output() {
}
