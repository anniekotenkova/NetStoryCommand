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

  Folder.create(name: 'Справка', icon: 'Spravka.svg')
  
  computer = Folder.create(name: 'Мой компьютер', icon: 'computer.png')

  folder = Folder.find_by_name('Мой компьютер')
  computer.folders.create(name: '1970', icon: 'folder.svg')
  computer.folders.create(name: '1980', icon: 'folder.svg')
  computer.folders.create(name: '1990', icon: 'folder.svg')
  computer.folders.create(name: '2000', icon: 'folder.svg')

  Folder.create(name: 'Корзина', icon: 'Korzina.png')
  Folder.create(name: 'Интернет', icon: 'internet.svg')

  puts "Folder with name #{ folder.name } and icon #{ folder.icon } was created"
end

def create_articles
  folder = Folder.find_by_name('1970')
  folder.articles.create(title: 'Первая почта', pic: 'mail_icon.png')

  folder = Folder.find_by_name('1980')

  folder = Folder.find_by_name('1990')
  folder.articles.create(title: 'Ошибка 404',     pic: 'notfound_icon.png')
  folder.articles.create(title: 'Первый браузер', pic: 'erwise_icon.png')
  folder.articles.create(title: 'Первый лендинг', pic: 'at&t_icon.png')
  folder.articles.create(title: 'Друзья',         pic: 'at&t_icon.png')

  folder = Folder.find_by_name('2000')
  folder.articles.create(title: 'Википедия',      pic: File.open(File.join(Rails.root, 'app/assets/images/icons/at&t_icon.png')))

  puts "Folder with title #{ article.title } was created"
end

data_seed
