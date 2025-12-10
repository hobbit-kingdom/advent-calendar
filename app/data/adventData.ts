export interface AdventDay {
  day: number;
  title: string;
  titleRu: string;
  quote: string;
  quoteRu: string;
  author: string;
  authorRu: string;
  content: string;
  contentRu: string;
  image?: string;
}

export const adventDays: AdventDay[] = [
  {
    day: 1,
    title: "The Journey Begins",
    titleRu: "Путешествие начинается",
    quote: "The Road goes ever on and on",
    quoteRu: "Дорога вьётся без конца",
    author: "Bilbo Baggins",
    authorRu: "Бильбо Бэггинс",
    content:
      "Even the smallest person can change the course of the future. Your advent journey begins today!",
    contentRu:
      "Даже самый маленький человек может изменить ход будущего. Ваше адвент-путешествие начинается сегодня!",
  },
  {
    day: 2,
    title: "The Shire in snow?!",
    titleRu: "Шир в снегу?!",
    quote: "Well, Hobbiton is full of snow now! I can't open the door!",
    quoteRu: "Ну вот, Хоббитон весь в снегу! Я не могу открыть дверь!",
    author: "Bilbo Baggins",
    authorRu: "Бильбо Бэггинс",
    content:
      "The winter has arrived to the peaceful lands of the Shire, where hobbits live in harmony with laziness and nature.",
    contentRu:
      "Зима пришла на мирные земли Шира, где хоббиты живут в гармонии с ленью и природой.",
  },
  {
    day: 3,
    title: "The Hobbit Remastered by fffathur",
    titleRu: "The Hobbit Remastered от fffathur",
    quote: "Okay, well, let me try that new mod. I can't wait to try it out!",
    quoteRu: "Ладно, дайте-ка попробую этот новый мод. Не могу дождаться!",
    author: "",
    authorRu: "",
    content:
      "A new mod which uposcales the whole game has been released! Enjoy! It's now available for the gamecube and PC!",
    contentRu:
      "Вышел новый мод, который улучшает всю игру! Наслаждайтесь! Теперь доступен для GameCube и ПК!",
  },
  {
    day: 4,
    title: "Gamecube",
    titleRu: "Gamecube",
    quote: "Something awaits behind the door...",
    quoteRu: "Что-то ждёт за дверью...",
    author: "",
    authorRu: "",
    content:
      "Huh, where is my gamecube, I haven't toouched it in a while, don't tell me it'e in that Pantry! I don't have a key for it!",
    contentRu:
      "Хм, где же мой GameCube, я давно его не трогал, только не говорите, что он в той кладовке! У меня нет от неё ключа!",
  },
  {
    day: 5,
    title: "The console",
    titleRu: "Консоль",
    quote: "Here it is, my old lovely console",
    quoteRu: "Вот она, моя старая любимая консоль",
    author: "Bilbo Baggins",
    authorRu: "Бильбо Бэггинс",
    content:
      "Bilbo was playing the mod the whole evening and went to bed very late in the night.",
    contentRu: "Бильбо играл в мод всю ночь и лёг спать очень поздно ночью.",
  },
  {
    day: 6,
    title: "Calm warm evening",
    titleRu: "Спокойный теплый вечер",
    quote:
      "Wow, this brings back memories of my childhood, when everything was so simple and peaceful.",
    quoteRu: "Эх, вспоминается детство, когда всё было так просто и спокойно.",
    author: "Bilbo Baggins",
    authorRu: "Бильбо Бэггинс",
    content:
      "Bilbo has spent the whole evening enjoying new mods and his hot chocolate.",
    contentRu:
      "Бильбо провёл весь вечер наслаждаясь новыми модами и горячим шоколадом.",
  },
  {
    day: 7,
    title: "An unexpected visit...",
    titleRu: "Непредвиденный визит...",
    quote: "No way, Gandalf, don't get me into this!",
    quoteRu: "Нет, Гэндальф, не впутывай меня в это!",
    author: "Gandalf",
    authorRu: "Гэндальф",
    content: "Gandalf visited Bilbo with an unexpected deal.",
    contentRu: "Гэндальф прибыл Бильбо с непредвиденным предложением.",
  },
  {
    day: 8,
    title: "Again I should help him!",
    titleRu: "И снова я должен помогать ему!",
    quote: "Bring me that sack, Bilbo!",
    quoteRu: "Принеси мне тот мешок, Бильбо!",
    author: "Gandalf",
    authorRu: "Гэндальф",
    content: "Over and over again! Why it's always me who should help him?",
    contentRu: "И вот снова и снова! Почему всегда я должен помогать ему?",
  },
  {
    day: 9,
    title: "Heavy sack",
    titleRu: "Тяжелый мешок",
    quote: "I am cold! What the hell has he put inside this sack?!",
    quoteRu: "Мне холодно! Что к черту он сюда засунул?!",
    author: "Бильбо",
    authorRu: "Bilbo",
    content:
      "It was really snowy and cold, but Bilbo continued to carry a large sack to the Green Dragon Inn.",
    contentRu:
      "Очень сильно мело и было холодно, но Бильбо продолжал нести мешок к Зеленому Дракону.",
  },
  {
    day: 10,
    title: "Slippery ice",
    titleRu: "Скользкий лед",
    quote: "Oh, no, no, no!",
    quoteRu: "Ой, нет, нет, нет!",
    author: "Bilbo",
    authorRu: "Бильбо",
    content:
      "Bilbo accidentally stepped on ice and started falling, and the sack was falling with him. Something was cracking.",
    contentRu:
      "Бильбо случайно наступил на лед и подскользнулся, а с ним и мешок. Что-то начало трескаться",
  },
  {
    day: 11,
    title: "New trouble",
    titleRu: "Новая проблема",
    quote: "Gandalf would kill me! And what do I have to do now?",
    quoteRu: "Гендальф меня убъет! Что же делать?",
    author: "Bilbo",
    authorRu: "Бильбо",
    content:
      "Inside the sack were presents for the children of the Shire. Almost all of them cracked apart while falling from the hill.",
    contentRu:
      "Внутри мешка оказались подарки для детей Шира. Почти все из них поламались, пока падали с горки.",
  },
  {
    day: 12,
    title: "Brainstorming",
    titleRu: "Штурм мозга",
    quote: "I can't leave it like that!",
    quoteRu: "Я не могу это так оставить!",
    author: "Bilbo",
    authorRu: "Бильбо",
    content:
      "Bilbo decided to fix the situatuation without telling Gandalf about it. He started to make a plan on where to find equivalent presents or who can make them.",
    contentRu:
      "Бильбо решил уладить ситуацию, не рассказывая об этом Гэндальфу. Он начал разрабатывать план, где найти аналогичные подарки или кто сможет их изготовить.",
  },
  {
    day: 13,
    title: "The One Ring",
    titleRu: "Кольцо Всевластия",
    quote: "One Ring to rule them all, One Ring to find them",
    quoteRu: "Одно Кольцо, чтоб править всеми, Одно — чтоб их найти",
    author: "Ring Inscription",
    authorRu: "Надпись на Кольце",
    content:
      "The most powerful and dangerous artifact ever created, forged by Sauron in the fires of Mount Doom.",
    contentRu:
      "Самый могущественный и опасный артефакт, когда-либо созданный, выкованный Сауроном в огне Роковой Горы.",
  },
  {
    day: 14,
    title: "Gollum",
    titleRu: "Голлум",
    quote: "My precious...",
    quoteRu: "Моя прелесть...",
    author: "Gollum",
    authorRu: "Голлум",
    content:
      "Once a hobbit named Sméagol, now corrupted by the Ring's power into a tragic creature.",
    contentRu:
      "Когда-то хоббит по имени Смеагол, теперь испорченный силой Кольца и превращённый в трагическое существо.",
  },
  {
    day: 15,
    title: "The Ents",
    titleRu: "Энты",
    quote: "There is always hope",
    quoteRu: "Надежда есть всегда",
    author: "Aragorn",
    authorRu: "Арагорн",
    content:
      "The ancient tree shepherds awaken to defend their forest against the forces of Saruman.",
    contentRu:
      "Древние пастыри деревьев пробуждаются, чтобы защитить свой лес от сил Сарумана.",
  },
  {
    day: 16,
    title: "Helm's Deep",
    titleRu: "Хельмова Падь",
    quote: "They have a cave troll",
    quoteRu: "У них пещерный тролль",
    author: "Boromir",
    authorRu: "Боромир",
    content:
      "The fortress where the Rohirrim made their desperate stand against overwhelming odds.",
    contentRu:
      "Крепость, где рохиррим дали свой отчаянный бой против превосходящих сил.",
  },
  {
    day: 17,
    title: "The Battle of Pelennor",
    titleRu: "Битва на Пеленнорских полях",
    quote: "I am no man!",
    quoteRu: "Я не мужчина!",
    author: "Éowyn",
    authorRu: "Эовин",
    content:
      "The greatest battle of the Third Age, where the fate of Gondor hung in the balance.",
    contentRu:
      "Величайшая битва Третьей Эпохи, где судьба Гондора висела на волоске.",
  },
  {
    day: 18,
    title: "Mount Doom",
    titleRu: "Роковая Гора",
    quote: "I wish none of this had happened",
    quoteRu: "Лучше бы ничего этого не случилось",
    author: "Frodo",
    authorRu: "Фродо",
    content:
      "The fires where the One Ring was forged, and where it must be destroyed.",
    contentRu:
      "Огонь, в котором было выковано Кольцо Всевластия, и в котором оно должно быть уничтожено.",
  },
  {
    day: 19,
    title: "The Eagles",
    titleRu: "Орлы",
    quote: "The Eagles are coming!",
    quoteRu: "Орлы летят!",
    author: "Pippin",
    authorRu: "Пиппин",
    content:
      "The great Eagles of the Misty Mountains, ancient allies who arrive in the darkest hour.",
    contentRu:
      "Великие Орлы Мглистых Гор, древние союзники, которые прибывают в самый тёмный час.",
  },
  {
    day: 20,
    title: "Gandalf the White",
    titleRu: "Гэндальф Белый",
    quote: "I come back to you now at the turn of the tide",
    quoteRu: "Я возвращаюсь к вам на переломе судьбы",
    author: "Gandalf",
    authorRu: "Гэндальф",
    content:
      "Reborn with greater power, the White Wizard returns to lead the forces of good.",
    contentRu:
      "Возрождённый с большей силой, Белый Волшебник возвращается, чтобы вести силы добра.",
  },
  {
    day: 21,
    title: "Arwen",
    titleRu: "Арвен",
    quote:
      "I would rather share one lifetime with you than face all the ages of this world alone",
    quoteRu:
      "Я лучше проживу одну жизнь с тобой, чем встречу все эпохи этого мира в одиночестве",
    author: "Arwen",
    authorRu: "Арвен",
    content:
      "The Evenstar chooses mortality for love, binding her fate to Aragorn's.",
    contentRu:
      "Вечерняя Звезда выбирает смертность ради любви, связывая свою судьбу с судьбой Арагорна.",
  },
  {
    day: 22,
    title: "The Grey Havens",
    titleRu: "Серые Гавани",
    quote: "The grey rain-curtain turned all to silver glass",
    quoteRu: "Серая завеса дождя превратилась в серебряное стекло",
    author: "Frodo",
    authorRu: "Фродо",
    content:
      "Where the immortal Elves depart Middle-earth, sailing into the West.",
    contentRu:
      "Откуда бессмертные эльфы покидают Средиземье, уплывая на Запад.",
  },
  {
    day: 23,
    title: "Return of the King",
    titleRu: "Возвращение короля",
    quote: "The hands of the king are the hands of a healer",
    quoteRu: "Руки короля — руки целителя",
    author: "Ioreth",
    authorRu: "Йорет",
    content:
      "Aragorn is crowned, and the age of peace begins for the kingdoms of Men.",
    contentRu:
      "Арагорн коронован, и для королевств людей начинается эпоха мира.",
  },
  {
    day: 24,
    title: "Home at Last",
    titleRu: "Наконец дома",
    quote: "Well, I'm back",
    quoteRu: "Ну вот, я вернулся",
    author: "Sam",
    authorRu: "Сэм",
    content:
      "After saving Middle-earth, our heroes return home, forever changed by their journey. Merry Christmas!",
    contentRu:
      "Спасая Средиземье, наши герои возвращаются домой, навсегда изменённые своим путешествием. Счастливого Рождества!",
  },
];
