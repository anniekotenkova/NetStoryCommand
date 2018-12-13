class FolderfoldersController < ApplicationController
  before_action :set_folderfolder, only: [:show, :edit, :update, :destroy]

  # GET /folderfolders
  # GET /folderfolders.json
  def index
    @folderfolders = Folderfolder.all
  end

  # GET /folderfolders/1
  # GET /folderfolders/1.json
  def show
  end

  # GET /folderfolders/new
  def new
    @folderfolder = Folderfolder.new
  end

  # GET /folderfolders/1/edit
  def edit
  end

  # POST /folderfolders
  # POST /folderfolders.json
  def create
    @folderfolder = Folderfolder.new(folderfolder_params)

    respond_to do |format|
      if @folderfolder.save
        format.html { redirect_to @folderfolder, notice: 'Folderfolder was successfully created.' }
        format.json { render :show, status: :created, location: @folderfolder }
      else
        format.html { render :new }
        format.json { render json: @folderfolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /folderfolders/1
  # PATCH/PUT /folderfolders/1.json
  def update
    respond_to do |format|
      if @folderfolder.update(folderfolder_params)
        format.html { redirect_to @folderfolder, notice: 'Folderfolder was successfully updated.' }
        format.json { render :show, status: :ok, location: @folderfolder }
      else
        format.html { render :edit }
        format.json { render json: @folderfolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /folderfolders/1
  # DELETE /folderfolders/1.json
  def destroy
    @folderfolder.destroy
    respond_to do |format|
      format.html { redirect_to folderfolders_url, notice: 'Folderfolder was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_folderfolder
      @folderfolder = Folderfolder.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def folderfolder_params
      params.fetch(:folderfolder, {})
    end
end
