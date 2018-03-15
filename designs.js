// lets DOM load before running any JavaScript/jQuery
$(document).ready(function() {
// Select color input
$(this).on("click", "td", function() {
	var colorPicker = $("#colorPicker").val();
	$(this).css('background-color', colorPicker);
});
// Select size input
$('#sizePicker').submit(function(event){
  event.preventDefault();
  // When size is submitted by user, call makeGrid();
  makeGrid();
});
// makeGrid function
function makeGrid() {
  var height, weight, pixelCanvas, grid;
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  pixelCanvas = $('#pixelCanvas');
  grid = "";

// Table clear
  $('#pixelCanvas').children().remove();

  // Adds rows and columns to make grid
  for (i = 0; i < height; i++) {
    var row = $("<tr>");
    pixelCanvas.append(row);
      for (j = 0; j < width; j++) {
        var col = $("<td>");
        row.append(col);
    }
  }
}
});
