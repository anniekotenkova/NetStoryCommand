$(function() {
  $("#about-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#info').css('display', 'block');
  });

  $("#computer-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#computer').css('display', 'block');
  });

  $("#folder-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#folder').css('display', 'block');
  });

  $("#trash-icon").click(function() {
    $(this).css('background-color', 'rgba(255, 255, 255, 0.4)');
    $('#trash').css('display', 'block');
  });

  $(".cbinfo").click(function() {
    $('#about-icon').css('background-color', 'transparent');
  });

  $(".cbcomputer").click(function() {
    $('#computer-icon').css('background-color', 'transparent');
  });

  $(".cbfolder").click(function() {
    $('#folder-icon').css('background-color', 'transparent');
  });

  $(".cbtrash").click(function() {
    $('#trash-icon').css('background-color', 'transparent');
  });
});



//
// Namespace - Module Pattern.
//
var JQD = (function($, window, document, undefined) {
  // Expose innards of JQD.
  return {
    go: function() {
      for (var i in JQD.init) {
        JQD.init[i]();
      }
    },
    init: {
      clock: function() {
        var clock = $('#clock');

        if (!clock.length) {
          return;
        }

        // Date variables.
        var date_obj = new Date();
        var hour = date_obj.getHours();
        var minute = date_obj.getMinutes();
        var day = date_obj.getDate();
        var year = date_obj.getFullYear();
        var suffix = 'AM';

        // Array for weekday.
        var weekday = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ];

        // Array for month.
        var month = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];

        // Assign weekday, month, date, year.
        weekday = weekday[date_obj.getDay()];
        month = month[date_obj.getMonth()];

        // AM or PM?
        if (hour >= 12) {
          suffix = 'PM';
        }

        // Convert to 12-hour.
        if (hour > 12) {
          hour = hour - 12;
        }
        else if (hour === 0) {
          // Display 12:XX instead of 0:XX.
          hour = 12;
        }

        // Leading zero, if needed.
        if (minute < 10) {
          minute = '0' + minute;
        }

        // Build two HTML strings.
        var clock_time = weekday + ' ' + hour + ':' + minute + ' ' + suffix;
        var clock_date = month + ' ' + day + ', ' + year;

        // Shove in the HTML.
        clock.html(clock_time).attr('title', clock_date);

        // Update every 60 seconds.
        setTimeout(JQD.init.clock, 60000);
      },
    },
  };
// Pass in jQuery.
})(jQuery, this, this.document);

//
// Kick things off.
//
jQuery(document).ready(function() {
  JQD.go();
});
