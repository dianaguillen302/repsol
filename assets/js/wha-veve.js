function openWhaMenu() {
    if (document.getElementById('wha-menu').classList.contains('active')) {
      $("#wha-menu").removeClass("active");
      $("#floating-wha").removeClass("active");
    } else {
      $("#wha-menu").addClass("active");
      $("#floating-wha").addClass("active");
    }
  }