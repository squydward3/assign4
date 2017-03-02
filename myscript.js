$(document).ready(function() {

  var descriptions = ['profile icon/girl', 'profile icon/boy', 'project icon/physical', 'project icon/digital', 'gallery icon', 'contact icon/phone', 'contact icon/email']
  $('.icon').each(function(index) {
    $(this).hover(
      function() {
      $('p#description').text(descriptions[index]);
    },
      function() {
      $('p#description').text('the sketch icon: bio');
    }
    );
  });

});
