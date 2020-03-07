function highOrderFunction(callbackFunction) {
  alert(callbackFunction()); // Final outcome
}

highOrderFunction((p) => {
  p = "I'm the variable.";
  
  return p + " And I'm the other text.";
});
