// Re-compile the file automatically when it changes
// autowatch = 1;

// Inlets & Outlets
inlets = 6;
outlets = 1;

// Store input
var values = [[], 0, 0, 0, 0, 0];

function msg_float(value) {
  values[inlet] = value;
}

function pitch(value) {
  var arr = arrayfromargs(messagename, arguments);
  outlet(0, arr.join(" "));
}

function velocity(value) {
  var arr = arrayfromargs(messagename, arguments);
  outlet(0, arr.join(" "));
}

function duration(value) {
  var arr = arrayfromargs(messagename, arguments);
  outlet(0, arr.join(" "));
}
