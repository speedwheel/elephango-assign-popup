$( document ).ready(function() {
  AssignPopupModule.init();
});

var AssignPopupModule = (function () {

  $popupHtml = `
    <div class="assign-popup">
      <div class="popup-head">Create Assignment</div>
      <div class="popup-body d-flex">
        <div class="popup-left col-4">
          <img src="https://dev.elephango.com/images/RCLG/local-state-government-12137-full.jpg" class="popup-thumb img-fluid">
          <div class="popup-list">
            <div class="poup-list__item">Grade Level: <strong>Intermediaate (3-5)</strong></div>
            <div class="poup-list__item">Category: <strong>World</strong></div>
            <div class="poup-list__item">Subject: <strong>History</strong></div>
          </div>
        </div>
        <div class="popup-right col-8">
          <form class="popup-form">
            <div class="form-group">
              <label for="lesson-name">Lesson Name</label>  
              <div class="icon-wrapper">
                <i class="icon-lock"></i>
                <input id="lesson-name" type="text" class="form-control" placeholder="Ancient Pyramids">
              </div>
              
            </div>
  
            <div class="form-bg mb-3">
              <div class="form-group">
                <label for="note-instructions">Add a note or instruction <span class="font-weight-normal">(optional)</span></label>
                <input maxlength="160" type="text" id="note-instructions" class="form-control" placeholder="Ancient Pyramids">
                <div class="note-instructions-counter"></div>
              </div>
  
              <div class="form-group">
                <label for="release-date">Release Date <span class="font-weight-normal">(optional)</span></label>
                <input type="date" id="release-date" class="form-control" placeholder="Ancient Pyramids">
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <a href="##" class="btn btn-warning mr-2">Select Students</a>
              <a href="##" class="btn btn-warning">Add to Group</a>
            </div>
          </form>
        </div>
      </div>
    </div>`;

  function assignPopup() {
    $.fancybox.open({
      src : $popupHtml,
      type : 'html',
      html : {
        css : {
            width : '600px'
        }
      }
    });
  }
  
  function countInput() {
    $counter =  $('.note-instructions-counter');
    $noteInstructionsInput = $('#note-instructions')
    let text_max = 160;
    let text_length = $noteInstructionsInput.val().length;
    $counter .html(text_length + '/160');
    $noteInstructionsInput.keyup(function() {
      text_length = $noteInstructionsInput.val().length;
      $counter .html(text_length + '/160');
    });
  }

  function init() {
    assignPopup();
    countInput();
  }

  return {
    init: init
  };

}());