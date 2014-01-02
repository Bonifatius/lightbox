set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :directory_indexes

configure :development do
  activate :livereload
end

configure :build do
  activate :cache_buster
  activate :minify_javascript
  activate :minify_css

  set :http_prefix, '/lightbox'

  ignore /^.*\.scss/
  ignore /^.*\.coffee/
end