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

// TODO:
// Iterate through each note with a `0` to `1` chance of applying the factors for each input type

// Order: The note gets swapped with a random later note
// Repeat: The note replaces the next note
function pitch(_) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  log(values);
  outlet(0, arr.join(" "));
}

// Velocity: `1` means +/- that total value, e.g.:
// velocity `18` with a factor of `1` means `0-36`
// velocity `127` with a factor of `1` means `0-127`
function velocity(_) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  log(values);
  outlet(0, arr.join(" "));
}

// Same as velocity, but we have fixed values:
// 7.5 15 30 60 120 240 480 960
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
