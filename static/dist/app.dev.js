"use strict";

function darkCheck() {
  var element = document.body;
  var state = localStorage.getItem("state");

  if (state == "dark") {
    element.classList.toggle("lightswitch");
  }

  (function () {
    var lightSwitch = document.getElementById('lightSwitch');

    if (!lightSwitch) {
      return;
    } //
    //@function darkmode
    //@summary: changes the theme to 'dark mode' and save settings to local stroage.
    //Basically, replaces/toggles every CSS class that has '-light' class with '-dark'


    function darkMode() {
      document.querySelectorAll('.bg-light').forEach(function (element) {
        element.className = element.className.replace(/-light/g, '-dark');
      });
      document.body.classList.add('bg-dark');

      if (document.body.classList.contains('text-dark')) {
        document.body.classList.replace('text-dark', 'text-light');
      } else {
        document.body.classList.add('text-light');
      } // Tables


      var tables = document.querySelectorAll('table');

      for (var i = 0; i < tables.length; i++) {
        // add table-dark class to each table
        tables[i].classList.add('table-dark');
      } // set light switch input to true


      if (!lightSwitch.checked) {
        lightSwitch.checked = true;
      }

      localStorage.setItem('lightSwitch', 'dark');
    } //
    //@function lightmode
    //@summary: changes the theme to 'light mode' and save settings to local stroage.


    function lightMode() {
      document.querySelectorAll('.bg-dark').forEach(function (element) {
        element.className = element.className.replace(/-dark/g, '-light');
      });
      document.body.classList.add('bg-light');

      if (document.body.classList.contains('text-light')) {
        document.body.classList.replace('text-light', 'text-dark');
      } else {
        document.body.classList.add('text-dark');
      } // Tables


      var tables = document.querySelectorAll('table');

      for (var i = 0; i < tables.length; i++) {
        if (tables[i].classList.contains('table-dark')) {
          tables[i].classList.remove('table-dark');
        }
      }

      if (lightSwitch.checked) {
        lightSwitch.checked = false;
      }

      localStorage.setItem('lightSwitch', 'light');
    } //
    //@function onToggleMode
    //@summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.


    function onToggleMode() {
      if (lightSwitch.checked) {
        darkMode();
      } else {
        lightMode();
      }
    } //@function getSystemDefaultTheme
    //@summary: get system default theme by media query


    function getSystemDefaultTheme() {
      var darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

      if (darkThemeMq.matches) {
        return 'dark';
      }

      return 'light';
    }

    function setup() {
      var settings = localStorage.getItem('lightSwitch');

      if (settings == null) {
        settings = getSystemDefaultTheme();
      }

      if (settings == 'dark') {
        lightSwitch.checked = true;
      }

      lightSwitch.addEventListener('change', onToggleMode);
      onToggleMode();
    }

    setup();
  })();
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });
  $('#toTopBtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});