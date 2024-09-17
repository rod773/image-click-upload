const imgupload = document.getElementById("imgupload");

const openImgUpload = document.getElementById("OpenImgUpload");

openImgUpload.addEventListener("click", () => {
  imgupload.click();
});

imgupload.onchange = function (e) {
  var file = imgupload.files[0];
  var reader = new FileReader();
  reader.onload = function () {
    openImgUpload.src = reader.result;
  };
  reader.readAsDataURL(file);
};
