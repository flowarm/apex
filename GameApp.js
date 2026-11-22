// GameApp.js
// ===== افزودن/ویرایش برنامه‌ها =====
// downloadUrl: لینک فایل یا صفحه دانلود.
// directDownload: true = فایل مستقیم؛ false = صفحه سایت یا دانلود.
// keywords: کلمات جایگزین برای جست‌وجو.

// ===== اعلان‌ها =====
// active:true نمایش داده می‌شود و active:false مخفی می‌شود.

const notificationsData = [
  {
    title: 'به اپ‌ورس خوش آمدی!',
    message: 'برنامه‌های موردعلاقه‌ات را پیدا کن و برای دیدن جزئیات روی هر برنامه بزن.',
    date: 'اعلان خوش‌آمدگویی',
    active: true
  }
];

// ===== فهرست برنامه‌ها =====

const appsData = [
  {
    id: 'minecraft',
    downloadUrl: './minecraft-app.html',
    directDownload: false,
    cover: 'https://uploadkon.ir/uploads/dd3d20_26Minecraft.jpg',
    name: 'ماینکرفت',
    desc: 'بازی ویدیویی',
    category: 'بازی',
    emoji: '⛏️',
    bg: '#1cbd67',
    rating: 4.8,
    size: '600+ مگابایت',
    tag: 'popular',
    detail: 'ماینکرفت یک بازی جهان‌باز است که در آن می‌توانی بسازی، کاوش کنی و ماجراجویی کنی.',
    keywords: [
      'ماینکرفت','ماینکرافت','minecraft','بازی ویدیویی','بازی ساختنی',
      'ساخت و ساز','جهان باز','سندباکس','بازی جهان باز','ایکس باکس','مایکروسافت'
    ]
  },
  {
    id: 'clash-of-clans',
    downloadUrl: './clash-of-clans-app.html',
    directDownload: false,
    cover: 'https://uploadkon.ir/uploads/afbc20_26Clash-of-Clans-Logo-7-150x150.jpg',
    name: 'کلش آو کلنز',
    desc: 'بازی استراتژیک',
    category: 'بازی',
    emoji: '🏰',
    bg: '#8b5cf6',
    rating: 4.6,
    size: '300+ مگابایت',
    tag: 'popular',
    detail: 'کلش آو کلنز یک بازی استراتژیک آنلاین است که در آن دهکده‌ات را می‌سازی، نیرو تربیت می‌کنی و در نبردهای حماسی با بازیکنان سراسر جهان رقابت می‌کنی.',
    keywords: [
      'کلش آو کلنز','کلش','clash of clans','clash','coc','بازی استراتژیک',
      'بازی جنگی','بازی آنلاین','ساخت دهکده','کلن','کلن سازی','نبرد آنلاین',
      'سوپرسل','supercell','بازی موبایل','بازی اندروید','بازی آیفون',
      'دانلود کلش','دانلود کلش آو کلنز','بهترین بازی استراتژیک'
    ]
  },
  {
    id: 'poppy-playtime-chapter-1',
    downloadUrl: 'https://www.dl.farsroid.com/game/Poppy-Playtime-Chapter-1-1.0.6(www.Farsroid.com).apk',
    directDownload: true,
    cover: 'https://uploadkon.ir/uploads/94da22_26images-4-.jpeg',
    name: 'پاپی پلی تایم ۱',
    desc: 'بازی ترسناک و پازلی',
    category: 'بازی',
    emoji: '🧸',
    bg: '#e6a23c',
    rating: 4.4,
    size: '565 مگابایت',
    tag: 'popular',
    detail: 'پاپی پلی تایم چپتر ۱ یک بازی ترسناک و پازلی است که در آن باید از کارخانه اسباب‌بازی متروکه جان سالم به در ببری و با استفاده از GrabPack معماها را حل کنی.',
    keywords: [
      'پاپی پلی تایم','پاپی پلی تایم چپتر ۱','poppy playtime',
      'poppy playtime chapter 1','بازی ترسناک','بازی پازلی','بازی وحشت',
      'هیگی واگی','huggy wuggy','کارخانه اسباب بازی','گرپ پک','grabpack',
      'مب اینترتینمنت','mob entertainment','بازی اندروید','بازی موبایل',
      'دانلود پاپی پلی تایم'
    ]
  },
  {
    id: 'poppy-playtime-chapter-2',
    downloadUrl: 'https://www.dl.farsroid.com/game/Poppy-Playtime-Chapter-2-Full-1.2(www.Farsroid.com).apk',
    directDownload: true,
    cover: 'https://uploadkon.ir/uploads/b5a122_265983440c-f299-472a-9c75-5624b88bfb81.png',
    name: 'پاپی پلی تایم چپتر ۲',
    desc: 'بازی ترسناک و پازلی',
    category: 'بازی',
    emoji: '🧸',
    bg: '#e6a23c',
    rating: 4.9,
    size: '979 مگابایت',
    tag: 'popular',
    detail: 'پاپی پلی تایم چپتر ۲ ادامه ماجراجویی ترسناک در کارخانه اسباب‌بازی است که در آن با شخصیت‌های جدید و معماهای پیچیده‌تر روبرو می‌شوی و باید رازهای بیشتری را کشف کنی.',
    keywords: [
      'پاپی پلی تایم','پاپی پلی تایم چپتر ۲','poppy playtime',
      'poppy playtime chapter 2','بازی ترسناک','بازی پازلی','بازی وحشت',
      'هاگی واگی','huggy wuggy','مامی لانگ لگز','mommy long legs',
      'کارخانه اسباب بازی','گرپ پک','grabpack','مب اینترتینمنت',
      'mob entertainment','بازی اندروید','بازی موبایل','دانلود پاپی پلی تایم'
    ]
  }
];