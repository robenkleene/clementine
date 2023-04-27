// Re-compile the file automatically when it changes
// This is probably pointless because this script stores state in `var values`
// autowatch = 1;

// Inlets & Outlets
INTERVALS = 0;
STEP_COUNT = 1;
BASE_NOTE = 2;
inlets = 3;
outlets = 1;

// Store input
var values = [0, 0, []];

function msg_int(value) {
  values[inlet] = value;
  trigger_output();
}

function bang() {
  trigger_output();
}

function list(value) {
  var arr = arrayfromargs(value.toString(), arguments);
  values[inlet] = arr.map(Number);

  if (inlet == 0) {
    trigger_output();
  }
}

function trigger_output() {
  var intervals = values[INTERVALS];
  var stepCount = values[STEP_COUNT];
  var note = values[BASE_NOTE];
  post("intervals = " + intervals + "\n");
  post("stepCount = " + stepCount + "\n");
  post("note = " + note + "\n");
  if (stepCount == 0) {
    return;
  }
  outlet(0, note);
  for (var i = 0; i < stepCount - 1; i++) {
    if (intervals.length > 0) {
      var index = i % intervals.length;
      note += intervals[index];
      outlet(0, note);
    }
  }
}

function log(obj) {
  post(JSON.stringify(obj));
}
