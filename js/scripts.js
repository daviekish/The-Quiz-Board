$(function() {
      $("#start-btn").click(function(event) {
            event.preventDefault();
            var userFirstName = $("#firstName").val();
            var userSecondName = $("#secondName").val();
            if (userFirstName.length === 0 || userSecondName.length === 0) {
              $("#no-name").show();
              $("#firstName").addClass("enter-name");
              $("#secondName").addClass("enter-name");
            } else {

            }

            function scoreCalculator(userValue) {
              var names = ["js", "year", "framework"];
              names.forEach(function(name) {
                var userValue = $("input:radio[name=" + name + "]:checked").val();
                if (userValue === "10") {
                  sum += 10;
                }
              });
            }
