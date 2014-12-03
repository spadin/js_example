//= require js_example/event_mapper

describe("NS.EventMapper", function() {
  it("executes the command when the click event occurs on the element", function() {
    var spy = jasmine.createSpyObj('spy', ['execute']);
    var $element = $("<div/>");

    var mapper = new NS.EventMapper();
    mapper.add("click", $element, spy);

    $element.trigger("click");

    expect(spy.execute).toHaveBeenCalled();
  });

  it("executes the command when the click event occurs on the two elements", function() {
    var spy = jasmine.createSpyObj('spy', ['execute']);
    var $element1 = $("<div/>");
    var $element2 = $("<div/>");

    var mapper = new NS.EventMapper();
    mapper.addMany([
      ["click", $element1, spy],
      ["click", $element2, spy]
    ]);

    $element1.trigger("click");
    $element2.trigger("click");

    expect(spy.execute).toHaveBeenCalled();
  });
});

