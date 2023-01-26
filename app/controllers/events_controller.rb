class EventsController < ApplicationController
    def index
        render json: Event.all
    end

    def show
        event = Event.find_by!(id: params[:id])
            ActionCable.server.broadcast('live_feed', {
            post: event
    })
        if event.valid?
            render json: event
        else
            render json: event.errors.full_messages, status: 422
        end
    end

    def create
        event = Event.create!(title: params[:title], date: params[:date], about: params[:about], location: params[:location], user_id:params[:user_id])
        ActionCable.server.broadcast('live_feed', {
            post: event
    })
        if event.valid?
            render json: event
        else
            render json: event.errors.full_messages, status: 422
        end
    end

    def destroy 
        event = Event.find_by!(id: params[:id])
        event.delete
    end

    def update
        event = Event.find_by!(id: params[:id])
        event.update!(going: params[:going])
        ActionCable.server.broadcast('live_feed', {
            post: event
    })
        if event.valid?
            render json: event
        else
            render json: message.errors.full_messages, status: 422
        end    
    end
end
