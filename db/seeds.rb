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

  icons = Folder.create(
    name: 'Справка',
    icon: 'about.svg',
    partial_name: 'about'
  )

  computer = Folder.create(
    name: 'Мой компьютер',
    icon: 'computer_icon.svg',
    partial_name: 'window'
  )

  computer.folders.create([{
      name: '1970',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    },{
      name: '1980',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }, {
      name: '1990',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }, {
      name: '2000',
      icon: 'folder.svg',
      partial_name: 'window',
      same_window: true
    }
  ])

  icons = Folder.create([{
      name: 'Procrastinate Explorer',
      icon: 'internet.svg',
      partial_name: 'matrix'
    }, {
      name: 'О нас',
      icon: 'credits.svg',
      partial_name: 'credits'
    }, {
      name: 'Корзина',
      icon: 'trash.svg',
      partial_name: 'trash'
    }
  ])
end

def create_articles
  articles = [{
      folder_name:  '1970',
      title:        'Первая почта',
      pic:          'mail_icon.svg',
      partial_name: 'email'
    },
    {
      folder_name:  '1980',
      title:        'WWW',
      pic:          'www_icon.svg',
      partial_name: 'www'
    },
    {
      folder_name:  '1980',
      title:        'NSFNET',
      pic:          'nsfnet_icon.svg',
      partial_name: 'nsfnet'
    },
    {
      folder_name:  '1980',
      title:        'Синий экран смерти',
      pic:          'blue_screen_icon.svg',
      partial_name: 'blue_screen'
    },
    {
      folder_name:  '1990',
      title:        'Ошибка 404',
      pic:          'notfound_icon.svg',
      partial_name: 'error404'
    }, {
      folder_name:  '1990',
      title:        'Первый браузер',
      pic:          'erwise_icon.svg',
      partial_name: 'firstbrowser'
    }, {
      folder_name:  '1990',
      title:        'Первый лендинг',
      pic:          'att_icon.svg',
      partial_name: 'firstlanding'
    }, {
      folder_name:  '1990',
      title:        'Друзья',
      pic:          'friends_icon.svg',
      partial_name: 'friends'
    }, {
      folder_name:  '1990',
      title:        'TheGlobe',
      pic:          'theglobe_icon.svg',
      partial_name: 'the_globe'
    }, {
      folder_name:  '1990',
      title:        'Браузерные войны',
      pic:          'netscape_icon.svg',
      partial_name: 'netscape'
    }, {
      folder_name:  '2000',
      title:        'Википедия',
      pic:          'wiki_icon.svg',
      partial_name: 'wikipedia'
    }, {
      folder_name:  '2000',
      title:        'Facebook',
      pic:          'wiki_icon.svg',
      partial_name: 'facebook'
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
