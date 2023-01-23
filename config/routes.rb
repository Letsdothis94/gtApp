Rails.application.routes.draw do
  get '/events', to: 'events#index'
  get 'events/:id', to: 'events#show'
  patch '/events/:id', to: 'events#update'
  post '/events', to: 'events#create'
  delete '/events/:id', to: 'events#destroy'

  get '/hosts', to: 'hosts#index'
  get '/hosts/:id', to: 'hosts#show'
  post '/hosts', to: 'hosts#create'
  delete '/hosts/:id', to: 'hosts#destroy'
  patch '/hosts/:id', to: 'hosts#update'

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#destroy'

end
