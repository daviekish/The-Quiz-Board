$(document).ready(function() {
      var userFirstName = $("#first name").val();
      var userSecondName = $("#second namme").val();
      $("#start-btn").click(function() {
          (event) {
            event.preventDefault();
            if (userFirstName.length === 0 || userSecondName.lenght === 0) {
              $("#no-name").toggle();
            }
          });
      });
       $(document).ready(function() {
        $("p").click(function() {
          alert("This is a header.");
        });
