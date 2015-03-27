
function sidebarToggle() {
  var content = document.getElementById('content');
  content.insertAdjacentHTML('afterbegin',
                             "<input class=\"sidebar-checkbox\" id=\"sidebar-checkbox\" type=\"checkbox\">" +
                             "<label for=\"sidebar-checkbox\" class=\"sidebar-toggle\"></label>")
}

document.addEventListener("DOMContentLoaded", function() {
  sidebarToggle();
});
