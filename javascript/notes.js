// Re-compile the file automatically when it changes
// autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 1;

// Store Input
var values = [0, 0, 0];

// The `msg_` functions get called on input of the appropriate type regardless of inlet
// `inlet` property reports the inlet number
function msg_int(value) {
  values[inlet] = value;
  outlet(inlet, value);
}

function msg_float(value) {
  values[inlet] = value;
  outlet(inlet, value);
}

// Called when a bang is received
function bang() {
  // The string `"bang"` sends a bang out the outlet
  outlet(0, "bang");
}

// Called when a message starts with `list`
function list(a) {
  post("the list contains",arguments.length, "elements");
}

// Called if there's no function match
function anything(value) {
  outlet(0, value)
  for (let i = 0; i < arguments.length; i++) {
    outlet(i, arguments[i]);
  }
}
