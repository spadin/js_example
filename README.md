## Example JS Repo

Example of one way to test JS by inject DOM elements.

### Interesting files:

* `app/views/js_example/js_example/index.html.erb`

* `app/assets/javascripts/js_example/sync_input_fields.js`
* `spec/javascripts/js_example/sync_input_fields_spec.js`

* `app/assets/javascripts/js_example/toggle_input_from_checkbox.js`
* `spec/javascripts/js_example/toggle_input_from_checkbox_spec.js`

### Running the specs

On the command line:

      $ RAILS_ENV=test bundle exec rake spec:javascript

In the browser:

      $ rails server

Then visit: [http://localhost:3000/specs](http://localhost:3000/specs)

**For educational purposes only**: `secrets.yml` and other stuff that shouldn't
be in version control are in this repo to help you get started quickly.
