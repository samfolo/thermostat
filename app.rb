require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    content_type 'text/html'
    erb :index
  end

  run! if app_file == $0
end