class SubscriptionsController < ApplicationController

  def new
    @subscription = Subscription.new
  end

  def create
    @subscription = Subscription.new(subscription_params)

    respond_to do |format|
      if @subscription.save
        format.html { redirect_to @subscription, notice: 'Subscription was successfully created.' }
        format.json { render :show, status: :created, location: @subscription }
        format.js
      else
        format.html { render :new }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  private

    def subscription_params
      params.require(:subscription).permit(:email)
    end
    
end
