function randomGen(array) {
  var num = Math.floor(Math.random() * array.length);
  return array[num];
}


var poeGen = document.getElementById('rollClass');

poeGen.addEventListener('click', function(e) {
  var selection = randomGen(poeClass);
  document.getElementById('className').innerHTML = selection.class;
  document.getElementById('classImage').innerHTML = "<img src='" + selection.images + "'>";
  document.getElementById('classAscendancy').innerHTML = selection.ascendancy;
});
