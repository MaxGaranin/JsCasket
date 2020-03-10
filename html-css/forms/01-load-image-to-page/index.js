function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById('blah').setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

document.getElementById('imgInp').addEventListener('change', function() {
  readURL(this);
});

document.getElementById('saveAsButton').addEventListener('click', function() {
  const url = document.getElementById('blah').src;
  const link = document.createElement('a');
  link.setAttribute("href", url);
  link.setAttribute("download", "");
  link.click();
});
