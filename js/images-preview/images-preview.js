const form = document.getElementById('form');
const fileInput = document.getElementById('input');
const imagesContainer = document.getElementById('images');

form.addEventListener('change', event => {
  event.preventDefault();
  
  imagesContainer.innerHTML = '';
  
  let fileList = [...fileInput.files];
  
  fileList.forEach((file) => {
    const fileReader = new FileReader();
  
    fileReader.readAsDataURL(file);
    
    fileReader.onload = () => {
      const imageElement = document.createElement('img');
      
      imageElement.width = 200;
      imageElement.src = fileReader.result;
  
      imagesContainer.append(imageElement);
    };
  });
});
