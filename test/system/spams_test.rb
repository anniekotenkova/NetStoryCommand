require "application_system_test_case"

class SpamsTest < ApplicationSystemTestCase
  setup do
    @spam = spams(:one)
  end

  test "visiting the index" do
    visit spams_url
    assert_selector "h1", text: "Spams"
  end

  test "creating a Spam" do
    visit spams_url
    click_on "New Spam"

    fill_in "Image", with: @spam.image
    click_on "Create Spam"

    assert_text "Spam was successfully created"
    click_on "Back"
  end

  test "updating a Spam" do
    visit spams_url
    click_on "Edit", match: :first

    fill_in "Image", with: @spam.image
    click_on "Update Spam"

    assert_text "Spam was successfully updated"
    click_on "Back"
  end

  test "destroying a Spam" do
    visit spams_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Spam was successfully destroyed"
  end
end
