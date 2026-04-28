// مصفوفة الصور
const images = [
    "https://image2url.com/r2/default/images/1775641754625-4ca94b10-61af-4397-aa47-c4bb708a6b0f.jpg",
    "https://image2url.com/r2/default/images/1775641928762-79e00e64-77d7-45bc-ab97-aeba517c7ac4.jpg",
    "https://image2url.com/r2/default/images/1775643212701-3517368e-7061-4d4b-a5f1-2078c3d614f1.jpg",
    "https://image2url.com/r2/default/images/1775643321978-d362a308-16de-4b69-ae96-474f7883eb3b.jpg",
    "https://image2url.com/r2/default/images/1775643385202-f78a51f5-ac3e-4f99-9bbc-8994f1ed7b40.jpg",
    "https://image2url.com/r2/default/images/1775643460429-bc01f758-5254-4e31-a096-1945bcd8d53c.jpg",
    "https://image2url.com/r2/default/images/1775643536967-3d427a40-fd4f-4251-952d-0e5c27011ea6.jpg",
    "https://image2url.com/r2/default/images/1775643582181-b053d3de-bced-4a91-a8bd-f1c5e9152646.jpg",
    "https://image2url.com/r2/default/images/1775643628647-6434dbaf-b800-4ec1-8b54-807687fbb4f2.jpg",
    "https://tooltop.cloud/img/FiWqi4rp", "https://tooltop.cloud/img/hsnOYtGU", "https://tooltop.cloud/img/oK9ipF9D",
    "https://tooltop.cloud/img/FfJ8lDw8", "https://tooltop.cloud/img/3WqKxe2x", "https://tooltop.cloud/img/kGZyl8eE",
    "https://tooltop.cloud/img/bRWjGwaz", "https://i.ibb.co/v4mqFx5h/Picsart-26-04-27-18-27-49-646.jpg",
    "https://i.ibb.co/GQkxcWWZ/Picsart-26-04-27-18-31-09-646.jpg", "https://i.ibb.co/kgpH5N0k/Picsart-26-04-27-18-24-56-193.jpg",
    "https://i.ibb.co/zVsrxYv7/Picsart-26-04-27-18-27-06-992.jpg", "https://i.ibb.co/rffXCFn8/Picsart-26-04-27-18-25-40-109.jpg",
    "https://i.ibb.co/p63sMTy7/Picsart-26-04-27-18-29-33-300.jpg", "https://i.ibb.co/NgFsxBmZ/Picsart-26-04-27-18-22-28-561.jpg",
    "https://i.ibb.co/chb07f4y/Picsart-26-04-27-18-29-02-426.jpg", "https://i.ibb.co/m5hGHH6R/Picsart-26-04-27-18-23-23-419.jpg",
    "https://i.ibb.co/v6Gb5F8C/Picsart-26-04-27-18-22-55-661.jpg", "https://i.ibb.co/N2f3CJNj/Picsart-26-04-27-18-24-19-644.jpg",
    "https://i.ibb.co/sdLq9XSs/Picsart-26-04-27-18-21-24-954.jpg", "https://i.ibb.co/PsHG6RK0/IMG-20260427-181705-741.jpg",
    "https://i.ibb.co/8LphP7dP/Picsart-26-04-27-18-26-20-441.jpg", "https://i.ibb.co/3Y1Z4qZr/IMG-20260427-181705-711.jpg",
    "https://i.ibb.co/RkMQbLmG/IMG-20260427-181705-295.jpg", "https://i.ibb.co/NngVMZP9/Picsart-26-04-27-18-20-38-260.jpg",
    "https://i.ibb.co/RT6WqpCw/IMG-20260427-181705-269.jpg", "https://i.ibb.co/CDJP7wF/IMG-20260427-181705-661.jpg",
    "https://i.ibb.co/P08RzSY/Picsart-26-04-27-18-21-56-733.jpg", "https://i.ibb.co/fV78FJzW/IMG-20260427-181653-871.jpg",
    "https://i.ibb.co/99sJ1Lvw/IMG-20260427-181701-332.jpg", "https://i.ibb.co/sdZZNxzR/IMG-20260427-181700-979.jpg",
    "https://i.ibb.co/KjJhr1D8/IMG-20260427-181700-953.jpg", "https://i.ibb.co/7JjPHGWP/IMG-20260427-181645-569.jpg"
];

// مصفوفة الفيديوهات
const videos = [
    "https://streamtape.com/v/9yZow42rORta2B0", "https://streamtape.com/v/OW0bOMgjWGTZdlL", "https://streamtape.com/v/MxLKOyrBK1FmkKQ",
    "https://streamtape.com/v/8OLw7GX31biXwM", "https://streamtape.com/v/JY40g24vlmijWd6", "https://streamtape.com/v/DZQXxyR291skg18",
    "https://streamtape.com/v/l0qRVGaPZOc7ggV", "https://streamtape.com/v/6wavDpkozQS98eb", "https://streamtape.com/v/9eeMvPY9mpuyYP",
    "https://streamtape.com/v/BqOkOVjQ6oTy1dd", "https://streamtape.com/v/Pb0xoqjmglTWw1", "https://streamtape.com/v/X11dMd04qPsDMvD",
    "https://streamtape.com/v/MoVJ0Ya4RPhwg9", "https://streamtape.com/v/DXYpJRrlAafAqX", "https://streamtape.com/v/oLmk1Lk7KpHJV16",
    "https://streamtape.com/v/OWpZ0x4zjAIZdBm", "https://streamtape.com/v/6W8OqLrx1KFVZV", "https://streamtape.com/v/mOyk9GOl3VTkL3",
    "https://streamtape.com/v/DWVBXKJRPQck7lK", "https://streamtape.com/v/4Ww3YbJrlMSKYxg", "https://streamtape.com/v/WyXmQDm7zyTbw2w",
    "https://streamtape.com/v/JKGQzajRYzfZYk", "https://streamtape.com/v/Aw1Yq0xzL2CX6d3", "https://streamtape.com/v/41GxXpAxgQuyWx",
    "https://streamtape.com/v/Xjo8OaZ8gjIBg0", "https://streamtape.com/v/J2aDOWDLzWCjzaZ", "https://streamtape.com/v/BAKXgPKpPyHybdO",
    "https://streamtape.com/v/m91xQ4D0J8tbbMp", "https://streamtape.com/v/6pom6LRRl9ivaB", "https://streamtape.com/v/PxRyGW4KGPH0qKl",
    "https://streamtape.com/v/xbLGqLb8Lxik4Dy", "https://streamtape.com/v/1Jxkz3ZJ0vFb1w", "https://streamtape.com/v/DoorjrxJk2cLeY",
    "https://streamtape.com/v/1pJXOwva7MsdPJ", "https://streamtape.com/v/OabeeojjOdcG7y", "https://streamtape.com/v/gaj7K6y4ZJFg1M",
    "https://streamtape.com/v/QPkgqjLqb4s0l1b", "https://streamtape.com/v/dVB107Rk86ckOQD", "https://streamtape.com/v/b78R4RGbjduPAPX",
    "https://streamtape.com/v/xvMRLJgQ7yukKb1", "https://streamtape.com/v/3ro1gmO684Ude8g", "https://streamtape.com/v/3DjgxyOKpPSdYRo"
];

const descriptions = [
    "مقطع حصري تم تسريبه اليوم، شاهد قبل الحذف 🎥",
    "أقوى إطلالة لعام 2026، جودة 4K حقيقية 💎",
    "سهرة خاصة من قلب دبي، لا تفوت التفاصيل 🔥",
    "فيديو تفاعلي جديد، اضغط للمشاهدة الآن 💄",
    "محتوى VIP للمشتركين فقط، استمتع بالعرض 👠",
    "جلسة تصوير خلف الكواليس، محتوى حصري 🌟",
    "ترند التيك توك المسرب، شاهد الحقيقة كاملة 💋",
    "إصدار خاص وحصري لمنصة OnlySecrets فقط 🔞"
];

const titles = ['مصرية VIP 🔥', 'سورية مثيرة HD', 'سعودية ترند 2026', 'لبنانية مغرية 🎥', 'مغربية حصري 💋', 'خليجية نار 🌶️'];

// رابط إعلان الـ PopUnder المباشر الخاص بك من JuicyAds لضمان أقصى ربح
const AD_URL = "https://www.juicyads.rocks/click.php?c=446433w2q284u4r2p2a4y2e414";

// كائن (Object) لتتبع النقرات لكل خانة بشكل مستقل تماماً
const cardTrackers = {};

function initApp() {
    const grid = document.getElementById('mainGrid');
    images.forEach((imgSrc, index) => {
        const title = titles[index % titles.length];
        const videoLink = videos[index % videos.length] || videos[0];
        const desc = descriptions[index % descriptions.length];
        const cardId = `card-${index}`; // معرف فريد لكل خانة

        // تهيئة العداد لكل خانة عند التشغيل
        cardTrackers[cardId] = 0;

        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="thumb-box" onclick="handleSmartAction('${cardId}', '${videoLink}')">
                <img src="${imgSrc}" loading="lazy">
                <div class="play-overlay"><i class="fas fa-play-circle"></i></div>
            </div>
            <div class="card-content">
                <h3>${title} #${index + 1}</h3>
                <p class="card-desc" style="font-size: 13px; color: #bbb; margin-bottom: 10px; height: 40px; overflow: hidden;">${desc}</p>
                <button onclick="handleSmartAction('${cardId}', '${videoLink}')" class="watch-btn">
                   <i class="fas fa-play"></i> شاهد الفيديو الآن
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// دالة التحكم الذكي: تجبر الزائر على فتح إعلان "لكل خانة" بشكل منفصل
function handleSmartAction(id, videoUrl) {
    if (cardTrackers[id] % 2 === 0) {
        // إذا كانت النقرة الأولى على "هذه الخانة تحديداً" -> افتح إعلان
        window.open(AD_URL, '_blank');
    } else {
        // إذا كانت النقرة الثانية على "نفس الخانة" -> افتح الفيديو
        window.open(videoUrl, '_blank');
    }
    // زيادة العداد الخاص بهذه الخانة فقط لضمان تكرار العملية مع بقية الخانات
    cardTrackers[id]++;
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setTimeout(spawnChat, 4000);
});

function spawnChat() {
    const chat = document.createElement('div');
    chat.className = 'neon-chat';
    // الشات يفتح دائماً إعلان لزيادة الربح
    chat.onclick = () => window.open(AD_URL, '_blank');
    chat.innerHTML = `
        <div class="chat-user">
            <img src="https://i.pravatar.cc/100?img=32">
            <div style="text-align:right">
                <div style="font-weight:700; font-size:15px; color:#00f3ff">Sonia Secret <i class="fas fa-check-circle"></i></div>
                <div style="font-size:11px; color:#00ff00;">متصلة الآن</div>
            </div>
        </div>
        <div style="padding:15px; font-size:14px; text-align:right;">أهلين يا بطل.. حابب تشوف حصريات اليوم؟ 😉🔥</div>
    `;
    document.body.appendChild(chat);
}