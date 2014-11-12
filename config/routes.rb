Rails.application.routes.draw do
  mount JasmineRails::Engine => "/specs" if defined?(JasmineRails)
  root "js_example/js_example#index"
end
