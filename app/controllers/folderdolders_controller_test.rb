require 'test_helper'

class FolderfoldersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @folderfolder = folderfolders(:one)
  end

  test "should get index" do
    get folderfolders_url
    assert_response :success
  end

  test "should get new" do
    get new_folderfolder_url
    assert_response :success
  end

  test "should create folderfolder" do
    assert_difference('Folderfolder.count') do
      post folderfolders_url, params: { folderfolder: {  } }
    end

    assert_redirected_to folderfolder_url(Folderfolder.last)
  end

  test "should show folderfolder" do
    get folderfolder_url(@folderfolder)
    assert_response :success
  end

  test "should get edit" do
    get edit_folderfolder_url(@folderfolder)
    assert_response :success
  end

  test "should update folderfolder" do
    patch folderfolder_url(@folderfolder), params: { folderfolder: {  } }
    assert_redirected_to folderfolder_url(@folderfolder)
  end

  test "should destroy folderfolder" do
    assert_difference('Folderfolder.count', -1) do
      delete folderfolder_url(@folderfolder)
    end

    assert_redirected_to folderfolders_url
  end
end
