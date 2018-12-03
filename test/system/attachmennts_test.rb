require "application_system_test_case"

class AttachmenntsTest < ApplicationSystemTestCase
  setup do
    @attachmennt = attachmennts(:one)
  end

  test "visiting the index" do
    visit attachmennts_url
    assert_selector "h1", text: "Attachmennts"
  end

  test "creating a Attachmennt" do
    visit attachmennts_url
    click_on "New Attachmennt"

    fill_in "Type", with: @attachmennt.type
    fill_in "Url", with: @attachmennt.url
    click_on "Create Attachmennt"

    assert_text "Attachmennt was successfully created"
    click_on "Back"
  end

  test "updating a Attachmennt" do
    visit attachmennts_url
    click_on "Edit", match: :first

    fill_in "Type", with: @attachmennt.type
    fill_in "Url", with: @attachmennt.url
    click_on "Update Attachmennt"

    assert_text "Attachmennt was successfully updated"
    click_on "Back"
  end

  test "destroying a Attachmennt" do
    visit attachmennts_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Attachmennt was successfully destroyed"
  end
end
