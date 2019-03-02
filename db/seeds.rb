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
end

#def create_folders
#  folders = [
#    {
#      name: 'Справка',
#      icon: 'Spravka.svg'
#    }, {
#      name: 'Мой компьютер',
#      icon: 'computer.png'
#    }, {
#      name: '1970',
#      icon: 'folder.svg'
#    }, {
#      name: '1980',
#      icon: 'folder.svg'
#    }, {
#      name: '1990',
#      icon: 'folder.svg'
#    }, {
#      name: '2000',
#      icon: 'folder.svg'
#    }, {
#      name: 'Корзина',
#      icon: 'Korzina.png'
#    }, {
#      name: 'Интернет',
#      icon: 'internet.svg'
#      }
#  ]
#
#  folders.each do |folder|
#    create_folder(folder)
#  end
#end
#
#def create_folder(folder)
#  folder = Folder.find_by_name(folder[:name])
#
#  f = folder.folders.create(
#    name:      folder[:name],
#    icon:      folder[:icon]
#  )
#
#  puts "Folder with name #{ f.name } created"
#end

def create_articles
  articles = [
    {
      folder_name:  '1970',
      title:        'Первая почта',
      pic:          'mail_icon.png',
      partial_name: 'email'
    }, {
      folder_name:  '1980',
      title:        'NSFNET',
      pic:          'mail_icon.png',
      partial_name: 'nsfnet'
    }, {
      folder_name:  '1990',
      title:        'Ошибка 404',
      pic:          'notfound_icon.png',
      partial_name: 'error404'
    }, {
      folder_name:  '1990',
      title:        'Первый браузер',
      pic:          'erwise_icon.png',
      partial_name: 'erwise_icon'
    }, {
      folder_name:  '1990',
      title:        'Первый лендинг',
      pic:          'att_icon.png',
      partial_name: 'att'
    }, {
      folder_name:  '1990',
      title:        'Друзья',
      pic:          'att_icon.png',
      partial_name: 'att'
    }, {
      folder_name:  '2000',
      title:        'Википедия',
      pic:          'att_icon.png',
      partial_name: 'att'
    }
  ]

  articles.each do |article|
    create_article(article)
  end
end

def create_article(article)
  folder = Folder.find_by_name(article[:folder_name])
  icon = File.open(File.join(Rails.root, "public/autoupload/article_icons/#{ article[:pic] }"))

  article = folder.articles.create(
    title:        article[:title],
    pic:          icon,
    partial_name: article[:partial_name]
  )

  puts "Article with title #{ article.title } created"
end

data_seed
