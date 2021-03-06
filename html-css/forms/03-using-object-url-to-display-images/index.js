const fileSelect = document.getElementById('fileSelect'),
  fileElem = document.getElementById('fileElem'),
  fileList = document.getElementById('fileList');

fileSelect.addEventListener(
  'click',
  function(e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false
);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = '<p>No files selected!</p>';
  } else {
    fileList.innerHTML = '';
    const list = document.createElement('ul');
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement('li');
      list.appendChild(li);

      const img = document.createElement('img');
      img.src = URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);
      const info = document.createElement('span');
      info.innerHTML = files[i].name + ': ' + files[i].size + ' bytes';
      li.appendChild(info);
    }
  }
}
