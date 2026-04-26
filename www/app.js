/* رمضان والصيام — RAMADAN & FASTING — app.js v3.0 */
/* Based on "Ramadan wal-Siyam" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'رمضان والصيام',
    splashSub: 'روحانيات الصيام وأسراره للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ١٨٣',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات رمضان',
    cardsDesc: '١٥ بطاقة عن الصيام وروحانية رمضان وأسراره — كل بطاقة بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن رمضان والصيام — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي الرمضانية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة رمضان',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية رمضان',
    dailyLabel: '✨ بطاقة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ بطاقة عن رمضان والصيام',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Ramadan & Fasting',
    splashSub: 'The spirituality and secrets of fasting for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:183',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Ramadan Cards',
    cardsDesc: '15 cards about fasting, Ramadan spirituality, and its secrets — each with a verse, hadith, and practical tip',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of Ramadan and fasting — 4 choices per question',
    progressTitle: 'My Ramadan Journey',
    progressDesc: 'Your progress and achievements in the Ramadan journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Ramadan Duas',
    dailyLabel: "✨ Today's Card",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cards about Ramadan and fasting',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Ramadan et le Jeûne',
    splashSub: 'La spiritualité et les secrets du jeûne pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:183',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progrès', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Ramadan',
    cardsDesc: '15 cartes sur le jeûne, la spiritualité du Ramadan et ses secrets — chacune avec un verset, un hadith et un conseil pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur le Ramadan et le jeûne — 4 choix par question',
    progressTitle: 'Mon Parcours Ramadan',
    progressDesc: 'Vos progrès et réalisations dans le parcours du Ramadan',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de Ramadan',
    dailyLabel: '✨ Carte du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Expérience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consécutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Réf. Coran',
    correct: 'Bravo ! Bonne réponse ! 🎉',
    wrong: 'Réessayez la prochaine fois 💪',
    quizComplete: 'Quiz Terminé !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Débutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Persévérant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 cartes sur le Ramadan et le jeûne',
      'Quiz « Qui Veut Devenir Savant ? » avec récompenses',
      'Système de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 RAMADAN CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🌙',
    ar:{title:'رمضان والصيام عند الغزالي',desc:'يرى الغزالي أن الصيام ليس مجرد امتناع عن الطعام بل تربية روحية شاملة. في كتابه هذا يربط بين شعيرة الصيام وبناء المجتمع القوي — فالأمة التي تصوم معاً تتعلم الصبر والتكافل والانضباط الذاتي.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',verseRef:'البقرة ١٨٣',hadith:'من صام رمضان إيماناً واحتساباً غُفر له ما تقدم من ذنبه — متفق عليه',action:'عند شعورك بالجوع اليوم، تذكر أن صيامك تدريب لروحك وليس مجرد حرمان',young:'الصيام رياضة للروح! مثلما تتمرن لتقوي جسمك، الصيام يقوي قلبك وإرادتك 🌙'},
    en:{title:'The Spiritual Meaning of Fasting',desc:'Al-Ghazali sees: Fasting is not merely abstaining from food and drink — it is training for the soul and refinement of character. The fasting person learns patience, self-control, and draws closer to God with a humble heart. Fasting is a school that teaches us inner strength.',verse:'O you who believe, fasting has been prescribed for you as it was prescribed for those before you, so that you may attain piety',verseRef:'Al-Baqarah 183',hadith:'Whoever fasts Ramadan with faith and seeking reward, their past sins are forgiven — Agreed upon',action:'When you feel hungry today, remember that your fast is training for your soul, not just deprivation',young:'Fasting is exercise for your soul! Just like you train to strengthen your body, fasting strengthens your heart and willpower 🌙'},
    fr:{title:'Le Sens Spirituel du Jeûne',desc:"Le jeûne n'est pas simplement s'abstenir de nourriture et de boisson — c'est un entraînement de l'âme et un raffinement du caractère. Le jeûneur apprend la patience, la maîtrise de soi et se rapproche de Dieu avec un coeur humble. Le jeûne est une école de force intérieure.",verse:'Ô vous qui croyez, le jeûne vous a été prescrit comme il a été prescrit à ceux avant vous, afin que vous atteigniez la piété',verseRef:'Al-Baqarah 183',hadith:'Quiconque jeûne le Ramadan avec foi et en espérant la récompense, ses péchés passés sont pardonnés — Unanimement reconnu',action:"Quand vous avez faim aujourd'hui, rappelez-vous que votre jeûne est un entraînement spirituel",young:"Le jeûne c'est du sport pour l'âme ! Comme tu t'entraînes pour renforcer ton corps, le jeûne renforce ton coeur 🌙"}
  },
  {
    id:2, emoji:'💪',
    ar:{title:'الانضباط الذاتي',desc:'يرى الغزالي: الصيام يعلمنا أن نتحكم في أنفسنا. عندما تستطيع أن تمتنع عن الطعام والشراب وهما حلال، تصبح قادراً على الامتناع عن كل ما هو حرام. هذه هي القوة الحقيقية التي يمنحها رمضان لكل صائم.',verse:'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',verseRef:'العنكبوت ٦٩',hadith:'الصيام جُنّة فإذا كان يوم صوم أحدكم فلا يرفث ولا يصخب — متفق عليه',action:'تدرب اليوم على ضبط النفس: لا ترد على من يغضبك وقل "إني صائم"',young:'الصيام يعطيك قوة خارقة! يعلمك كيف تتحكم في نفسك حتى تصبح بطلاً حقيقياً 💪'},
    en:{title:'Self-Discipline',desc:'Al-Ghazali sees: Fasting teaches us to control ourselves. When you can abstain from food and drink — which are lawful — you become able to abstain from everything that is forbidden. This is the true strength that Ramadan gives every fasting person.',verse:'And those who strive for Us — We will surely guide them to Our ways',verseRef:'Al-Ankabut 69',hadith:'Fasting is a shield. When one of you is fasting, let them not use foul language or shout — Agreed upon',action:'Practice self-control today: do not respond to anyone who angers you and say "I am fasting"',young:'Fasting gives you a superpower! It teaches you to control yourself so you become a real hero 💪'},
    fr:{title:'La Discipline Personnelle',desc:"Le jeûne nous apprend à nous contrôler. Quand vous pouvez vous abstenir de nourriture — qui est licite — vous devenez capable de vous abstenir de tout ce qui est interdit. C'est la vraie force que le Ramadan donne à chaque jeûneur.",verse:'Ceux qui luttent pour Nous, Nous les guiderons vers Nos voies',verseRef:'Al-Ankabut 69',hadith:'Le jeûne est un bouclier. Quand l\'un de vous jeûne, qu\'il ne dise pas de grossièretés — Unanimement reconnu',action:"Pratiquez la maîtrise de soi aujourd'hui : ne répondez pas à la colère et dites « Je jeûne »",young:"Le jeûne te donne un super-pouvoir ! Il t'apprend à te contrôler pour devenir un vrai héros 💪"}
  },
  {
    id:3, emoji:'❤️',
    ar:{title:'التعاطف مع الفقراء',desc:'يرى الغزالي: عندما تجوع في رمضان، تشعر بما يشعر به الفقير كل يوم. هذا الإحساس يجعلك أكثر رحمة وكرماً مع المحتاجين. الصيام يعلمنا أن الطعام نعمة عظيمة يجب أن نشكر الله عليها ونتقاسمها مع غيرنا.',verse:'وَيُطْعِمُونَ الطَّعَامَ عَلَى حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا',verseRef:'الإنسان ٨',hadith:'من فطّر صائماً كان له مثل أجره — رواه الترمذي',action:'أطعم فقيراً اليوم أو تبرع لمن يحتاج — تذكر أن كثيرين لا يجدون ما يأكلون',young:'عندما تجوع في رمضان، فكر في الأطفال الذين لا يجدون طعاماً كل يوم — ساعدهم! ❤️'},
    en:{title:'Empathy for the Poor',desc:'Al-Ghazali sees: When you feel hungry during Ramadan, you experience what a poor person feels every day. This feeling makes you more merciful and generous toward those in need. Fasting teaches us that food is a great blessing we should be grateful for and share with others.',verse:'And they give food — despite their love for it — to the needy, the orphan, and the captive',verseRef:'Al-Insan 8',hadith:'Whoever provides iftar for a fasting person earns the same reward — Tirmidhi',action:'Feed a poor person today or donate to someone in need — remember that many cannot find food',young:'When you feel hungry in Ramadan, think of the children who have no food every day — help them! ❤️'},
    fr:{title:'Empathie pour les Pauvres',desc:"Quand vous avez faim pendant le Ramadan, vous ressentez ce qu'un pauvre ressent chaque jour. Ce sentiment vous rend plus miséricordieux et généreux envers les nécessiteux. Le jeûne nous apprend que la nourriture est une grande bénédiction à partager.",verse:'Et ils donnent la nourriture — malgré leur amour pour elle — au pauvre, à l\'orphelin et au captif',verseRef:'Al-Insan 8',hadith:'Quiconque offre l\'iftar à un jeûneur obtient la même récompense — Tirmidhi',action:"Nourrissez un pauvre aujourd'hui ou faites un don — rappelez-vous que beaucoup n'ont rien à manger",young:"Quand tu as faim au Ramadan, pense aux enfants qui n'ont pas de nourriture chaque jour — aide-les ! ❤️"}
  },
  {
    id:4, emoji:'📖',
    ar:{title:'شهر القرآن',desc:'يرى الغزالي: رمضان هو الشهر الذي أُنزل فيه القرآن الكريم. لذلك يجتهد المسلمون في قراءة القرآن وتدبره في هذا الشهر المبارك. كان جبريل عليه السلام يدارس النبي ﷺ القرآن في كل رمضان مرة واحدة وفي آخر رمضان مرتين.',verse:'شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ',verseRef:'البقرة ١٨٥',hadith:'اقرؤوا القرآن فإنه يأتي يوم القيامة شفيعاً لأصحابه — رواه مسلم',action:'اقرأ صفحة من القرآن اليوم وتأمل معانيها — اجعل لنفسك ورداً يومياً في رمضان',young:'رمضان هو شهر القرآن! اقرأ آية كل يوم وحاول أن تفهم معناها 📖'},
    en:{title:'The Month of Quran',desc:'Al-Ghazali sees: Ramadan is the month in which the Holy Quran was revealed. That is why Muslims strive to read and reflect on the Quran during this blessed month. Angel Jibreel used to review the Quran with the Prophet every Ramadan once, and twice in his final Ramadan.',verse:'The month of Ramadan is that in which the Quran was revealed as guidance for people',verseRef:'Al-Baqarah 185',hadith:'Read the Quran, for it will come as an intercessor for its companions on the Day of Judgment — Muslim',action:'Read a page of the Quran today and reflect on its meanings — set a daily reading goal for Ramadan',young:'Ramadan is the month of the Quran! Read a verse every day and try to understand its meaning 📖'},
    fr:{title:'Le Mois du Coran',desc:"Le Ramadan est le mois durant lequel le Coran a été révélé. C'est pourquoi les musulmans s'efforcent de lire et méditer le Coran pendant ce mois béni. L'ange Jibreel révisait le Coran avec le Prophète chaque Ramadan.",verse:'Le mois de Ramadan au cours duquel le Coran a été révélé comme guide pour les gens',verseRef:'Al-Baqarah 185',hadith:"Lisez le Coran, car il viendra comme intercesseur pour ses compagnons le Jour du Jugement — Muslim",action:"Lisez une page du Coran aujourd'hui et méditez sur ses sens — fixez un objectif quotidien",young:"Le Ramadan est le mois du Coran ! Lis un verset chaque jour et essaie de comprendre son sens 📖"}
  },
  {
    id:5, emoji:'🕌',
    ar:{title:'صلاة التراويح',desc:'يرى الغزالي: صلاة التراويح سنة مؤكدة في رمضان. يصليها المسلمون جماعة بعد صلاة العشاء، ويتلون فيها القرآن الكريم. هي فرصة جميلة للوقوف بين يدي الله في ليالي رمضان المباركة والشعور بالسكينة والطمأنينة.',verse:'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَكَ',verseRef:'الإسراء ٧٩',hadith:'من قام رمضان إيماناً واحتساباً غُفر له ما تقدم من ذنبه — متفق عليه',action:'صلِّ التراويح الليلة في المسجد أو في البيت مع أهلك — استمتع بهدوء الليل ودعاء القنوت',young:'صلاة التراويح ممتعة جداً! تصلي مع العائلة والأصدقاء وتسمع القرآن بصوت جميل 🕌'},
    en:{title:'Tarawih Prayers',desc:'Al-Ghazali sees: Tarawih is a confirmed practice during Ramadan. Muslims pray it in congregation after the evening prayer, reciting the Quran. It is a beautiful chance to stand before God during the blessed nights of Ramadan and feel peace and tranquility.',verse:'And during the night, pray with it as additional worship for you',verseRef:'Al-Isra 79',hadith:'Whoever prays during Ramadan with faith and seeking reward, their past sins are forgiven — Agreed upon',action:'Pray tarawih tonight at the mosque or at home with your family — enjoy the calmness of the night',young:'Tarawih prayers are so wonderful! You pray with family and friends and listen to the Quran beautifully recited 🕌'},
    fr:{title:'Les Prières de Tarawih',desc:"Les Tarawih sont une pratique confirmée pendant le Ramadan. Les musulmans les prient en congrégation après la prière du soir, en récitant le Coran. C'est une belle occasion de se tenir devant Dieu pendant les nuits bénies du Ramadan.",verse:'Et pendant la nuit, prie avec comme adoration supplémentaire pour toi',verseRef:'Al-Isra 79',hadith:'Quiconque prie pendant le Ramadan avec foi et espérant la récompense, ses péchés passés sont pardonnés — Unanimement reconnu',action:'Priez les tarawih ce soir à la mosquée ou chez vous avec votre famille',young:"Les prières de Tarawih sont géniales ! Tu pries avec ta famille et tu écoutes le Coran magnifiquement récité 🕌"}
  },
  {
    id:6, emoji:'✨',
    ar:{title:'ليلة القدر',desc:'يرى الغزالي: ليلة القدر خير من ألف شهر. هي ليلة مباركة في العشر الأواخر من رمضان نزل فيها القرآن. من قامها إيماناً واحتساباً غُفر له ما تقدم من ذنبه. يبحث عنها المسلمون في الليالي الوترية من العشر الأواخر.',verse:'لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ',verseRef:'القدر ٣',hadith:'تحروا ليلة القدر في الوتر من العشر الأواخر من رمضان — متفق عليه',action:'في العشر الأواخر، اجتهد في العبادة كل ليلة — فلعل إحداها ليلة القدر',young:'ليلة القدر كنز عظيم! عبادة ليلة واحدة فيها مثل عبادة أكثر من ٨٣ سنة! ✨'},
    en:{title:'Laylat al-Qadr',desc:'Al-Ghazali sees: Laylat al-Qadr (the Night of Decree) is better than a thousand months. It is a blessed night in the last ten days of Ramadan when the Quran was revealed. Muslims search for it in the odd nights of the last ten days.',verse:'The Night of Decree is better than a thousand months',verseRef:'Al-Qadr 3',hadith:'Seek Laylat al-Qadr in the odd nights of the last ten days of Ramadan — Agreed upon',action:'During the last ten nights, worship every night earnestly — one of them could be Laylat al-Qadr',young:'Laylat al-Qadr is an amazing treasure! One night of worship is like more than 83 years! ✨'},
    fr:{title:'Laylat al-Qadr',desc:"Laylat al-Qadr (la Nuit du Destin) est meilleure que mille mois. C'est une nuit bénie dans les dix dernières nuits du Ramadan quand le Coran a été révélé. Les musulmans la cherchent dans les nuits impaires des dix dernières nuits.",verse:'La Nuit du Destin est meilleure que mille mois',verseRef:'Al-Qadr 3',hadith:'Cherchez Laylat al-Qadr dans les nuits impaires des dix dernières nuits du Ramadan — Unanimement reconnu',action:'Pendant les dix dernières nuits, adorez chaque nuit avec ferveur',young:"Laylat al-Qadr est un trésor incroyable ! Une nuit d'adoration vaut plus de 83 ans ! ✨"}
  },
  {
    id:7, emoji:'🍽️',
    ar:{title:'آداب الإفطار',desc:'للإفطار في رمضان آداب جميلة: التعجيل بالإفطار عند أذان المغرب، والبدء بالتمر والماء، والدعاء عند الإفطار، ومشاركة الطعام مع الآخرين. الإفطار لحظة فرح وشكر لله على إتمام الصيام.',verse:'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا',verseRef:'الأعراف ٣١',hadith:'إذا أفطر أحدكم فليفطر على تمر فإن لم يجد فليفطر على ماء فإنه طهور — رواه الترمذي',action:'افطر اليوم على تمر وماء واشكر الله — وادعُ بأحب دعاء إليك عند الإفطار',young:'عند الإفطار، ابدأ بالتمر والماء كما كان يفعل النبي ﷺ — وادعُ الله قبل أن تأكل 🍽️'},
    en:{title:'Iftar Etiquette',desc:'Breaking the fast in Ramadan has beautiful manners: hastening to break the fast at the Maghrib call, starting with dates and water, making dua at the time of breaking fast, and sharing food with others. Iftar is a moment of joy and gratitude to God.',verse:'Eat and drink, but do not be excessive',verseRef:'Al-Araf 31',hadith:'When one of you breaks the fast, let them break it with dates; if they cannot find any, then with water, for it is pure — Tirmidhi',action:'Break your fast today with dates and water, thank God, and make your favorite dua at iftar time',young:'At iftar time, start with dates and water just like the Prophet did — and make dua before you eat 🍽️'},
    fr:{title:"L'Étiquette de l'Iftar",desc:"La rupture du jeûne au Ramadan a de belles manières : se hâter de rompre le jeûne au Maghrib, commencer par des dattes et de l'eau, faire des duas, et partager le repas avec les autres. L'iftar est un moment de joie et de gratitude.",verse:'Mangez et buvez, mais ne soyez pas excessifs',verseRef:'Al-Araf 31',hadith:"Quand l'un de vous rompt le jeûne, qu'il le fasse avec des dattes ; s'il n'en trouve pas, avec de l'eau — Tirmidhi",action:"Rompez votre jeûne avec des dattes et de l'eau, remerciez Dieu et faites votre dua préférée",young:"À l'iftar, commence par des dattes et de l'eau comme le Prophète — et fais une dua avant de manger 🍽️"}
  },
  {
    id:8, emoji:'🌅',
    ar:{title:'بركة السحور',desc:'السحور بركة عظيمة في رمضان. أوصى النبي ﷺ بالسحور وتأخيره إلى قبيل الفجر. هو وقت مبارك للدعاء والاستغفار. الاستيقاظ للسحور يعلمنا الانضباط ويمنحنا القوة لصيام اليوم التالي.',verse:'وَبِالْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ',verseRef:'الذاريات ١٨',hadith:'تسحروا فإن في السحور بركة — متفق عليه',action:'استيقظ للسحور قبل الفجر — كُل وجبة صحية وادعُ الله واستغفره',young:'السحور مثل الوقود للسيارة! يعطيك الطاقة ليومك كله — لا تفوته أبداً! 🌅'},
    en:{title:'The Blessing of Suhoor',desc:'Suhoor is a great blessing in Ramadan. The Prophet recommended it and delaying it until just before dawn. It is a blessed time for dua and seeking forgiveness. Waking up for suhoor teaches discipline and gives strength for the next day of fasting.',verse:'And in the hours before dawn, they sought forgiveness',verseRef:'Adh-Dhariyat 18',hadith:'Have suhoor, for in suhoor there is blessing — Agreed upon',action:'Wake up for suhoor before dawn — eat a healthy meal, make dua, and seek God\'s forgiveness',young:'Suhoor is like fuel for a car! It gives you energy for the whole day — never skip it! 🌅'},
    fr:{title:'La Bénédiction du Suhoor',desc:"Le suhoor est une grande bénédiction du Ramadan. Le Prophète l'a recommandé et conseillé de le retarder jusqu'à juste avant l'aube. C'est un moment béni pour les duas et le repentir. Se réveiller pour le suhoor enseigne la discipline.",verse:"Et aux heures avant l'aube, ils demandaient pardon",verseRef:'Adh-Dhariyat 18',hadith:'Prenez le suhoor, car dans le suhoor il y a une bénédiction — Unanimement reconnu',action:"Réveillez-vous pour le suhoor avant l'aube — mangez sainement et demandez pardon à Dieu",young:"Le suhoor c'est comme du carburant ! Il te donne l'énergie pour toute la journée — ne le rate jamais ! 🌅"}
  },
  {
    id:9, emoji:'🏃',
    ar:{title:'الفوائد الصحية',desc:'للصيام فوائد صحية كثيرة: يساعد الجسم على التخلص من السموم، وينظم مستوى السكر في الدم، ويريح الجهاز الهضمي، ويجدد خلايا الجسم. الصيام علاج وشفاء للجسم والروح معاً كما أكده العلم الحديث.',verse:'وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ إِنْ كُنْتُمْ تَعْلَمُونَ',verseRef:'البقرة ١٨٤',hadith:'صوموا تصحوا — حديث حسن',action:'اشرب ماءً كافياً عند الإفطار والسحور وكُل طعاماً صحياً — اجعل صيامك صحياً',young:'الصيام مفيد لجسمك! يساعد جسمك على تنظيف نفسه وتجديد طاقته — مثل إعادة تشغيل الحاسوب! 🏃'},
    en:{title:'Health Benefits',desc:'Fasting has many health benefits: it helps the body detoxify, regulates blood sugar, rests the digestive system, and renews body cells. Fasting is a treatment for both body and soul, as confirmed by modern science.',verse:'And that you fast is better for you, if only you knew',verseRef:'Al-Baqarah 184',hadith:'Fast and you will be healthy — Hasan hadith',action:'Drink enough water at iftar and suhoor and eat healthy food — make your fast a healthy one',young:'Fasting is great for your body! It helps your body clean itself and recharge — like restarting a computer! 🏃'},
    fr:{title:'Les Bienfaits pour la Santé',desc:"Le jeûne a de nombreux bienfaits pour la santé : il aide le corps à se détoxifier, régule la glycémie, repose le système digestif et renouvelle les cellules. Le jeûne est un traitement pour le corps et l'âme, confirmé par la science moderne.",verse:'Et que vous jeûniez est meilleur pour vous, si vous saviez',verseRef:'Al-Baqarah 184',hadith:'Jeûnez et vous serez en bonne santé — Hadith Hasan',action:"Buvez suffisamment d'eau à l'iftar et au suhoor et mangez sainement",young:"Le jeûne est super pour ton corps ! Il aide ton corps à se nettoyer et se recharger — comme redémarrer un ordinateur ! 🏃"}
  },
  {
    id:10, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'الترابط الاجتماعي',desc:'رمضان يجمع الأسرة والأصدقاء والجيران حول مائدة واحدة. موائد الإفطار تقرب القلوب وتزيل الخلافات وتنشر المحبة. في رمضان يزور الناس بعضهم ويتصلون بالأرحام ويعودون المرضى ويساعدون المحتاجين.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'ادعُ صديقاً أو جاراً لمشاركة الإفطار اليوم — واتصل بأحد أقاربك للاطمئنان عليه',young:'رمضان يجمع العائلة والأصدقاء! ادعُ صديقك للإفطار معكم واستمتعوا معاً 👨‍👩‍👧‍👦'},
    en:{title:'Social Bonding',desc:'Ramadan brings family, friends, and neighbors together around one table. Iftar gatherings bring hearts closer, resolve differences, and spread love. In Ramadan people visit each other, maintain family ties, visit the sick, and help the needy.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Maidah 2',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Invite a friend or neighbor to share iftar today — and call a relative to check on them',young:'Ramadan brings family and friends together! Invite a friend for iftar and enjoy it together 👨‍👩‍👧‍👦'},
    fr:{title:'Les Liens Sociaux',desc:"Le Ramadan rassemble famille, amis et voisins autour d'une même table. Les iftars rapprochent les coeurs, résolvent les différends et répandent l'amour. Pendant le Ramadan, les gens se visitent et aident les nécessiteux.",verse:'Et coopérez dans la bonté et la piété',verseRef:'Al-Maidah 2',hadith:'Le croyant pour le croyant est comme un édifice dont les parties se soutiennent — Unanimement reconnu',action:"Invitez un ami ou un voisin à partager l'iftar aujourd'hui — et appelez un proche",young:"Le Ramadan rassemble famille et amis ! Invite un ami pour l'iftar et profitez-en ensemble 👨‍👩‍👧‍👦"}
  },
  {
    id:11, emoji:'🎁',
    ar:{title:'الصدقة في رمضان',desc:'رمضان شهر الجود والكرم. كان النبي ﷺ أجود ما يكون في رمضان. الصدقة فيه مضاعفة الأجر. يخرج المسلمون زكاة الفطر قبل صلاة العيد تطهيراً للصائم من اللغو والرفث وطعمة للمساكين.',verse:'مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ',verseRef:'البقرة ٢٤٥',hadith:'كان رسول الله ﷺ أجود الناس وكان أجود ما يكون في رمضان — متفق عليه',action:'تصدق بشيء اليوم مهما كان قليلاً — المال أو الطعام أو الملابس أو حتى الابتسامة',young:'في رمضان، شارك ما عندك مع الآخرين! حتى الابتسامة صدقة 🎁'},
    en:{title:'Charity in Ramadan',desc:'Ramadan is the month of generosity. The Prophet was the most generous of people, and he was most generous during Ramadan. Charity is multiplied in its reward. Muslims pay Zakat al-Fitr before Eid prayer as purification for the fasting person and food for the poor.',verse:'Who is it that would loan Allah a goodly loan so He may multiply it for him?',verseRef:'Al-Baqarah 245',hadith:'The Messenger of God was the most generous of people, and he was most generous in Ramadan — Agreed upon',action:'Give charity today no matter how small — money, food, clothes, or even a smile',young:'In Ramadan, share what you have with others! Even a smile is charity 🎁'},
    fr:{title:'La Charité au Ramadan',desc:"Le Ramadan est le mois de la générosité. Le Prophète était le plus généreux des gens, surtout pendant le Ramadan. La charité y est multipliée en récompense. Les musulmans paient la Zakat al-Fitr avant la prière de l'Aïd.",verse:'Qui est celui qui ferait à Allah un prêt gracieux afin qu\'Il le lui multiplie ?',verseRef:'Al-Baqarah 245',hadith:'Le Messager de Dieu était le plus généreux, et il l\'était encore plus pendant le Ramadan — Unanimement reconnu',action:"Donnez la charité aujourd'hui, aussi petite soit-elle — de l'argent, de la nourriture ou un sourire",young:"Au Ramadan, partage ce que tu as avec les autres ! Même un sourire est une charité 🎁"}
  },
  {
    id:12, emoji:'🕋',
    ar:{title:'الاعتكاف',desc:'الاعتكاف هو لزوم المسجد للتفرغ لعبادة الله. كان النبي ﷺ يعتكف العشر الأواخر من رمضان. في الاعتكاف ينقطع المسلم عن الدنيا ويتفرغ للصلاة وقراءة القرآن والدعاء والذكر.',verse:'وَلَا تُبَاشِرُوهُنَّ وَأَنْتُمْ عَاكِفُونَ فِي الْمَسَاجِدِ',verseRef:'البقرة ١٨٧',hadith:'كان النبي ﷺ يعتكف في العشر الأواخر من رمضان — متفق عليه',action:'خصص وقتاً للعبادة بعيداً عن الهاتف والشاشات — حتى لو ساعة واحدة في المسجد',young:'الاعتكاف مثل معسكر للعبادة! تجلس في المسجد وتقرأ القرآن وتدعو الله — جرّب ذلك 🕋'},
    en:{title:"I'tikaf (Retreat)",desc:"I'tikaf is staying in the mosque to devote oneself to worshipping God. The Prophet used to observe i'tikaf during the last ten days of Ramadan. During i'tikaf, one disconnects from worldly matters and focuses on prayer, Quran, dua, and remembrance of God.",verse:'Do not have relations with them while you are staying for worship in the mosques',verseRef:'Al-Baqarah 187',hadith:'The Prophet used to observe i\'tikaf during the last ten days of Ramadan — Agreed upon',action:'Dedicate time for worship away from your phone and screens — even one hour at the mosque',young:"I'tikaf is like a worship camp! You sit in the mosque, read Quran, and talk to Allah — try it! 🕋"},
    fr:{title:"L'I'tikaf (Retraite)",desc:"L'i'tikaf c'est rester à la mosquée pour se consacrer à l'adoration de Dieu. Le Prophète observait l'i'tikaf pendant les dix dernières nuits du Ramadan. On se déconnecte du monde pour se concentrer sur la prière, le Coran et les duas.",verse:"N'ayez pas de rapports avec elles pendant que vous êtes en retraite dans les mosquées",verseRef:'Al-Baqarah 187',hadith:"Le Prophète observait l'i'tikaf pendant les dix dernières nuits du Ramadan — Unanimement reconnu",action:"Consacrez du temps à l'adoration loin de votre téléphone — même une heure à la mosquée",young:"L'i'tikaf c'est comme un camp d'adoration ! Tu restes à la mosquée et tu lis le Coran — essaie ! 🕋"}
  },
  {
    id:13, emoji:'🌃',
    ar:{title:'العشر الأواخر',desc:'العشر الأواخر من رمضان هي أفضل ليالي السنة. كان النبي ﷺ إذا دخلت العشر الأواخر أحيا الليل وأيقظ أهله وشد المئزر. فيها ليلة القدر التي هي خير من ألف شهر. هي فرصة ذهبية للعبادة والدعاء والتوبة.',verse:'إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',verseRef:'القدر ١',hadith:'كان النبي ﷺ إذا دخل العشر أحيا الليل وأيقظ أهله وشد المئزر — متفق عليه',action:'اجتهد في العبادة في العشر الأواخر — صلِّ الليل وادعُ واستغفر وتصدق',young:'العشر الأواخر مثل نهائيات المسابقة! ابذل أقصى جهدك في العبادة والدعاء 🌃'},
    en:{title:'The Last Ten Nights',desc:'The last ten nights of Ramadan are the best nights of the year. When they came, the Prophet would pray all night, wake his family, and intensify his worship. Among them is Laylat al-Qadr, better than a thousand months. It is a golden chance for worship, dua, and repentance.',verse:'Indeed, We sent it down during the Night of Decree',verseRef:'Al-Qadr 1',hadith:'When the last ten nights came, the Prophet would pray all night, wake his family, and strive hard — Agreed upon',action:'Strive in worship during the last ten nights — pray at night, make dua, seek forgiveness, and give charity',young:'The last ten nights are like the finals of a competition! Give your best in worship and dua 🌃'},
    fr:{title:'Les Dix Dernières Nuits',desc:"Les dix dernières nuits du Ramadan sont les meilleures de l'année. Le Prophète priait toute la nuit, réveillait sa famille et intensifiait son adoration. Parmi elles se trouve Laylat al-Qadr, meilleure que mille mois. C'est une occasion en or.",verse:'Nous l\'avons certes fait descendre pendant la Nuit du Destin',verseRef:'Al-Qadr 1',hadith:'Quand les dix dernières nuits arrivaient, le Prophète priait toute la nuit et réveillait sa famille — Unanimement reconnu',action:"Efforcez-vous dans l'adoration pendant les dix dernières nuits — priez, faites des duas et donnez",young:"Les dix dernières nuits sont comme les finales d'une compétition ! Donne le meilleur de toi 🌃"}
  },
  {
    id:14, emoji:'🎉',
    ar:{title:'فرحة العيد',desc:'عيد الفطر جائزة من الله للصائمين. يوم فرح وشكر واحتفال. يصلي المسلمون صلاة العيد ويتبادلون التهاني ويزورون الأرحام ويُفرحون الأطفال. للصائم فرحتان: فرحة عند فطره وفرحة عند لقاء ربه.',verse:'وَلِتُكَبِّرُوا اللَّهَ عَلَى مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ',verseRef:'البقرة ١٨٥',hadith:'للصائم فرحتان يفرحهما: إذا أفطر فرح وإذا لقي ربه فرح بصومه — متفق عليه',action:'أفرح بالعيد واشكر الله على إتمام الصيام — وأدخل السرور على قلب يتيم أو فقير',young:'العيد يوم احتفال رائع! البس أجمل ملابسك وزُر عائلتك وأفرح أصدقاءك 🎉'},
    en:{title:'Eid Celebration',desc:'Eid al-Fitr is God\'s reward for those who fasted. It is a day of joy, gratitude, and celebration. Muslims pray Eid prayer, exchange greetings, visit family, and bring happiness to children. The fasting person has two joys: one at breaking the fast and one when meeting their Lord.',verse:'And glorify Allah for guiding you, so that you may be grateful',verseRef:'Al-Baqarah 185',hadith:'The fasting person has two joys: when breaking the fast and when meeting their Lord — Agreed upon',action:'Celebrate Eid with gratitude — and bring joy to an orphan or someone in need',young:'Eid is an awesome celebration day! Wear your best clothes, visit family, and make your friends happy 🎉'},
    fr:{title:"La Fête de l'Aïd",desc:"L'Aïd al-Fitr est la récompense de Dieu pour les jeûneurs. C'est un jour de joie, de gratitude et de célébration. Les musulmans prient la prière de l'Aïd, échangent des voeux et visitent la famille. Le jeûneur a deux joies : à la rupture du jeûne et à la rencontre de son Seigneur.",verse:'Et glorifiez Allah pour vous avoir guidés, afin que vous soyez reconnaissants',verseRef:'Al-Baqarah 185',hadith:"Le jeûneur a deux joies : à la rupture du jeûne et à la rencontre de son Seigneur — Unanimement reconnu",action:"Célébrez l'Aïd avec gratitude — et apportez de la joie à un orphelin ou un nécessiteux",young:"L'Aïd est un jour de fête génial ! Mets tes plus beaux habits, visite ta famille et fais plaisir à tes amis 🎉"}
  },
  {
    id:15, emoji:'🌱',
    ar:{title:'عادات دائمة بعد رمضان',desc:'رمضان مدرسة تخرّج صائمين أفضل. العبرة ليست فقط بصيام الشهر بل بالاستمرار على العادات الحسنة بعده: صيام ستة من شوال، قراءة القرآن يومياً، صلاة الليل، الصدقة المستمرة، وحسن الخلق.',verse:'وَاعْبُدْ رَبَّكَ حَتَّى يَأْتِيَكَ الْيَقِينُ',verseRef:'الحجر ٩٩',hadith:'من صام رمضان ثم أتبعه ستاً من شوال كان كصيام الدهر — رواه مسلم',action:'اكتب ٣ عادات حسنة اكتسبتها في رمضان واستمر عليها بعده — لا تجعل رمضان ينتهي!',young:'لا تتوقف بعد رمضان! استمر في قراءة القرآن والصلاة والصدقة — كن بطلاً طوال السنة 🌱'},
    en:{title:'Lasting Habits After Ramadan',desc:'Ramadan is a school that graduates better people. The point is not just fasting for one month but continuing the good habits after it: fasting six days of Shawwal, daily Quran reading, night prayer, ongoing charity, and good character.',verse:'And worship your Lord until certainty comes to you',verseRef:'Al-Hijr 99',hadith:'Whoever fasts Ramadan then follows it with six days of Shawwal, it is as if they fasted the whole year — Muslim',action:'Write 3 good habits you gained in Ramadan and keep them going — do not let Ramadan end!',young:'Do not stop after Ramadan! Keep reading Quran, praying, and giving charity — be a champion all year 🌱'},
    fr:{title:'Des Habitudes Durables Après Ramadan',desc:"Le Ramadan est une école qui forme de meilleures personnes. L'important n'est pas seulement de jeûner un mois mais de continuer les bonnes habitudes après : jeûner six jours de Shawwal, lire le Coran quotidiennement, prier la nuit, donner la charité.",verse:"Et adore ton Seigneur jusqu'à ce que la certitude te parvienne",verseRef:'Al-Hijr 99',hadith:'Quiconque jeûne le Ramadan puis le suit de six jours de Shawwal, c\'est comme s\'il avait jeûné toute l\'année — Muslim',action:"Écrivez 3 bonnes habitudes acquises au Ramadan et continuez-les — ne laissez pas le Ramadan finir !",young:"N'arrête pas après le Ramadan ! Continue à lire le Coran et à donner — sois un champion toute l'année 🌱"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الآية التي فُرض فيها الصيام على المسلمين؟',opts:['سورة البقرة ١٨٣','سورة آل عمران ١٩٢','سورة النساء ١٠٣','سورة المائدة ٦'],correct:0,hint:'هذه الآية في أطول سورة في القرآن',quran:'البقرة ١٨٣'},
    en:{q:'Which verse prescribed fasting for Muslims?',opts:['Surah Al-Baqarah 183','Surah Al Imran 192','Surah An-Nisa 103','Surah Al-Maidah 6'],correct:0,hint:'This verse is in the longest surah of the Quran',quran:'Al-Baqarah 183'},
    fr:{q:'Quel verset a prescrit le jeûne aux musulmans ?',opts:['Sourate Al-Baqarah 183','Sourate Al Imran 192','Sourate An-Nisa 103','Sourate Al-Maidah 6'],correct:0,hint:'Ce verset est dans la plus longue sourate du Coran',quran:'Al-Baqarah 183'}
  },
  {
    ar:{q:'ليلة القدر خير من كم شهر؟',opts:['مئة شهر','خمسمئة شهر','ألف شهر','عشرة أشهر'],correct:2,hint:'الجواب مذكور في سورة القدر',quran:'القدر ٣'},
    en:{q:'Laylat al-Qadr is better than how many months?',opts:['One hundred months','Five hundred months','A thousand months','Ten months'],correct:2,hint:'The answer is mentioned in Surah Al-Qadr',quran:'Al-Qadr 3'},
    fr:{q:'Laylat al-Qadr est meilleure que combien de mois ?',opts:['Cent mois','Cinq cents mois','Mille mois','Dix mois'],correct:2,hint:'La réponse est mentionnée dans la Sourate Al-Qadr',quran:'Al-Qadr 3'}
  },
  {
    ar:{q:'بماذا يُستحب الإفطار في رمضان؟',opts:['الحليب','التمر','العصير','الماء البارد'],correct:1,hint:'النبي ﷺ كان يفطر عليه',quran:'رواه الترمذي'},
    en:{q:'What is it recommended to break the fast with?',opts:['Milk','Dates','Juice','Cold water'],correct:1,hint:'The Prophet used to break his fast with this',quran:'Tirmidhi'},
    fr:{q:'Avec quoi est-il recommandé de rompre le jeûne ?',opts:['Du lait','Des dattes','Du jus','De l\'eau froide'],correct:1,hint:'Le Prophète rompait son jeûne avec ceci',quran:'Tirmidhi'}
  },
  {
    ar:{q:'في أي شهر أُنزل القرآن الكريم؟',opts:['شعبان','محرم','رمضان','ذو الحجة'],correct:2,hint:'هذا هو شهر الصيام نفسه',quran:'البقرة ١٨٥'},
    en:{q:'In which month was the Quran revealed?',opts:['Shaban','Muharram','Ramadan','Dhul Hijjah'],correct:2,hint:'This is the fasting month itself',quran:'Al-Baqarah 185'},
    fr:{q:'En quel mois le Coran a-t-il été révélé ?',opts:['Chaabane','Mouharram','Ramadan','Dhul Hijja'],correct:2,hint:'C\'est le mois du jeûne lui-même',quran:'Al-Baqarah 185'}
  },
  {
    ar:{q:'ما هي زكاة الفطر؟',opts:['صدقة واجبة قبل صلاة العيد','صلاة في ليلة القدر','صيام ستة أيام بعد رمضان','دعاء عند السحور'],correct:0,hint:'هي تطهير للصائم من اللغو والرفث',quran:'متفق عليه'},
    en:{q:'What is Zakat al-Fitr?',opts:['Obligatory charity before Eid prayer','Prayer on Laylat al-Qadr','Fasting six days after Ramadan','Dua at suhoor time'],correct:0,hint:'It is purification for the fasting person',quran:'Agreed upon'},
    fr:{q:'Qu\'est-ce que la Zakat al-Fitr ?',opts:['Charité obligatoire avant la prière de l\'Aïd','Prière la Nuit du Destin','Jeûne de six jours après le Ramadan','Dua au moment du suhoor'],correct:0,hint:'C\'est une purification pour le jeûneur',quran:'Unanimement reconnu'}
  },
  {
    ar:{q:'أكمل الحديث: "الصيام جُنّة فإذا كان يوم صوم أحدكم فلا ..."',opts:['يأكل ولا يشرب','يرفث ولا يصخب','ينام ولا يستريح','يتحدث ولا يسأل'],correct:1,hint:'الصيام يمنع السلوك السيء',quran:'متفق عليه'},
    en:{q:'Complete the hadith: "Fasting is a shield. When one of you is fasting, let them not..."',opts:['Eat or drink','Use foul language or shout','Sleep or rest','Talk or ask'],correct:1,hint:'Fasting prevents bad behavior',quran:'Agreed upon'},
    fr:{q:'Complétez le hadith : « Le jeûne est un bouclier. Quand l\'un de vous jeûne, qu\'il ne... »',opts:['Mange ou boive','Dise des grossièretés ou crie','Dorme ou se repose','Parle ou demande'],correct:1,hint:'Le jeûne empêche le mauvais comportement',quran:'Unanimement reconnu'}
  },
  {
    ar:{q:'كم يوماً يُستحب صيامه بعد رمضان من شوال؟',opts:['ثلاثة أيام','عشرة أيام','ستة أيام','تسعة أيام'],correct:2,hint:'صيامها مع رمضان كصيام الدهر',quran:'رواه مسلم'},
    en:{q:'How many days is it recommended to fast after Ramadan in Shawwal?',opts:['Three days','Ten days','Six days','Nine days'],correct:2,hint:'Fasting these plus Ramadan equals fasting the whole year',quran:'Muslim'},
    fr:{q:'Combien de jours est-il recommandé de jeûner après le Ramadan en Shawwal ?',opts:['Trois jours','Dix jours','Six jours','Neuf jours'],correct:2,hint:'Jeûner ces jours plus le Ramadan équivaut à jeûner toute l\'année',quran:'Muslim'}
  },
  {
    ar:{q:'ما معنى الاعتكاف؟',opts:['الصيام في السفر','لزوم المسجد للعبادة','الصلاة بعد الفجر','قراءة القرآن كاملاً'],correct:1,hint:'النبي ﷺ كان يفعله في العشر الأواخر',quran:'البقرة ١٨٧'},
    en:{q:'What does I\'tikaf mean?',opts:['Fasting while traveling','Staying in the mosque for worship','Praying after Fajr','Reading the entire Quran'],correct:1,hint:'The Prophet used to do this in the last ten days',quran:'Al-Baqarah 187'},
    fr:{q:'Que signifie l\'I\'tikaf ?',opts:['Jeûner en voyage','Rester à la mosquée pour l\'adoration','Prier après le Fajr','Lire le Coran en entier'],correct:1,hint:'Le Prophète le faisait pendant les dix dernières nuits',quran:'Al-Baqarah 187'}
  },
  {
    ar:{q:'أكمل الحديث: "تسحروا فإن في السحور ..."',opts:['قوة','خيراً','بركة','صحة'],correct:2,hint:'هذه الكلمة تعني الزيادة والنفع',quran:'متفق عليه'},
    en:{q:'Complete the hadith: "Have suhoor, for in suhoor there is..."',opts:['Strength','Goodness','Blessing','Health'],correct:2,hint:'This word means increase and benefit',quran:'Agreed upon'},
    fr:{q:'Complétez le hadith : « Prenez le suhoor, car dans le suhoor il y a... »',opts:['La force','Le bien','La bénédiction','La santé'],correct:2,hint:'Ce mot signifie augmentation et bienfait',quran:'Unanimement reconnu'}
  },
  {
    ar:{q:'أكمل الآية: "وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ إِنْ كُنْتُمْ ..."',opts:['تؤمنون','تعلمون','تشكرون','تعقلون'],correct:1,hint:'هذه الآية في سورة البقرة عن فوائد الصيام',quran:'البقرة ١٨٤'},
    en:{q:'Complete the verse: "And that you fast is better for you, if only you..."',opts:['Believe','Knew','Were grateful','Understood'],correct:1,hint:'This verse is in Surah Al-Baqarah about the benefits of fasting',quran:'Al-Baqarah 184'},
    fr:{q:'Complétez le verset : « Et que vous jeûniez est meilleur pour vous, si vous... »',opts:['Croyez','Saviez','Étiez reconnaissants','Compreniez'],correct:1,hint:'Ce verset est dans la Sourate Al-Baqarah sur les bienfaits du jeûne',quran:'Al-Baqarah 184'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الإفطار',text:'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',tr:'رواه أبو داود'},
    en:{label:'Dua for Breaking Fast',text:'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',tr:'Thirst has gone, the veins have been moistened, and the reward is confirmed, God willing — Abu Dawud'},
    fr:{label:'Dua pour la Rupture du Jeûne',text:'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ',tr:'La soif est partie, les veines sont humidifiées et la récompense est confirmée, si Dieu le veut — Abu Dawud'} },
  { ar:{label:'دعاء ليلة القدر',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'رواه الترمذي'},
    en:{label:'Dua for Laylat al-Qadr',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'O Allah, You are Forgiving and love forgiveness, so forgive me — Tirmidhi'},
    fr:{label:'Dua pour Laylat al-Qadr',text:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',tr:'Ô Allah, Tu es Pardonneur et Tu aimes le pardon, alors pardonne-moi — Tirmidhi'} },
  { ar:{label:'دعاء صلاة التراويح',text:'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',tr:'رواه النسائي'},
    en:{label:'Dua in Tarawih',text:'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',tr:'Glory be to the Owner of might, dominion, grandeur, and majesty — Nasai'},
    fr:{label:'Dua dans les Tarawih',text:'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ',tr:'Gloire au Détenteur de la puissance, de la royauté, de la grandeur et de la majesté — Nasai'} },
  { ar:{label:'دعاء السحور',text:'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',tr:'رواه أبو داود'},
    en:{label:'Dua at Suhoor',text:'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',tr:'O Allah, for You I fasted and with Your provision I break my fast — Abu Dawud'},
    fr:{label:'Dua au Suhoor',text:'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',tr:'Ô Allah, pour Toi j\'ai jeûné et avec Ta provision je romps mon jeûne — Abu Dawud'} },
  { ar:{label:'دعاء الاستغفار',text:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',tr:'رواه الترمذي'},
    en:{label:'Dua of Repentance',text:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',tr:'I seek forgiveness from Allah the Almighty, there is no god but He, the Living, the Sustaining, and I repent to Him — Tirmidhi'},
    fr:{label:'Dua du Repentir',text:'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',tr:'Je demande pardon à Allah le Tout-Puissant, il n\'y a de dieu que Lui, le Vivant, le Subsistant, et je me repens — Tirmidhi'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, enable me to be grateful for Your favor which You bestowed upon me — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits — An-Naml 19'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'ramadan-xp';
const BADGES_KEY = 'ramadan-badges';
const READ_KEY = 'ramadan-read';
const STREAK_KEY = 'ramadan-streak';
const MODE_KEY = 'ramadan-mode';
const QUIZ_BEST_KEY = 'ramadan-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Persévérant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Très bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً في الفكر الإسلامي والدعوة والأخلاق. حاصل على جائزة الملك فيصل العالمية.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«رمضان والصيام» كتاب يتناول روحانية الصيام وأسراره وحكمه. يبيّن الشيخ الغزالي كيف أن رمضان مدرسة تربوية تهذب النفس وتقرب العبد من ربه. يغطي الكتاب آداب الصيام والإفطار والسحور وليلة القدر والعيد.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "رمضان والصيام" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books on Islamic thought, preaching, and ethics. King Faisal International Prize laureate.',
      bookTitle: 'About the Book',
      bookDesc: '"Ramadan and Fasting" explores the spirituality, secrets, and wisdom of fasting. Sheikh al-Ghazali shows how Ramadan is an educational school that refines the soul and brings the servant closer to God. The book covers fasting etiquette, iftar, suhoor, Laylat al-Qadr, and Eid.',
      sourcesTitle: 'Sources',
      sources: ['"Ramadan and Fasting" (Ramadan wal-Siyam) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique égyptien, surnommé "Le Littéraire de la Prédication". Auteur de plus de 94 livres. Lauréat du Prix Roi Faysal.',
      bookTitle: 'À Propos du Livre',
      bookDesc: '« Ramadan et le Jeûne » explore la spiritualité, les secrets et la sagesse du jeûne. Le Sheikh al-Ghazali montre comment le Ramadan est une école éducative qui raffine l\'âme et rapproche le serviteur de Dieu.',
      sourcesTitle: 'Sources',
      sources: ['"Ramadan et le Jeûne" (Ramadan wal-Siyam) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي عن رمضان بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "رمضان والصيام" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/ramadan-wal-siyam'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom about Ramadan interactively.'},
      {title:'📚 Sources',body:'"Ramadan and Fasting" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/ramadan-wal-siyam'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali sur le Ramadan.'},
      {title:'📚 Sources',body:'"Ramadan et le Jeûne" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalités',body:'Trois langues (AR/EN/FR), 3 thèmes, 15 cartes, quiz interactif, système XP et badges, 2 modes d\'âge.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifié avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/ramadan-wal-siyam'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند الإفطار','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua at iftar','⭐ Complete all 15 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas à l\'iftar','⭐ Complétez les 15 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
