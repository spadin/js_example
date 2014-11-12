//= require js_example/toggle_input_from_checkbox
//= require jasmine-jquery

describe("NS.ToggleInputFromCheckbox", function() {
  var input, checkbox, toggler;

  beforeEach(function() {
    input = $("<input type='text'>");
    checkbox = $("<input type='checkbox'>");
  });

  it("disables the input if the checkbox is checked upon instantiation", function() {
    checkbox.prop("checked", true);

    new NS.ToggleInputFromCheckbox({
      input: input,
      checkbox: checkbox
    });

    expect(input).toBeDisabled();
  });

  describe("after binding to events", function() {
    it("disables the input if the checkbox is checked", function() {
      toggler = new NS.ToggleInputFromCheckbox({
        input: input,
        checkbox: checkbox
      });

      toggler.bindEvents();

      checkbox.prop("checked", true);
      checkbox.trigger("change");

      expect(input).toBeDisabled();

      toggler.unbindEvents();
    });

    it("enables the input if the checkbox is unchecked", function() {
      toggler = new NS.ToggleInputFromCheckbox({
        input: input,
        checkbox: checkbox
      });

      toggler.bindEvents();

      checkbox.prop("checked", true);
      checkbox.trigger("change");

      checkbox.prop("checked", false);
      checkbox.trigger("change");

      expect(input).not.toBeDisabled();

      toggler.unbindEvents();
    });
  });
});
