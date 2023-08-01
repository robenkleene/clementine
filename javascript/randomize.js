// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 6;
outlets = 1;
INLET_ORDER = 1;
INLET_REPEAT = 2;
INLET_RESTS = 3;
INLET_VELOCITY = 4;
INLET_DURATION = 5;

// Store input
var values = [[], 0, 0, 0, 0, 0];

function msg_float(value) {
  values[inlet] = value;
}

function pitch(_) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  log(values);
  outlet(0, arr.join(" "));
}

function velocity(_) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  log(values);
  outlet(0, arr.join(" "));
}

function duration(_) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  log(values);
  outlet(0, arr.join(" "));
}

// TODO: Remove debugging code
function log(obj) {
  // `post` logs to console
  post(JSON.stringify(obj));
}
