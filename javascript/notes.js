// Re-compile the file automatically when it changes
// autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 1;

// Store Input
var values = [0, 0, 0];

function msg_int(value) {
  // `inlet` property reports the inlet number
  values[inlet] = value;
  bang();
}

function bang() {
  outlet(0, result);
}
