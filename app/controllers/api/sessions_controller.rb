class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid username and password combination"], status: 422
    end

  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Not logged in!"], status: 404
    end
  end

end
