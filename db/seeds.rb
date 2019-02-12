#require 'faker'

# Reset database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke
#
def data_seed
  create_folders
end

def create_folders
  Folder.create(name: '1960', icon: File.open(File.join(Rails.root, 'assets/images/folder.png')))
  Folder.create(name: '1970', icon: File.open(File.join(Rails.root, 'assets/images/folder.png')))
  Folder.create(name: '1980', icon: File.open(File.join(Rails.root, 'assets/images/folder.png')))
  Folder.create(name: '1990', icon: File.open(File.join(Rails.root, 'assets/images/folder.png')))
end
