require 'test_helper'

class AttachmenntsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @attachmennt = attachmennts(:one)
  end

  test "should get index" do
    get attachmennts_url
    assert_response :success
  end

  test "should get new" do
    get new_attachmennt_url
    assert_response :success
  end

  test "should create attachmennt" do
    assert_difference('Attachmennt.count') do
      post attachmennts_url, params: { attachmennt: { type: @attachmennt.type, url: @attachmennt.url } }
    end

    assert_redirected_to attachmennt_url(Attachmennt.last)
  end

  test "should show attachmennt" do
    get attachmennt_url(@attachmennt)
    assert_response :success
  end

  test "should get edit" do
    get edit_attachmennt_url(@attachmennt)
    assert_response :success
  end

  test "should update attachmennt" do
    patch attachmennt_url(@attachmennt), params: { attachmennt: { type: @attachmennt.type, url: @attachmennt.url } }
    assert_redirected_to attachmennt_url(@attachmennt)
  end

  test "should destroy attachmennt" do
    assert_difference('Attachmennt.count', -1) do
      delete attachmennt_url(@attachmennt)
    end

    assert_redirected_to attachmennts_url
  end
end
