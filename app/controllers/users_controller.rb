class UsersController < ApplicationController
        def index
        render json: User.all
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user
    end

        def create
        user = User.create!(username: params[:username], first_name: params[:first_name], last_name: params[:last_name])
        if user.valid?
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by!(id: params[:id])
        user.destroy
    end
    
end
