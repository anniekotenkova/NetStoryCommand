class AttachmenntsController < ApplicationController
  before_action :set_attachmennt, only: [:show, :edit, :update, :destroy]

  # GET /attachmennts
  # GET /attachmennts.json
  def index
    @attachmennts = Attachmennt.all
  end

  # GET /attachmennts/1
  # GET /attachmennts/1.json
  def show
  end

  # GET /attachmennts/new
  def new
    @attachmennt = Attachmennt.new
  end

  # GET /attachmennts/1/edit
  def edit
  end

  # POST /attachmennts
  # POST /attachmennts.json
  def create
    @attachmennt = Attachmennt.new(attachmennt_params)

    respond_to do |format|
      if @attachmennt.save
        format.html { redirect_to @attachmennt, notice: 'Attachmennt was successfully created.' }
        format.json { render :show, status: :created, location: @attachmennt }
      else
        format.html { render :new }
        format.json { render json: @attachmennt.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /attachmennts/1
  # PATCH/PUT /attachmennts/1.json
  def update
    respond_to do |format|
      if @attachmennt.update(attachmennt_params)
        format.html { redirect_to @attachmennt, notice: 'Attachmennt was successfully updated.' }
        format.json { render :show, status: :ok, location: @attachmennt }
      else
        format.html { render :edit }
        format.json { render json: @attachmennt.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /attachmennts/1
  # DELETE /attachmennts/1.json
  def destroy
    @attachmennt.destroy
    respond_to do |format|
      format.html { redirect_to attachmennts_url, notice: 'Attachmennt was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attachmennt
      @attachmennt = Attachmennt.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def attachmennt_params
      params.require(:attachmennt).permit(:cover)
    end
end
