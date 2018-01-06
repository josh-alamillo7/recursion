// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName(className) {
  var objRef = document;
  var output = [];

  function searchForClass(objRef) {
    if (!objRef.childNodes) {
      return;
    }
    else {      
      for (var i = 0; i < objRef.childNodes.length; i++) {
        if (objRef.childNodes[i].classList) {
          if (objRef.childNodes[i].classList.contains(className)) {
            output.push(objRef.childNodes[i]);
          }
        }
      searchForClass(objRef.childNodes[i]);      
    }
  }  
}
searchForClass(objRef);
return output;
}
