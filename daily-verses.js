// مكتبة الآيات اليومية (معتمدة على ترجمة فاندايك والمصححة إملائياً ولغوياً)
const dailyVersesAr = [
    { verse: "اتكل على الرب بكل قلبك، وعلى فهمك لا تعتمد.", ref: "سفر الأمثال 3: 5" },
    { verse: "الرب راعيّ فلا يعوزني شيء.", ref: "سفر المزامير 23: 1" },
    { verse: "سلاماً أترك لكم. سلامي أعطيكم. ليس كما يعطي العالم أعطيكم أنا.", ref: "إنجيل يوحنا 14: 27" },
    { verse: "أستطيع كل شيء في المسيح الذي يقوينّي.", ref: "رسالة بولس الرسول إلى أهل فيلبي 4: 13" },
    { verse: "الرب نوري وخلاصي، فممن أخاف؟ الرب حصن حياتي، فممن أرتعب؟", ref: "سفر المزامير 27: 1" },
    { verse: "لا تحفَظْ ولا ترتعب، لأن الرب إلهك معك حيثما تذهب.", ref: "سفر يشوع 1: 9" },
    { verse: "ألقِ على الرب همك وهو يئولك. لا يدع الصديق يتزعزع إلى الأبد.", ref: "سفر المزامير 55: 22" },
    { verse: "لأنه هكذا أحب الله العالم حتى بذل ابنه الوحيد، لكي لا يهلك كل من يؤمن به بل تكون له الحياة الأبدية.", ref: "إنجيل يوحنا 3: 16" },
    { verse: "إن كان الله معنا، فمن علينا؟", ref: "رسالة بولس الرسول إلى أهل رومية 8: 31" },
    { verse: "طوبى للرجل الذي يحتمل التجربة، لأنه إذا تزكى يأخذ إكليل الحياة الذي وعد به الرب للذين يحبونه.", ref: "رسالة يعقوب 1: 12" },
    { verse: "تعالوا إليّ يا جميع المتعبين والمثقلي الأحمال، وأنا أريحكم.", ref: "إنجيل متى 11: 28" },
    { verse: "الرب ملجأ للمنسحق، ملجأ في أزمنة الضيق.", ref: "سفر المزامير 9: 9" },
    { verse: "لأننا بنعمة مخلصون بالإيمان، وذلك ليس منكم. هو عطية الله.", ref: "رسالة بولس الرسول إلى أهل أفسس 2: 8" },
    { verse: "طوبى لمن إله يعقوب معينه، ورجاؤه على الرب إلهه.", ref: "سفر المزامير 146: 5" },
    { verse: "عالمين أن الضيق ينشئ صبراً، والصبر تزكية، والتزكية رجاءً.", ref: "رسالة بولس الرسول إلى أهل رومية 5: 3-4" },
    { verse: "طوبى للصلحا, لأنهم بنو الله يدعون.", ref: "إنجيل متى 5: 9" },
    { verse: "طوبى لصانعي السلام، لأنهم أبناء الله يدعون.", ref: "إنجيل متى 5: 9" },
    { verse: "طوبى لجياع البر وعطاشه، لأنهم يشبعون.", ref: "إنجيل متى 5: 6" },
    { verse: "طوبى للمساكين بالروح، لأن لهم ملكوت السماوات.", ref: "إنجيل متى 5: 3" },
    { verse: "طوبى للأنقياء القلب، لأنهم يعاينون الله.", ref: "إنجيل متى 5: 8" },
    { verse: "طوبى للمحزونين، لأنهم يتعزون.", ref: "إنجيل متى 5: 4" },
    { verse: "طوبى للودعاء، لأنهم يرثون الأرض.", ref: "إنجيل متى 5: 5" },
    { verse: "طوبى للرحماء، لأنهم يرحمون.", ref: "إنجيل متى 5: 7" },
    { verse: "أما الذين ينتظرون الرب فيجددون قوة. يرفعون أجنحة كالصقور. يركضون ولا يتعبون. يمشون ولا يعيون.", ref: "سفر إشعياء 40: 31" },
    { verse: "طوبى للرجل الذي لا يسجل له الرب خطيئة، ولا في روحه مكر.", ref: "سفر المزامير 32: 2" },
    { verse: "أنا هو الطريق والحق والحياة. ليس أحد يأتي إلى الآب إلا بي.", ref: "إنجيل يوحنا 14: 6" },
    { verse: "فتشوا الكتب لأنكم تظنون أن لكم فيها حياة أبدية. وهي التي تشهد لي.", ref: "إنجيل يوحنا 5: 39" },
    { verse: "كونوا أقوياء وتشجعوا، لا تخافوا ولا ترهبوا وجوههم، لأن الرب إلهك سائر معك لا يخذلك ولا يتركك.", ref: "سفر التثنية 31: 6" },
    { verse: "اصبر للرب وانتظره. لا تغر من المنجح طريقه، من الرئي تدابيره.", ref: "سفر المزامير 37: 7" },
    { verse: "لأن عيني الرب على الصديقين، وأذنيه إلى طلبتهم.", ref: "رسالة بطرس الرسول الأولى 3: 12" },
    { verse: "طوبى للرجل الذي يحتمل التجربة، لأنه إذا تزكى يأخذ إكليل الحياة.", ref: "رسالة يعقوب 1: 12" }
];

const dailyVersesEn = [
    { verse: "Trust in the LORD with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5 (NIV)" },
    { verse: "The LORD is my shepherd, I lack nothing.", ref: "Psalm 23:1 (NIV)" },
    { verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.", ref: "John 14:27 (NIV)" },
    { verse: "I can do all this through him who gives me strength.", ref: "Philippians 4:13 (NIV)" },
    { verse: "The LORD is my light and my salvation—whom shall I fear? The LORD is the stronghold of my life—of whom shall I be afraid?", ref: "Psalm 27:1 (NIV)" },
    { verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.", ref: "Joshua 1:9 (NIV)" },
    { verse: "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.", ref: "Psalm 55:22 (NIV)" },
    { verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", ref: "John 3:16 (NIV)" },
    { verse: "If God is for us, who can be against us?", ref: "Romans 8:31 (NIV)" },
    { verse: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life.", ref: "James 1:12 (NIV)" },
    { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28 (NIV)" },
    { verse: "The LORD is a refuge for the oppressed, a stronghold in times of trouble.", ref: "Psalm 9:9 (NIV)" },
    { verse: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.", ref: "Ephesians 2:8 (NIV)" },
    { verse: "Blessed are those whose help is the God of Jacob, whose hope is in the LORD their God.", ref: "Psalm 146:5 (NIV)" },
    { verse: "Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.", ref: "Romans 5:3-4 (NIV)" },
    { verse: "Blessed are the peacemakers, for they will be called children of God.", ref: "Matthew 5:9 (NIV)" },
    { verse: "Blessed are those who hunger and thirst for righteousness, for they will be filled.", ref: "Matthew 5:6 (NIV)" },
    { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", ref: "Matthew 5:3 (NIV)" },
    { verse: "Blessed are the pure in heart, for they will see God.", ref: "Matthew 5:8 (NIV)" },
    { verse: "Blessed are those who mourn, for they will be comforted.", ref: "Matthew 5:4 (NIV)" },
    { verse: "Blessed are the meek, for they will inherit the earth.", ref: "Matthew 5:5 (NIV)" },
    { verse: "Blessed are the merciful, for they will be shown mercy.", ref: "Matthew 5:7 (NIV)" },
    { verse: "Those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.", ref: "Isaiah 40:31 (NIV)" },
    { verse: "Blessed is the one whose sin the LORD does not count against their spirit and in whose deceited spirit there is no guile.", ref: "Psalm 32:2 (NIV)" },
    { verse: "I am the way and the truth and the life. No one comes to the Father except through me.", ref: "John 14:6 (NIV)" },
    { verse: "You study the Scriptures diligently because you think that in them you have eternal life. These are the very scriptures that testify about me.", ref: "John 5:39 (NIV)" },
    { verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.", ref: "Deuteronomy 31:6 (NIV)" },
    { verse: "Be still before the LORD and wait patiently for him; do not fret when people succeed in their ways.", ref: "Psalm 37:7 (NIV)" },
    { verse: "For the eyes of the Lord are on the righteous and his ears are attentive to their prayer.", ref: "1 Peter 3:12 (NIV)" }
];

// دالة حساب وررض الآية بناءً على يوم السنة الحالي تلقائياً
function displayDailyVerse() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // المطابقة التلقائية مع حجم المصفوفة لتعمل طوال السنة دون أخطاء
    const arIndex = dayOfYear % dailyVersesAr.length;
    const enIndex = dayOfYear % dailyVersesEn.length;

    // حقن النص العربي في الصفحة إن وجد العنصر
    const arElement = document.getElementById('daily-verse-ar');
    if (arElement) {
        arElement.innerHTML = `«${dailyVersesAr[arIndex].verse}» <br><small style="color: #ffd700; font-weight: bold; display: block; margin-top: 6px;">(${dailyVersesAr[arIndex].ref} - ترجمة فاندايك)</small>`;
    }

    // حقن النص الإنجليزي في الصفحة إن وجد العنصر
    const enElement = document.getElementById('daily-verse-en');
    if (enElement) {
        enElement.innerHTML = `"${dailyVersesEn[enIndex].verse}" <br><small style="color: #ffd700; font-weight: bold; display: block; margin-top: 6px;">(${dailyVersesEn[enIndex].ref})</small>`;
    }
}

// تنفيذ الدالة عند اكتمال تحميل الصفحة
window.addEventListener('DOMContentLoaded', displayDailyVerses => {
    displayDailyVerse();
});
