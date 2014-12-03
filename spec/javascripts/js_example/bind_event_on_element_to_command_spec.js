//= require js_example/bind_event_on_element_to_command

describe("NS.BindEventOnElementToCommand", function() {
  it("executes the command when the change event occurs on the element", function() {
    var spy = jasmine.createSpyObj('spy', ['execute']);
    var $element = $("<input type='text'>");

    var binder = new NS.BindEventOnElementToCommand({
      eventName: "change",
      element: $element,
      command: spy
    });

    binder.execute();

    $element.trigger("change");

    expect(spy.execute).toHaveBeenCalled();
  });
});
