let contentDiv = document.getElementById('content');
let promise = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('I finished!');
        reject('I finished wrongly!');
      }, 3000);
    });

promise
  .then((messageFromPromise) => {
    contentDiv.innerHTML = messageFromPromise;
    
    console.log(messageFromPromise);
  })
  .catch((messageFromPromise) => {
    contentDiv.innerHTML = messageFromPromise;
    
    console.log(messageFromPromise);
  });