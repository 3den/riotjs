(function($, window) {
  "use strict";

  // Presenters
  var presenters = {};

  // sets a presenter
  $.present = function (name, callback) {
    presenters[name] = callback;
  };

  // uses presenter as a simple plugin
  $.fn.present = function (name, options) {
    presenters[name](this, options);
    return this;
  };
})($, window);
