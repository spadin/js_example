//= require js_example/bind_event_on_element_to_command

(function(window, _) {
  "use strict";

  function EventMapper() {}

  EventMapper.prototype = {
    addMany: function(tuples) {
      _(tuples).each(function(args) {
        this.add(args[0], args[1], args[2]);
      }, this);
    },

    add: function(eventName, element, command) {
      this._binder(eventName, element, command).execute();
    },

    _binder: function(eventName, element, command) {
      return new NS.BindEventOnElementToCommand({
        element: element,
        eventName: eventName,
        command: command
      });
    }
  };

  window.NS = window.NS || {};
  window.NS.EventMapper = EventMapper;
})(window, _);
