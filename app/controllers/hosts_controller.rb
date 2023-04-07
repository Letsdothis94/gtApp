class HostsController < ApplicationController
    def index
        render json: Host.all
    end

    def show
        host = Host.find_by!(id: params[:id])
        render json: host
    end

        def create
        host = Host.create!(username: params[:username], email: params[:email], password: params[:password])
        if host.valid?
            render json: host
        else
            render json: host.errors.full_messages, status: 422
        end
    end

    def destroy
        host = Host.find_by!(id: params[:id])
        host.delete
    end
end
