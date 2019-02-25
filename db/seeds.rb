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
  computer = Folder.create(name: 'Мой компьютер', icon: 'computer.png')

  computer.folders.create(name: '1960', icon: 'folder.svg')
  computer.folders.create(name: '1970', icon: 'folder.svg')
  computer.folders.create(name: '1980', icon: 'folder.svg')
  computer.folders.create(name: '1990', icon: 'folder.svg')
end

def create_articles
  folder = Folder.find_by_name('1960')
  folder.articles.create(title: 'Первая почта',   pic: File.open(File.join(Rails.root, 'app/assets/images/icons/mail_icon.png')))
  folder.articles.create(title: 'Ошибка 404',     pic: File.open(File.join(Rails.root, 'app/assets/images/icons/notfound_icon.png')))
  folder.articles.create(title: 'Первый браузер', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/erwise_icon.png')))
  folder.articles.create(title: 'Первый лендинг', pic: File.open(File.join(Rails.root, 'app/assets/images/icons/at&t_icon.png')))
  folder.articles.create(title: 'Друзья',         pic: File.open(File.join(Rails.root, 'app/assets/images/icons/at&t_icon.png')))
  folder.articles.create(title: 'Википедия',      pic: File.open(File.join(Rails.root, 'app/assets/images/icons/at&t_icon.png')))
end

data_seed
