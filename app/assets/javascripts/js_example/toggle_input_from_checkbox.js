(function(window, _) {
  "use strict";

  function ToggleInputFromCheckbox(options) {
    this.input = options.input;
    this.checkbox = options.checkbox;
    this._init();
  }

  ToggleInputFromCheckbox.prototype = {
    bindEvents: function() {
      this.checkbox.on("change", _.bind(this._toggleInput, this));
    },

    unbindEvents: function() {
      this.checkbox.off("change");
    },

    _init: function() {
      this._toggleInput();
    },

    _toggleInput: function() {
      var disabled = this.checkbox.prop("checked");
      this.input.prop("disabled", disabled);
    }
  };

  window.NS = window.NS || {};
  window.NS.ToggleInputFromCheckbox = ToggleInputFromCheckbox;
})(window, _);
