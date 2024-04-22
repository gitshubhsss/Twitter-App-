function updateTextareaHeight() {
    var textarea = document.getElementById('autoHeightTextarea');
    textarea.style.height = 'auto'; // Reset height to auto to calculate the new height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
  }
  
  // Call the function initially and whenever the content changes
  updateTextareaHeight();

  function autoResize(textarea) {
    textarea.style.height = 'auto'; // Reset the height to auto to calculate the new height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
  }
