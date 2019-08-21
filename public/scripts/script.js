
// Preview image that was uploaded 'views/murals/newMural.ejs'
function previewFile() {
  const imgTag = document.getElementById('imgTag');
  const inputFile = document.getElementById('inputFile').files[0];
  const fileReader = new FileReader();

  fileReader.addEventListener('load',() => {
    imgTag.classList.add('img-thumbnail', 'mb-3');
    imgTag.setAttribute('height', '200');
    imgTag.src = fileReader.result;
  }, false);

  if (inputFile) {
    fileReader.readAsDataURL(inputFile);
  }
}

// Google Maps API
var inputLocation = document.getElementById('searchTextField');
var options = {
  types: ['(cities)'],
  componentRestrictions: {country: 'us'}
};

autocomplete = new google.maps.places.Autocomplete(inputLocation, options);



