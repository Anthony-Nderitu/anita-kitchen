function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var popup = $("#email").val();
    alert(popup + " " + "has been successfully added to our email list. Thank you.");
  });
});
