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
var input = [[], 0, 0, 0, 0, 0];

function getRandomBetween(min, max) {
  if (min == max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min) + min) + 1;
}

function msg_float(value) {
  input[inlet] = value;
}

function pitch(value) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  var repeat = input[INLET_REPEAT];
  var order = input[INLET_ORDER];
  for (var i = 0; i < values.length; i++) {
    if (Math.random() < repeat) {
      if (i + 1 < values.length) {
        values[i + 1] = values[i];
      }
    }
    if (Math.random() < order) {
      if (i + 1 < values.length) {
        const newIndex = getRandomBetween(i + 1, values.length - 1);
        const curr = values[newIndex];
        values[newIndex] = values[i];
        values[i] = curr;
      }
    }
  }
  arr = arr.slice(0, 2).concat(values);
  outlet(0, arr.join(" "));
}

function velocity(value) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  var factor = input[INLET_VELOCITY];
  for (var i = 0; i < values.length; i++) {
    var max = values[i];
    var range = Math.floor(max * factor);
    var min = max - range;
    values[i] = Math.round(getRandomBetween(min, max));
  }
  arr = arr.slice(0, 2).concat(values);
  outlet(0, arr.join(" "));
}

// Same as velocity, but we have fixed values:
// 7.5 15 30 60 120 240 480 960
function duration(value) {
  var arr = arrayfromargs(messagename, arguments);
  var values = arr.slice(2)
  // log(values);
  outlet(0, arr.join(" "));
}

// TODO: Remove debugging code
function log(obj) {
  // `post` logs to console
  post(JSON.stringify(obj));
}
