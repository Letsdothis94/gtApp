class EventsController < ApplicationController
    def index
        render json: Event.all
    end

    def show
        event = Event.find_by!(id: params[:id])
        render json: event
    end

    def create
        event = Event.create!(title: params[:title], date: params[:date], about: params[:about], location: params[:location],host_id: params[:host_id], user_id: params[:user_id])
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
        if event.valid?
            render json: event
        else
            render json: message.errors.full_messages, status: 422
        end    
    end
end
