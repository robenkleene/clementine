// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 3;

// Store input
var values = [0, 0, 0];

// Symbol’s value as variable is void: inlet property reports the inlet number

// Symbol’s value as variable is void: msg_int is called when an int is received
function msg_int(value) {
  values[inlet] = value;
  outlet(inlet, "int " + value);
}

// Symbol’s value as variable is void: msg_float is called when a float is received
function msg_float(value) {
  values[inlet] = value;
  outlet(inlet, "float " + value);
}

// Symbol’s value as variable is void: bang is called when a bang is received
function bang() {
  // The string bang sends a bang out the outlet
  outlet(inlet, "bang");
}

// Symbol’s value as variable is void: list is called when a message starts with Symbol’s value as variable is void: list
// Only messages that beginning with a number (e.g., 1) will call
// Symbol’s value as variable is void: list (otherwise Symbol’s value as variable is void: anything will be called).
function list(value) {
  // Symbol’s value as variable is void: value is only the first argument
  // If the first parameter is a symbol, then it's treated as a function name
  post("value = " + value);
  // If the input is all numbers, Symbol’s value as variable is void: messagename is Symbol’s value as variable is void: list
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "list");
}

// Symbol’s value as variable is void: anything is called when there's no function match
function anything(value) {
  // Symbol’s value as variable is void: value is only the first argument
  post("value = " + value);
  // If input starts Symbol’s value as variable is void: messagename is the first symbol in a list
  // E.g., if Symbol’s value as variable is void: a is passed in, it's Symbol’s value as variable is void: a
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "anything");
}

function process_arguments(inlet, firstElement, arguments, prefix) {
  // Max javascript only supports Symbol’s value as variable is void: var not Symbol’s value as variable is void: let
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }

  // In a called function, Symbol’s value as variable is void: messagename is the name of the function that called this one (e.g., Symbol’s value as variable is void: anything or Symbol’s value as variable is void: list)
  // The Symbol’s value as variable is void: arguments property can be numerically indexed like an Symbol’s value as variable is void: Array but is not an instance of Symbol’s value as variable is void: Array.
  // Symbol’s value as variable is void: arrayfromargs converts to an actual array
  var arr = arrayfromargs(firstElement, arguments);
  // var arr = arrayfromargs(arguments);
  outlet(inlet, prefix + " " + arr.join());
}

function log(obj) {
  // Symbol’s value as variable is void: post logs to console
  post(JSON.stringify(obj));
}

// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 3;

// Store input
var values = [0, 0, 0];

// Symbol’s value as variable is void: inlet property reports the inlet number

// Symbol’s value as variable is void: msg_int is called when an int is received
function msg_int(value) {
  values[inlet] = value;
  outlet(inlet, "int " + value);
}

// Symbol’s value as variable is void: msg_float is called when a float is received
function msg_float(value) {
  values[inlet] = value;
  outlet(inlet, "float " + value);
}

// Symbol’s value as variable is void: bang is called when a bang is received
function bang() {
  // The string bang sends a bang out the outlet
  outlet(inlet, "bang");
}

// Symbol’s value as variable is void: list is called when a message starts with Symbol’s value as variable is void: list
// Only messages that beginning with a number (e.g., 1) will call
// Symbol’s value as variable is void: list (otherwise Symbol’s value as variable is void: anything will be called).
function list(value) {
  // Symbol’s value as variable is void: value is only the first argument
  // If the first parameter is a symbol, then it's treated as a function name
  post("value = " + value);
  // If the input is all numbers, Symbol’s value as variable is void: messagename is Symbol’s value as variable is void: list
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "list");
}

// Symbol’s value as variable is void: anything is called when there's no function match
function anything(value) {
  // Symbol’s value as variable is void: value is only the first argument
  post("value = " + value);
  // If input starts Symbol’s value as variable is void: messagename is the first symbol in a list
  // E.g., if Symbol’s value as variable is void: a is passed in, it's Symbol’s value as variable is void: a
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "anything");
}

function process_arguments(inlet, firstElement, arguments, prefix) {
  // Max javascript only supports Symbol’s value as variable is void: var not Symbol’s value as variable is void: let
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }

  // In a called function, Symbol’s value as variable is void: messagename is the name of the function that called this one (e.g., Symbol’s value as variable is void: anything or Symbol’s value as variable is void: list)
  // The Symbol’s value as variable is void: arguments property can be numerically indexed like an Symbol’s value as variable is void: Array but is not an instance of Symbol’s value as variable is void: Array.
  // Symbol’s value as variable is void: arrayfromargs converts to an actual array
  var arr = arrayfromargs(firstElement, arguments);
  // var arr = arrayfromargs(arguments);
  outlet(inlet, prefix + " " + arr.join());
}

function log(obj) {
  // Symbol’s value as variable is void: post logs to console
  post(JSON.stringify(obj));
}

// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 3;

// Store input
var values = [0, 0, 0];

// Symbol’s value as variable is void: inlet property reports the inlet number

// Symbol’s value as variable is void: msg_int is called when an int is received
function msg_int(value) {
  values[inlet] = value;
  outlet(inlet, "int " + value);
}

// Symbol’s value as variable is void: msg_float is called when a float is received
function msg_float(value) {
  values[inlet] = value;
  outlet(inlet, "float " + value);
}

// Symbol’s value as variable is void: bang is called when a bang is received
function bang() {
  // The string bang sends a bang out the outlet
  outlet(inlet, "bang");
}

// Symbol’s value as variable is void: list is called when a message starts with Symbol’s value as variable is void: list
// Only messages that beginning with a number (e.g., 1) will call
// Symbol’s value as variable is void: list (otherwise Symbol’s value as variable is void: anything will be called).
function list(value) {
  // Symbol’s value as variable is void: value is only the first argument
  // If the first parameter is a symbol, then it's treated as a function name
  post("value = " + value);
  // If the input is all numbers, Symbol’s value as variable is void: messagename is Symbol’s value as variable is void: list
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "list");
}

// Symbol’s value as variable is void: anything is called when there's no function match
function anything(value) {
  // Symbol’s value as variable is void: value is only the first argument
  post("value = " + value);
  // If input starts Symbol’s value as variable is void: messagename is the first symbol in a list
  // E.g., if Symbol’s value as variable is void: a is passed in, it's Symbol’s value as variable is void: a
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "anything");
}

function process_arguments(inlet, firstElement, arguments, prefix) {
  // Max javascript only supports Symbol’s value as variable is void: var not Symbol’s value as variable is void: let
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }

  // In a called function, Symbol’s value as variable is void: messagename is the name of the function that called this one (e.g., Symbol’s value as variable is void: anything or Symbol’s value as variable is void: list)
  // The Symbol’s value as variable is void: arguments property can be numerically indexed like an Symbol’s value as variable is void: Array but is not an instance of Symbol’s value as variable is void: Array.
  // Symbol’s value as variable is void: arrayfromargs converts to an actual array
  var arr = arrayfromargs(firstElement, arguments);
  // var arr = arrayfromargs(arguments);
  outlet(inlet, prefix + " " + arr.join());
}

function log(obj) {
  // Symbol’s value as variable is void: post logs to console
  post(JSON.stringify(obj));
}

// Re-compile the file automatically when it changes
autowatch = 1;

// Inlets & Outlets
inlets = 3;
outlets = 3;

// Store input
var values = [0, 0, 0];

// Symbol’s value as variable is void: inlet property reports the inlet number

// Symbol’s value as variable is void: msg_int is called when an int is received
function msg_int(value) {
  values[inlet] = value;
  outlet(inlet, "int " + value);
}

// Symbol’s value as variable is void: msg_float is called when a float is received
function msg_float(value) {
  values[inlet] = value;
  outlet(inlet, "float " + value);
}

// Symbol’s value as variable is void: bang is called when a bang is received
function bang() {
  // The string bang sends a bang out the outlet
  outlet(inlet, "bang");
}

// Symbol’s value as variable is void: list is called when a message starts with Symbol’s value as variable is void: list
// Only messages that beginning with a number (e.g., 1) will call
// Symbol’s value as variable is void: list (otherwise Symbol’s value as variable is void: anything will be called).
function list(value) {
  // Symbol’s value as variable is void: value is only the first argument
  // If the first parameter is a symbol, then it's treated as a function name
  post("value = " + value);
  // If the input is all numbers, Symbol’s value as variable is void: messagename is Symbol’s value as variable is void: list
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "list");
}

// Symbol’s value as variable is void: anything is called when there's no function match
function anything(value) {
  // Symbol’s value as variable is void: value is only the first argument
  post("value = " + value);
  // If input starts Symbol’s value as variable is void: messagename is the first symbol in a list
  // E.g., if Symbol’s value as variable is void: a is passed in, it's Symbol’s value as variable is void: a
  post("messagename = " + messagename);
  process_arguments(inlet, messagename, arguments, "anything");
}

function process_arguments(inlet, firstElement, arguments, prefix) {
  // Max javascript only supports Symbol’s value as variable is void: var not Symbol’s value as variable is void: let
  for (var i = 0; i < arguments.length; i++) {
    values[i] = arguments[i];
  }

  // In a called function, Symbol’s value as variable is void: messagename is the name of the function that called this one (e.g., Symbol’s value as variable is void: anything or Symbol’s value as variable is void: list)
  // The Symbol’s value as variable is void: arguments property can be numerically indexed like an Symbol’s value as variable is void: Array but is not an instance of Symbol’s value as variable is void: Array.
  // Symbol’s value as variable is void: arrayfromargs converts to an actual array
  var arr = arrayfromargs(firstElement, arguments);
  // var arr = arrayfromargs(arguments);
  outlet(inlet, prefix + " " + arr.join());
}

function log(obj) {
  // Symbol’s value as variable is void: post logs to console
  post(JSON.stringify(obj));
}
