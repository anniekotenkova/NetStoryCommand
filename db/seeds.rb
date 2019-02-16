#require 'faker'

# Reset database
Rake::Task['db:drop'].invoke
Rake::Task['db:create'].invoke
Rake::Task['db:migrate'].invoke
#
def data_seed
  create_folders
  create_articles
end

def create_folders
  Folder.create(name: '1960', icon: File.open(File.join(Rails.root, 'app/assets/images/folder.png')))
  Folder.create(name: '1970', icon: File.open(File.join(Rails.root, 'app/assets/images/folder.png')))
  Folder.create(name: '1980', icon: File.open(File.join(Rails.root, 'app/assets/images/folder.png')))
  Folder.create(name: '1990', icon: File.open(File.join(Rails.root, 'app/assets/images/folder.png')))
end

def create_articles
  Article.create(title: 'Первая почта', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/mail_icon.png')))
  Article.create(title: 'Ошибка 404', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/notfound_icon.png')))
  Article.create(title: 'Первый браузер', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/erwise_icon.png')))
  Article.create(title: 'Первый лендинг', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/at&t_icon.png')))
end

data_seed
