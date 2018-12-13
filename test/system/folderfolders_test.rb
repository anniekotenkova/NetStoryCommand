require "application_system_test_case"

class FolderfoldersTest < ApplicationSystemTestCase
  setup do
    @folderfolder = folderfolders(:one)
  end

  test "visiting the index" do
    visit folderfolders_url
    assert_selector "h1", text: "Folderfolders"
  end

  test "creating a Folderfolder" do
    visit folderfolders_url
    click_on "New Folderfolder"

    click_on "Create Folderfolder"

    assert_text "Folderfolder was successfully created"
    click_on "Back"
  end

  test "updating a Folderfolder" do
    visit folderfolders_url
    click_on "Edit", match: :first

    click_on "Update Folderfolder"

    assert_text "Folderfolder was successfully updated"
    click_on "Back"
  end

  test "destroying a Folderfolder" do
    visit folderfolders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Folderfolder was successfully destroyed"
  end
end
