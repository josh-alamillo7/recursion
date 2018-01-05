// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
  }
  else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
  	return "[" + obj.map(element => stringifyJSON(element)) + "]";
  }
  else if (typeof obj === 'object' && obj !== null) {
    var stringifiedObjects = "";
  
    for (var key in obj) {
      var temp_output = "";
      temp_output += stringifyJSON(key);
      temp_output += ":";
      temp_output += stringifyJSON(obj[key]) + ",";
      console.log("temp_output", temp_output)
      if (stringifyJSON(key) === undefined || stringifyJSON(obj[key]) === undefined) {
        temp_output = "";
      }
      stringifiedObjects += temp_output;
      console.log(stringifiedObjects)
    }
    
    return "{" + stringifiedObjects.slice(0, stringifiedObjects.length - 1) + "}";
    }
  return 'null';
  };