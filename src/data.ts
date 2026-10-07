export interface Word {
  id: number;
  oldTurkish: string;
  modern: string;
  meaning: string;
  category: string;
  example: string;
  origin: string;
  note: string;
}

export const WORDS: Word[] = [
  { id: 1, oldTurkish: "Süt", modern: "Süt", meaning: "Hayvanlardan elde edilen beyaz içecek", category: "Yiyecek-İçecek", example: "Süt içmek sağlığa iyi gelir.", origin: "Eski Türkçe", note: "Bugünkü Türkçede aynı şekilde kullanılır" },
  { id: 2, oldTurkish: "Kök", modern: "Gök / Mavi", meaning: "Gökyüzü rengi, mavi", category: "Doğa", example: "Kök tengri - Mavi gökyüzü", origin: "Eski Türkçe", note: "Göktürk yazıtlarında da geçen kadim bir kelime" },
  { id: 3, oldTurkish: "Bilge", modern: "Bilge / Bilgin", meaning: "Bilgi sahibi, akıllı, hikmet sahibi kişi", category: "İnsan", example: "Bilge kağan - Bilge hakan", origin: "Eski Türkçe", note: "Bugün de aynı anlamda kullanılır" },
  { id: 4, oldTurkish: "Bedük", modern: "Büyük", meaning: "İri, ulu, büyük", category: "Sıfat", example: "Bedük tag - Büyük dağ", origin: "Eski Türkçe", note: "'Büyük' kelimesinin eski formu" },
  { id: 5, oldTurkish: "Tapug", modern: "Hizmet", meaning: "Hizmet, kulluk, ibadet", category: "Toplum", example: "Tapug kılmak - Hizmet etmek", origin: "Eski Türkçe", note: "Tapmak fiilinden türetilmiştir" },
  { id: 6, oldTurkish: "Yalavaç", modern: "Elçi", meaning: "Elçi, haberci, peygamber", category: "Toplum", example: "Yalavaç keldi - Elçi geldi", origin: "Eski Türkçe", note: "Peygamber anlamında da kullanılmıştır" },
  { id: 7, oldTurkish: "Sü", modern: "Ordu / Asker", meaning: "Asker, ordu, savaşçı kuvvet", category: "Askerlik", example: "Sü başı - Ordu komutanı", origin: "Eski Türkçe", note: "Sübaşı kelimesinin kökü" },
  { id: 8, oldTurkish: "Alpagut", modern: "Yiğit Savaşçı", meaning: "Cesur, kahraman, tek başına savaşan yiğit", category: "Askerlik", example: "Alpagut er - Yiğit savaşçı", origin: "Eski Türkçe", note: "Alp ve er kelimelerinin birleşimi" },
  { id: 9, oldTurkish: "Bitig", modern: "Yazı / Kitap", meaning: "Yazı, kitap, mektup, belge", category: "Kültür", example: "Bitig yazmak - Kitap yazmak", origin: "Eski Türkçe", note: "Yazılı kültürün temel kavramı" },
  { id: 10, oldTurkish: "Tamga", modern: "Damga / Mühür", meaning: "Mühür, işaret, sembol, damga", category: "Kültür", example: "Tamga basmak - Damga vurmak", origin: "Eski Türkçe", note: "Her boyun kendine ait tamgası vardı" },
  { id: 11, oldTurkish: "Tutuk", modern: "Vali / Yönetici", meaning: "Vali, bir bölgenin yöneticisi", category: "Toplum", example: "Tutuk beg - Vali bey", origin: "Eski Türkçe", note: "Tutmak (idare etmek) fiilinden gelir" },
  { id: 12, oldTurkish: "Yağı", modern: "Düşman", meaning: "Düşman, hasım, rakip", category: "Askerlik", example: "Yağı keldi - Düşman geldi", origin: "Eski Türkçe", note: "Yağılamak: düşmanlık etmek" },
  { id: 13, oldTurkish: "İgsiz", modern: "Sağlıklı", meaning: "Hastalıksız, sağlıklı, sıhhatli", category: "Sıfat", example: "İgsiz bolmak - Sağlıklı olmak", origin: "Eski Türkçe", note: "İg (hastalık) + siz eki" },
  { id: 14, oldTurkish: "Yazı", modern: "Ova / Düzlük", meaning: "Düz arazi, ova, step", category: "Doğa", example: "Yazı yerde - Ova yerde", origin: "Eski Türkçe", note: "'Yaz' mevsim adının kökü" },
  { id: 15, oldTurkish: "Katun", modern: "Hatun / Kraliçe", meaning: "Hükümdar eşi, kraliçe, hanım", category: "İnsan", example: "Katun hatun - Kraliçe hanım", origin: "Eski Türkçe", note: "Hatun kelimesinin eski biçimi" },
  { id: 16, oldTurkish: "Buyruk", modern: "Emir / Komutan", meaning: "Emir, buyruk, komutan", category: "Askerlik", example: "Buyruk bermek - Emir vermek", origin: "Eski Türkçe", note: "Buyurmak fiilinden türemiştir" },
  { id: 17, oldTurkish: "Uluğ", modern: "Ulu / Büyük", meaning: "Büyük, yüce, ulu, muhteşem", category: "Sıfat", example: "Uluğ beg - Ulu bey", origin: "Eski Türkçe", note: "Uluğbey: meşhur Türk astronomu" },
  { id: 18, oldTurkish: "Ögdülmiş", modern: "Övülmüş", meaning: "Övülmüş, methedilmiş kişi", category: "Sıfat", example: "Ögdülmiş er - Övülmüş kişi", origin: "Eski Türkçe", note: "Kutadgu Bilig'de karakter adıdır" },
  { id: 19, oldTurkish: "Yaruk", modern: "Işık / Aydınlık", meaning: "Işık, aydınlık, parlaklık", category: "Doğa", example: "Yaruk kün - Aydınlık gün", origin: "Eski Türkçe", note: "Yarımak (parlamak) fiilinden gelir" },
  { id: 20, oldTurkish: "Tirig", modern: "Diri / Canlı", meaning: "Canlı, diri, yaşayan", category: "Sıfat", example: "Tirig er - Yaşayan kişi", origin: "Eski Türkçe", note: "Diri kelimesinin kökensel formu" },
  { id: 21, oldTurkish: "Küç", modern: "Güç / Kuvvet", meaning: "Güç, kuvvet, enerji", category: "Sıfat", example: "Küçlüg er - Güçlü adam", origin: "Eski Türkçe", note: "Bugünkü 'güç' kelimesinin eski hali" },
  { id: 22, oldTurkish: "Tengri", modern: "Tanrı / Gök", meaning: "Tanrı, yüce varlık, gök tanrı", category: "İnanç", example: "Tengri yarılkazun - Tanrı bağışlasın", origin: "Eski Türkçe", note: "Gök Tengri inancının temel kavramı" },
  { id: 23, oldTurkish: "Könül", modern: "Gönül", meaning: "Gönül, kalp, duygu merkezi", category: "İnsan", example: "Könül bermek - Gönül vermek", origin: "Eski Türkçe", note: "Bugünkü 'gönül' kelimesinin eski hali" },
  { id: 24, oldTurkish: "Barış", modern: "Barış", meaning: "Barış, sulh, huzur, anlaşma", category: "Toplum", example: "Barış kılmak - Barış yapmak", origin: "Eski Türkçe", note: "Bugün de aynı şekilde kullanılır" },
  { id: 25, oldTurkish: "Elik", modern: "Geyik", meaning: "Ceylan, geyik, ahu", category: "Hayvan", example: "Elik avlamak - Geyik avlamak", origin: "Eski Türkçe", note: "Avcılık kültürünün önemli kelimesi" },
  { id: 26, oldTurkish: "Kuş", modern: "Kuş", meaning: "Uçan hayvan, kanatlı canlı", category: "Hayvan", example: "Kuş uçmak - Kuş uçmak", origin: "Eski Türkçe", note: "Tüm Türk dillerinde ortak kelime" },
  { id: 27, oldTurkish: "Yund", modern: "At / Kısrak", meaning: "At, kısrak, beygir", category: "Hayvan", example: "Yund minmek - Ata binmek", origin: "Eski Türkçe", note: "Türk kültürünün en değerli hayvanı" },
  { id: 28, oldTurkish: "Balık", modern: "Şehir / Kent", meaning: "Şehir, kent, yerleşim yeri", category: "Toplum", example: "Beş Balık - Beş Şehir", origin: "Eski Türkçe", note: "Bugünkü anlamından farklı: şehir demektir" },
  { id: 29, oldTurkish: "Kılıç", modern: "Kılıç", meaning: "Kesici silah, savaş aleti", category: "Askerlik", example: "Kılıç çalmak - Kılıç çekmek", origin: "Eski Türkçe", note: "Türk savaş kültürünün simgesi" },
  { id: 30, oldTurkish: "Otağ", modern: "Çadır / Karargah", meaning: "Büyük çadır, hükümdar çadırı", category: "Kültür", example: "Otağ kurmak - Çadır kurmak", origin: "Eski Türkçe", note: "Askeri ve devlet çadırı" },
  { id: 31, oldTurkish: "Kurultay", modern: "Meclis / Toplantı", meaning: "Büyük meclis, toplantı, danışma meclisi", category: "Toplum", example: "Kurultay toplamak - Meclis toplamak", origin: "Eski Türkçe", note: "Bugün de resmi toplantı anlamında" },
  { id: 32, oldTurkish: "Yürek", modern: "Yürek / Kalp", meaning: "Kalp, cesaret, yürek", category: "İnsan", example: "Yüreklig er - Yürekli adam", origin: "Eski Türkçe", note: "Hem organ hem cesaret anlamında" },
  { id: 33, oldTurkish: "Kımız", modern: "Kımız", meaning: "Kısrak sütünden yapılan ekşi içecek", category: "Yiyecek-İçecek", example: "Kımız içmek - Kımız içmek", origin: "Eski Türkçe", note: "Bozkır kültürünün simge içeceği" },
  { id: 34, oldTurkish: "Togrul", modern: "Doğan (kuş)", meaning: "Doğan kuşu, yırtıcı avcı kuş", category: "Hayvan", example: "Togrul kuş - Doğan kuşu", origin: "Eski Türkçe", note: "Tuğrul Bey'in adının kaynağı" },
  { id: 35, oldTurkish: "Yer Sub", modern: "Yer-Su / Vatan", meaning: "Toprak ve su, vatan, yurt", category: "Doğa", example: "Yer sub ıduk - Yer-su kutludur", origin: "Eski Türkçe", note: "Eski Türklerde kutsal vatan kavramı" },
  { id: 36, oldTurkish: "Ajun", modern: "Dünya / Alem", meaning: "Dünya, evren, yaşanılan yer", category: "Doğa", example: "Ajun üze - Dünya üzerinde", origin: "Eski Türkçe", note: "Tüm alemi kapsar" },
  { id: 37, oldTurkish: "Törü", modern: "Töre / Kanun", meaning: "Kanun, gelenek, yasa, töre", category: "Toplum", example: "Törü bozmak - Kanunu çiğnemek", origin: "Eski Türkçe", note: "Türk devlet geleneğinin temeli" },
  { id: 38, oldTurkish: "Yarlıg", modern: "Ferman / Buyruk", meaning: "Hükümdar buyruğu, ferman, emirname", category: "Toplum", example: "Yarlıg bermek - Ferman vermek", origin: "Eski Türkçe", note: "Yarlıkamak fiilinden" },
  { id: 39, oldTurkish: "Tümen", modern: "On Bin", meaning: "On bin sayısı, büyük askeri birlik", category: "Askerlik", example: "Bir tümen sü - On bin asker", origin: "Eski Türkçe", note: "Askeri teşkilatın büyük birimi" },
  { id: 40, oldTurkish: "Tutun", modern: "Duman / Sis", meaning: "Duman, buhar, sis", category: "Doğa", example: "Tutun çıkmak - Duman tütmek", origin: "Eski Türkçe", note: "Tütün kelimesiyle ilişkili" },
  // Yeni eklenen kelimeler — DLT'de geçen yaygın sözcükler
  { id: 41, oldTurkish: "Suv", modern: "Su", meaning: "Hayat veren sıvı, su", category: "Doğa", example: "Suv içmek - Su içmek", origin: "Eski Türkçe", note: "Yer-sub ikilisinin ikinci öğesi" },
  { id: 42, oldTurkish: "Ot", modern: "Ateş", meaning: "Ateş, alev, yangın", category: "Doğa", example: "Ot yakmak - Ateş yakmak", origin: "Eski Türkçe", note: "Otacı (hekim) ile aynı kökten değil, ateş anlamında" },
  { id: 43, oldTurkish: "Yel", modern: "Rüzgar", meaning: "Rüzgar, esinti, yel", category: "Doğa", example: "Yel esdi - Rüzgar esti", origin: "Eski Türkçe", note: "Yelmek (hızlanmak) fiiliyle ilişkili" },
  { id: 44, oldTurkish: "Kün", modern: "Gün", meaning: "Gün, gündüz, güneş", category: "Doğa", example: "Yaruk kün - Aydınlık gün", origin: "Eski Türkçe", note: "Küneş (güneş) buradan gelir" },
  { id: 45, oldTurkish: "Tün", modern: "Gece", meaning: "Gece, karanlık vakit", category: "Doğa", example: "Tün boldı - Gece oldu", origin: "Eski Türkçe", note: "Kün-tün zıtlığı DLT'de sık geçer" },
  { id: 46, oldTurkish: "Yulduz", modern: "Yıldız", meaning: "Gökteki parlak cisim, yıldız", category: "Doğa", example: "Yulduz yarudı - Yıldız parladı", origin: "Eski Türkçe", note: "Yul- (parlamak) kökünden" },
  { id: 47, oldTurkish: "Tag", modern: "Dağ", meaning: "Yüksek yer, dağ", category: "Doğa", example: "Bedük tag - Büyük dağ", origin: "Eski Türkçe", note: "Kutlu dağlar Türk mitolojisinde kutsaldır" },
  { id: 48, oldTurkish: "Ögüz", modern: "Nehir / Irmak", meaning: "Büyük akarsu, nehir", category: "Doğa", example: "Ögüz keçmek - Nehri geçmek", origin: "Eski Türkçe", note: "Öküz ile karıştırılmamalı" },
  { id: 49, oldTurkish: "Altun", modern: "Altın", meaning: "Değerli sarı maden, altın", category: "Kültür", example: "Altun tamga - Altın mühür", origin: "Eski Türkçe", note: "Altun-ordu deyimindeki altun" },
  { id: 50, oldTurkish: "Kümüş", modern: "Gümüş", meaning: "Değerli beyaz maden, gümüş", category: "Kültür", example: "Kümüş yüzük - Gümüş yüzük", origin: "Eski Türkçe", note: "Altun-kümüş ikilemesi yaygındır" },
  { id: 51, oldTurkish: "Temür", modern: "Demir", meaning: "Sert maden, demir", category: "Kültür", example: "Temür kapug - Demir kapı", origin: "Eski Türkçe", note: "Temür (Timur) adının kaynağı" },
  { id: 52, oldTurkish: "Ok", modern: "Ok", meaning: "Yay ile atılan sivri silah", category: "Askerlik", example: "Ok atmak - Ok atmak", origin: "Eski Türkçe", note: "Oğuz boylarının simgesi" },
  { id: 53, oldTurkish: "Börü", modern: "Kurt", meaning: "Yırtıcı bozkır hayvanı, kurt", category: "Hayvan", example: "Börü ulıdı - Kurt uludu", origin: "Eski Türkçe", note: "Türk mitolojisinde yol gösterici" },
  { id: 54, oldTurkish: "Arslan", modern: "Aslan", meaning: "Güçlü yırtıcı, aslan", category: "Hayvan", example: "Arslan gibi - Aslan gibi", origin: "Eski Türkçe", note: "Hükümdar unvanı olarak da kullanılır" },
  { id: 55, oldTurkish: "Tavışgan", modern: "Tavşan", meaning: "Uzun kulaklı küçük hayvan, tavşan", category: "Hayvan", example: "Tavışgan kaçtı - Tavşan kaçtı", origin: "Eski Türkçe", note: "Av hayvanları arasında sayılır" },
  { id: 56, oldTurkish: "Kapug", modern: "Kapı", meaning: "Giriş, kapı", category: "Toplum", example: "Kapug açmak - Kapı açmak", origin: "Eski Türkçe", note: "Kapı yoldası (muhafız) buradan gelir" },
  { id: 57, oldTurkish: "Yol", modern: "Yol", meaning: "Gidilen yer, yol, yöntem", category: "Toplum", example: "Yol yürümek - Yol yürümek", origin: "Eski Türkçe", note: "Yol bilgisi DLT'de geniştir" },
  { id: 58, oldTurkish: "Etmek", modern: "Ekmek", meaning: "Undan yapılan temel besin, ekmek", category: "Yiyecek-İçecek", example: "Etmek aş - Ekmek yemek", origin: "Eski Türkçe", note: "'Etmek' fiiliyle yazımı aynı, anlamı farklı" },
  { id: 59, oldTurkish: "Yag", modern: "Yağ", meaning: "Yağ, sıvı yağ, iç yağı", category: "Yiyecek-İçecek", example: "Yag eritmek - Yağ eritmek", origin: "Eski Türkçe", note: "Yağmur kelimesinin ilk hecesi" },
  { id: 60, oldTurkish: "Bal", modern: "Bal", meaning: "Arı ürünü tatlı besin, bal", category: "Yiyecek-İçecek", example: "Bal yemek - Bal yemek", origin: "Eski Türkçe", note: "Bal-arı birleşik kavramı" },
  { id: 61, oldTurkish: "Baş", modern: "Baş / Kafa", meaning: "Kafa, vücudun en üst bölümü", category: "İnsan", example: "Baş agrımak - Baş ağrımak", origin: "Eski Türkçe", note: "Baş (önder) ve başlamak buradan gelir" },
  { id: 62, oldTurkish: "Köz", modern: "Göz", meaning: "Görme organı, göz", category: "İnsan", example: "Kara köz - Kara göz", origin: "Eski Türkçe", note: "Bugünkü 'köz' (kor ateş) ile yazımı aynı, anlamı farklı" },
  { id: 63, oldTurkish: "Kulak", modern: "Kulak", meaning: "İşitme organı", category: "İnsan", example: "Kulak eşidmek - Kulak işitmek", origin: "Eski Türkçe", note: "Tüm Türk dillerinde ortak kelime" },
  { id: 64, oldTurkish: "Burun", modern: "Burun", meaning: "Koku organı", category: "İnsan", example: "Burun kanamak - Burun kanamak", origin: "Eski Türkçe", note: "Değişmeden günümüze ulaştı" },
  { id: 65, oldTurkish: "Agız", modern: "Ağız", meaning: "Yeme ve konuşma organı", category: "İnsan", example: "Agız açmak - Ağız açmak", origin: "Eski Türkçe", note: "g > ğ yumuşamasına örnek" },
  { id: 66, oldTurkish: "Tiş", modern: "Diş", meaning: "Ağızdaki sert yapı", category: "İnsan", example: "Tiş agrımak - Diş ağrımak", origin: "Eski Türkçe", note: "t > d değişimiyle 'diş' oldu" },
  { id: 67, oldTurkish: "Til", modern: "Dil", meaning: "Hem tat organı hem konuşulan lisan", category: "İnsan", example: "Til bilmek - Dil bilmek", origin: "Eski Türkçe", note: "DLT'nin ana konusu: diller" },
  { id: 68, oldTurkish: "Saç", modern: "Saç", meaning: "Baştaki kıllar", category: "İnsan", example: "Uzun saç - Uzun saç", origin: "Eski Türkçe", note: "Değişmeden günümüze ulaştı" },
  { id: 69, oldTurkish: "Sakal", modern: "Sakal", meaning: "Çenedeki kıllar", category: "İnsan", example: "Ak sakal - Ak sakal", origin: "Eski Türkçe", note: "Aksakal: bilge ihtiyar unvanı" },
  { id: 70, oldTurkish: "Boyun", modern: "Boyun", meaning: "Başı gövdeye bağlayan bölüm", category: "İnsan", example: "Boyun eğmek - Boyun eğmek", origin: "Eski Türkçe", note: "Deyim aynen yaşar" },
  { id: 71, oldTurkish: "Omuz", modern: "Omuz", meaning: "Kolun gövdeye eklendiği yer", category: "İnsan", example: "Omuzdaş - Omuzdaş (yoldaş)", origin: "Eski Türkçe", note: "Dayanışma deyimlerinde yaşar" },
  { id: 72, oldTurkish: "Kol", modern: "Kol", meaning: "Omuzdan ele uzanan uzuv", category: "İnsan", example: "Kol sunmak - El uzatmak", origin: "Eski Türkçe", note: "Yardım anlamında kullanılır" },
  { id: 73, oldTurkish: "Elig", modern: "El", meaning: "Tutma organı", category: "İnsan", example: "Elig bermek - El vermek", origin: "Eski Türkçe", note: "Bugünkü 'el' buradan kısaldı" },
  { id: 74, oldTurkish: "Barmaq", modern: "Parmak", meaning: "Elin beş uzantısı", category: "İnsan", example: "Barmaq sanamak - Parmak saymak", origin: "Eski Türkçe", note: "b > p değişimi tipiktir" },
  { id: 75, oldTurkish: "Tiz", modern: "Diz", meaning: "Bacağın eklem yeri", category: "İnsan", example: "Tiz çökmek - Diz çökmek", origin: "Eski Türkçe", note: "Saygı duruşunun kadim ifadesi" },
  { id: 76, oldTurkish: "Adak", modern: "Ayak", meaning: "Yürüme organı", category: "İnsan", example: "Adak basmak - Ayak basmak", origin: "Eski Türkçe", note: "'Adak adamak'taki adak farklı köktendir" },
  { id: 77, oldTurkish: "Ata", modern: "Ata / Baba", meaning: "Baba, soy büyüğü", category: "Toplum", example: "Ata sözü - Ata sözü", origin: "Eski Türkçe", note: "Atatürk adındaki ata" },
  { id: 78, oldTurkish: "Ana", modern: "Anne", meaning: "Doğuran kadın", category: "Toplum", example: "Ana sütü - Ana sütü", origin: "Eski Türkçe", note: "En eski akrabalık terimlerinden" },
  { id: 79, oldTurkish: "Ogul", modern: "Oğul", meaning: "Erkek çocuk", category: "İnsan", example: "Ogul törütmek - Oğul yetiştirmek", origin: "Eski Türkçe", note: "Oğuz adıyla ilişkili görülür" },
  { id: 80, oldTurkish: "Kız", modern: "Kız", meaning: "Dişi çocuk, genç kadın", category: "İnsan", example: "Kız bermek - Kız vermek (evlendirmek)", origin: "Eski Türkçe", note: "Evlilik törenlerinin merkez kavramı" },
  { id: 81, oldTurkish: "Karındaş", modern: "Kardeş", meaning: "Aynı soydan gelen", category: "Toplum", example: "Karındaşlık - Kardeşlik", origin: "Eski Türkçe", note: "Karın + daş ekinden kuruludur" },
  { id: 82, oldTurkish: "Tagay", modern: "Dayı", meaning: "Annenin erkek kardeşi", category: "Toplum", example: "Tagayım keldi - Dayım geldi", origin: "Eski Türkçe", note: "Anne tarafı akrabalığı güçlüydü" },
  { id: 83, oldTurkish: "Bodun", modern: "Halk / Millet", meaning: "Birliğe bağlı topluluk, ulus", category: "Toplum", example: "Türk bodun - Türk milleti", origin: "Eski Türkçe", note: "Orhun yazıtlarının anahtar sözcüğü" },
  { id: 84, oldTurkish: "İl", modern: "Devlet", meaning: "Bağımsız topluluk, devlet", category: "Toplum", example: "İl tutmak - Devleti yönetmek", origin: "Eski Türkçe", note: "'El' olarak da okunur" },
  { id: 85, oldTurkish: "Bay", modern: "Zengin", meaning: "Varlıklı kişi", category: "Toplum", example: "Bay kişi - Zengin kişi", origin: "Eski Türkçe", note: "Bay-bayan hitabındaki bay" },
  { id: 86, oldTurkish: "Kul", modern: "Kul / Köle", meaning: "Hizmetkâr, bağlı kişi", category: "Toplum", example: "Kul bolmak - Kul olmak", origin: "Eski Türkçe", note: "Tanrı'ya bağlılığı da anlatır" },
  { id: 87, oldTurkish: "Kagan", modern: "Hakan / Kağan", meaning: "En büyük hükümdar", category: "Toplum", example: "Uluğ kagan - Ulu hakan", origin: "Eski Türkçe", note: "Hanların hanı" },
  { id: 88, oldTurkish: "Beg", modern: "Bey", meaning: "Boy yöneticisi, soylu", category: "Toplum", example: "Begler begi - Beylerbeyi", origin: "Eski Türkçe", note: "Osmanlı'da da yaşayan unvan" },
  { id: 89, oldTurkish: "At", modern: "At", meaning: "Binek hayvanı", category: "Hayvan", example: "At minmek - Ata binmek", origin: "Eski Türkçe", note: "Türk'ün kanadı sayılır" },
  { id: 90, oldTurkish: "Teve", modern: "Deve", meaning: "Yük hayvanı", category: "Hayvan", example: "Teve kervanı - Deve kervanı", origin: "Eski Türkçe", note: "İpek Yolu'nun gemisi" },
  { id: 91, oldTurkish: "Koy", modern: "Koyun", meaning: "Yünlü küçükbaş hayvan", category: "Hayvan", example: "Koy sağmak - Koyun sağmak", origin: "Eski Türkçe", note: "Göçebe ekonominin temeli" },
  { id: 92, oldTurkish: "Eçkü", modern: "Keçi", meaning: "Dağlık yer hayvanı", category: "Hayvan", example: "Eçkü südü - Keçi sütü", origin: "Eski Türkçe", note: "Sarp kayaların ustası" },
  { id: 93, oldTurkish: "İt", modern: "Köpek", meaning: "Bekçi ve avcı hayvan", category: "Hayvan", example: "İt ürmek - Köpek havlamak", origin: "Eski Türkçe", note: "Çobanların yardımcısı" },
  { id: 94, oldTurkish: "Müşük", modern: "Kedi", meaning: "Evcil avcı hayvan", category: "Hayvan", example: "Müşük miyavlamak - Kedi miyavlamak", origin: "Eski Türkçe", note: "Tahıl ambarlarının koruyucusu" },
  { id: 95, oldTurkish: "Ayu", modern: "Ayı", meaning: "Güçlü yaban hayvanı", category: "Hayvan", example: "Ayu ini - Ayı ini", origin: "Eski Türkçe", note: "Güç simgelerinden" },
  { id: 96, oldTurkish: "Tülkü", modern: "Tilki", meaning: "Kurnaz yaban hayvanı", category: "Hayvan", example: "Tülkü ini - Tilki ini", origin: "Eski Türkçe", note: "Atasözlerinde kurnazlığın simgesi" },
  { id: 97, oldTurkish: "Yılan", modern: "Yılan", meaning: "Sürüngen hayvan", category: "Hayvan", example: "Yılan sokmak - Yılan sokmak", origin: "Eski Türkçe", note: "Hem korku hem şifa simgesi" },
  { id: 98, oldTurkish: "Arı", modern: "Arı", meaning: "Bal yapan böcek", category: "Hayvan", example: "Arı balı - Arı balı", origin: "Eski Türkçe", note: "Çalışkanlığın simgesi" },
  { id: 99, oldTurkish: "Turna", modern: "Turna", meaning: "Uzun bacaklı göçmen kuş", category: "Hayvan", example: "Turna katarı - Turna katarı", origin: "Eski Türkçe", note: "Türkülerde hasretin simgesi" },
  { id: 100, oldTurkish: "Karga", modern: "Karga", meaning: "Kara tüylü kuş", category: "Hayvan", example: "Karga konmak - Karga konmak", origin: "Eski Türkçe", note: "Haber getiren kuş sayılırdı" },
  { id: 101, oldTurkish: "Ördek", modern: "Ördek", meaning: "Su kuşu", category: "Hayvan", example: "Ördek yüzmek - Ördek yüzmek", origin: "Eski Türkçe", note: "Göllerin süsü" },
  { id: 102, oldTurkish: "Bars", modern: "Pars", meaning: "Benekli yırtıcı kedi", category: "Hayvan", example: "Bars yılı - Pars yılı", origin: "Eski Türkçe", note: "12 Hayvanlı Takvim'de yıl adıdır" },
  { id: 103, oldTurkish: "Teniz", modern: "Deniz", meaning: "Büyük su kütlesi", category: "Doğa", example: "Teniz keçmek - Denizi geçmek", origin: "Eski Türkçe", note: "t > d değişimine örnek" },
  { id: 104, oldTurkish: "Yagmur", modern: "Yağmur", meaning: "Gökten düşen su", category: "Doğa", example: "Yagmur yagmak - Yağmur yağmak", origin: "Eski Türkçe", note: "Yag (yağ/bereket) kökünden" },
  { id: 105, oldTurkish: "Kar", modern: "Kar", meaning: "Donmuş yağış", category: "Doğa", example: "Kar yagmak - Kar yağmak", origin: "Eski Türkçe", note: "Kışın beyaz örtüsü" },
  { id: 106, oldTurkish: "Buz", modern: "Buz", meaning: "Donmuş su", category: "Doğa", example: "Buz tutmak - Buz tutmak", origin: "Eski Türkçe", note: "Değişmeden yaşar" },
  { id: 107, oldTurkish: "Bulıt", modern: "Bulut", meaning: "Gökteki su kümesi", category: "Doğa", example: "Kara bulıt - Kara bulut", origin: "Eski Türkçe", note: "Yağmurun habercisi" },
  { id: 108, oldTurkish: "Köl", modern: "Göl", meaning: "Durgun iç su", category: "Doğa", example: "Köl kıyısı - Göl kıyısı", origin: "Eski Türkçe", note: "Yerleşimler göl çevrelerindeydi" },
  { id: 109, oldTurkish: "Bulak", modern: "Pınar", meaning: "Doğal su gözesi", category: "Doğa", example: "Bulak başında - Pınar başında", origin: "Eski Türkçe", note: "Türkülerde buluşma yeri" },
  { id: 110, oldTurkish: "Yış", modern: "Orman", meaning: "Sık ağaçlık alan", category: "Doğa", example: "Yış ara - Orman içinde", origin: "Eski Türkçe", note: "Kutsal sayılan ormanlar" },
  { id: 111, oldTurkish: "Kış", modern: "Kış", meaning: "Soğuk mevsim", category: "Doğa", example: "Kışlamak - Kışlamak", origin: "Eski Türkçe", note: "Kışlak-yaylak göç düzeninin yarısı" },
  { id: 112, oldTurkish: "Özen", modern: "Dere / Çay", meaning: "Küçük akarsu", category: "Doğa", example: "Özen boyu - Dere boyu", origin: "Eski Türkçe", note: "Ögüz'ün (nehir) küçüğü" },
  { id: 113, oldTurkish: "Ay", modern: "Ay", meaning: "Gecenin ışığı; otuz günlük süre", category: "Doğa", example: "Ay toldı - Ay doldu (dolunay)", origin: "Eski Türkçe", note: "Takvim ayları ayın dönüşüne göreydi" },
  { id: 114, oldTurkish: "Yıl", modern: "Yıl", meaning: "On iki aylık süre", category: "Doğa", example: "Bars yılı - Pars yılı", origin: "Eski Türkçe", note: "12 Hayvanlı Türk Takvimi" },
  { id: 115, oldTurkish: "Tan", modern: "Şafak", meaning: "Günün ağarması", category: "Doğa", example: "Tan atmak - Tan atmak", origin: "Eski Türkçe", note: "Deyim aynen yaşar" },
  { id: 116, oldTurkish: "Tüş", modern: "Öğle", meaning: "Günün ortası", category: "Doğa", example: "Tüş vakti - Öğle vakti", origin: "Eski Türkçe", note: "Güneşin tepedeki hali" },
  { id: 117, oldTurkish: "Edgü", modern: "İyi", meaning: "Güzel, yararlı", category: "Sıfat", example: "Edgü kişi - İyi kişi", origin: "Eski Türkçe", note: "Ahlakın temel ölçüsü" },
  { id: 118, oldTurkish: "Yablak", modern: "Kötü", meaning: "Bozuk, fena", category: "Sıfat", example: "Yablak iş - Kötü iş", origin: "Eski Türkçe", note: "Edgü'nün karşıtı" },
  { id: 119, oldTurkish: "Kiçig", modern: "Küçük", meaning: "Boyutça ufak", category: "Sıfat", example: "Kiçig bala - Küçük çocuk", origin: "Eski Türkçe", note: "Bedük'ün karşıtı" },
  { id: 120, oldTurkish: "Uzun", modern: "Uzun", meaning: "Boyca uzun", category: "Sıfat", example: "Uzun yol - Uzun yol", origin: "Eski Türkçe", note: "Değişmeden yaşar" },
  { id: 121, oldTurkish: "Kısga", modern: "Kısa", meaning: "Boyca kısa", category: "Sıfat", example: "Kısga söz - Kısa söz", origin: "Eski Türkçe", note: "Uzun'un karşıtı" },
  { id: 122, oldTurkish: "İssig", modern: "Sıcak", meaning: "Isısı yüksek", category: "Sıfat", example: "İssig aş - Sıcak yemek", origin: "Eski Türkçe", note: "İsi (sıcaklık) kökünden" },
  { id: 123, oldTurkish: "Sovuk", modern: "Soğuk", meaning: "Isısı düşük", category: "Sıfat", example: "Sovuk suv - Soğuk su", origin: "Eski Türkçe", note: "Savuk olarak da geçer" },
  { id: 124, oldTurkish: "Agır", modern: "Ağır", meaning: "Tartısı çok; saygın", category: "Sıfat", example: "Agır yük - Ağır yük", origin: "Eski Türkçe", note: "Saygı anlamı da taşır" },
  { id: 125, oldTurkish: "Yengil", modern: "Hafif", meaning: "Tartısı az, çevik", category: "Sıfat", example: "Yengil at - Çevik at", origin: "Eski Türkçe", note: "Agır'ın karşıtı" },
  { id: 126, oldTurkish: "Kurug", modern: "Kuru", meaning: "Susuz, yaş değil", category: "Sıfat", example: "Kurug ot - Kuru ot", origin: "Eski Türkçe", note: "Islak anlamındaki 'öl'ün karşıtı" },
  { id: 127, oldTurkish: "Tatlıg", modern: "Tatlı", meaning: "Lezzetli, hoş", category: "Sıfat", example: "Tatlıg söz - Tatlı söz", origin: "Eski Türkçe", note: "Gönül almanın sıfatı" },
  { id: 128, oldTurkish: "Açığ", modern: "Acı", meaning: "Yakıcı tat; üzüntü", category: "Sıfat", example: "Açığ söz - Acı söz", origin: "Eski Türkçe", note: "Tatlıg'ın karşıtı" },
  { id: 129, oldTurkish: "Kara", modern: "Kara / Siyah", meaning: "En koyu renk", category: "Sıfat", example: "Kara yer - Kara toprak", origin: "Eski Türkçe", note: "Kuzey yönünün rengi; halk anlamı da var" },
  { id: 130, oldTurkish: "Ürüng", modern: "Ak / Beyaz", meaning: "En açık renk", category: "Sıfat", example: "Ürüng sakal - Ak sakal", origin: "Eski Türkçe", note: "Ak anlamını karşılar" },
  { id: 131, oldTurkish: "Kızıl", modern: "Kızıl / Kırmızı", meaning: "Kırmızıya çalan renk", category: "Sıfat", example: "Kızıl alma - Kırmızı elma", origin: "Eski Türkçe", note: "Bayrak ve yer adlarında yaşar" },
  { id: 132, oldTurkish: "Yaşıl", modern: "Yeşil", meaning: "Bitki rengi", category: "Sıfat", example: "Yaşıl yış - Yeşil orman", origin: "Eski Türkçe", note: "Yaş (taze) kökünden" },
  { id: 133, oldTurkish: "Eb", modern: "Ev", meaning: "Barınak, konut", category: "Toplum", example: "Eb bark - Ev bark", origin: "Eski Türkçe", note: "Deyim aynen yaşar" },
  { id: 134, oldTurkish: "Eşik", modern: "Eşik", meaning: "Kapı altı", category: "Toplum", example: "Eşik atlamak - Eşik atlamak", origin: "Eski Türkçe", note: "Eşiğe basmamak saygı kuralıydı" },
  { id: 135, oldTurkish: "Ocak", modern: "Ocak", meaning: "Ateş yakılan yer; aile", category: "Kültür", example: "Ocak yakmak - Ocak yakmak", origin: "Eski Türkçe", note: "Aile ocağı deyiminin kökü" },
  { id: 136, oldTurkish: "Kazan", modern: "Kazan", meaning: "Büyük yemek kabı", category: "Kültür", example: "Kazan asmak - Kazan asmak", origin: "Eski Türkçe", note: "Paylaşmanın simgesi" },
  { id: 137, oldTurkish: "Çanak", modern: "Kâse / Çanak", meaning: "Yemek kabı", category: "Kültür", example: "Çanak yalamak - Çanak yalamak", origin: "Eski Türkçe", note: "Deyim aynen yaşar" },
  { id: 138, oldTurkish: "Kaşık", modern: "Kaşık", meaning: "Yemek aracı", category: "Kültür", example: "Kaşık çalmak - Kaşık çalmak", origin: "Eski Türkçe", note: "Düğün oyunlarının ritim aracı" },
  { id: 139, oldTurkish: "Bıçak", modern: "Bıçak", meaning: "Kesici araç", category: "Kültür", example: "Bıçak bilemek - Bıçak bilemek", origin: "Eski Türkçe", note: "Bıç- (kesmek) kökünden" },
  { id: 140, oldTurkish: "İğne", modern: "İğne", meaning: "Dikiş aracı", category: "Kültür", example: "İğne iplik - İğne iplik", origin: "Eski Türkçe", note: "Terziliğin temel aleti" },
  { id: 141, oldTurkish: "Kön", modern: "Deri / Kösele", meaning: "İşlenmiş hayvan derisi", category: "Kültür", example: "Kön çarık - Deri çarık", origin: "Eski Türkçe", note: "Çarık ve eyer yapımında kullanılırdı" },
  { id: 142, oldTurkish: "Keçe", modern: "Keçe", meaning: "Yünden sıkıştırılmış dokuma", category: "Kültür", example: "Keçe çadır - Keçe çadır", origin: "Eski Türkçe", note: "Bozkır çadırlarının örtüsü" },
  { id: 143, oldTurkish: "Közgü", modern: "Ayna", meaning: "Yansıtıcı cam", category: "Kültür", example: "Közgüye bakmak - Aynaya bakmak", origin: "Eski Türkçe", note: "Köz (göz) kökünden: göze gösteren" },
  { id: 144, oldTurkish: "Çıra", modern: "Çıra / Mum", meaning: "Aydınlatma aracı", category: "Kültür", example: "Çıra yakmak - Çıra yakmak", origin: "Eski Türkçe", note: "Gece aydınlığının adı" },
  { id: 145, oldTurkish: "Beşik", modern: "Beşik", meaning: "Bebek yatağı", category: "Kültür", example: "Beşik sallamak - Beşik sallamak", origin: "Eski Türkçe", note: "Beşik kertmesi geleneği" },
  { id: 146, oldTurkish: "Tuğ", modern: "Tuğ / Sancak", meaning: "At kuyruklu hükümdarlık simgesi", category: "Askerlik", example: "Tuğ dikmek - Sancak dikmek", origin: "Eski Türkçe", note: "Bağımsızlık işareti" },
  { id: 147, oldTurkish: "Et", modern: "Et", meaning: "Hayvan eti, besin", category: "Yiyecek-İçecek", example: "Et aş - Et yemeği", origin: "Eski Türkçe", note: "Şölenlerin baş yemeği" },
  { id: 148, oldTurkish: "Yumurta", modern: "Yumurta", meaning: "Kuş ürünü besin", category: "Yiyecek-İçecek", example: "Yumurta kırmak - Yumurta kırmak", origin: "Eski Türkçe", note: "Bahar ve doğurganlık simgesi" },
  { id: 149, oldTurkish: "Yogurt", modern: "Yoğurt", meaning: "Mayalanmış süt ürünü", category: "Yiyecek-İçecek", example: "Yogurt çalmak - Yoğurt mayalamak", origin: "Eski Türkçe", note: "Dünyaya yayılan Türk buluşu" },
  { id: 150, oldTurkish: "Ayran", modern: "Ayran", meaning: "Sulandırılmış yoğurt içeceği", category: "Yiyecek-İçecek", example: "Ayran içmek - Ayran içmek", origin: "Eski Türkçe", note: "Serinleten milli içecek" },
  { id: 151, oldTurkish: "Alma", modern: "Elma", meaning: "Tatlı meyve", category: "Yiyecek-İçecek", example: "Kızıl alma - Kırmızı elma", origin: "Eski Türkçe", note: "Elma ile alma aynı köktendir" },
  { id: 152, oldTurkish: "Erük", modern: "Erik", meaning: "Ekşi meyve", category: "Yiyecek-İçecek", example: "Erük yemek - Erik yemek", origin: "Eski Türkçe", note: "Çağlasıyla baharın müjdecisi" },
  { id: 153, oldTurkish: "Tuz", modern: "Tuz", meaning: "Temel tat verici", category: "Yiyecek-İçecek", example: "Tuz ekmek - Tuz ekmek", origin: "Eski Türkçe", note: "Ekmek-tuz hakkı deyiminin tuzu" },
  { id: 154, oldTurkish: "Kurut", modern: "Kurut", meaning: "Kurutulmuş yoğurt", category: "Yiyecek-İçecek", example: "Kurut yemek - Kurut yemek", origin: "Eski Türkçe", note: "Göçte taşınan dayanıklı azık" },
  { id: 155, oldTurkish: "Sav", modern: "Söz / Atasözü", meaning: "Özlü söz, atasözü", category: "Kültür", example: "Sav söylemek - Atasözü söylemek", origin: "Eski Türkçe", note: "DLT'nin savları meşhurdur" },
  { id: 156, oldTurkish: "Düş", modern: "Rüya", meaning: "Uykuda görülen görüntü", category: "İnanç", example: "Düş görmek - Rüya görmek", origin: "Eski Türkçe", note: "Düş yorumculuğu (tabir) önemliydi" },
  { id: 157, oldTurkish: "Bir", modern: "Bir", meaning: "İlk sayı, tek", category: "Sayı", example: "Bir kişi - Bir kişi", origin: "Eski Türkçe", note: "Birlik ve tekliğin simgesi" },
  { id: 158, oldTurkish: "On", modern: "On", meaning: "İki elin parmağı", category: "Sayı", example: "On kişi - On kişi", origin: "Eski Türkçe", note: "Onluk sistemin temeli" },
  { id: 159, oldTurkish: "Yüz", modern: "Yüz", meaning: "On kere on", category: "Sayı", example: "Yüz atlı - Yüz atlı", origin: "Eski Türkçe", note: "Kalabalıkların ölçüsü" },
  { id: 160, oldTurkish: "Bin", modern: "Bin", meaning: "On kere yüz", category: "Sayı", example: "Bin çadır - Bin çadır", origin: "Eski Türkçe", note: "Binlik teşkilatın adı" },
];

export const CATEGORIES: string[] = [...new Set(WORDS.map((w) => w.category))];

export interface Proverb {
  old: string;
  modern: string;
  meaning: string;
}

export const PROVERBS: Proverb[] = [
  { old: "Tag tagka kavuşmaz, kişi kişike kavuşur.", modern: "Dağ dağa kavuşmaz, insan insana kavuşur.", meaning: "İnsanlar bir gün mutlaka buluşur." },
  { old: "Kuş kanatın, er atın.", modern: "Kuş kanadıyla, er atıyla.", meaning: "Her varlığın değeri aracıyladır." },
  { old: "Tılku öz inine kirse, azağın bulur.", modern: "Tilki kendi inine girse, ayağını bulur.", meaning: "Herkes kendi yurdunda güçlüdür." },
  { old: "Bilig biligke yetse bolur.", modern: "Bilgi bilgiye ulaşırsa olur.", meaning: "Bilgi paylaşıldıkça değerlenir." },
  { old: "Alp er tılın yalmaz, yalvaç sözin yalmaz.", modern: "Yiğit sözünden dönmez.", meaning: "Sözünde durmak yiğitliktir." },
];

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function scrambleWord(word: string): string[] {
  const clean = word.toLocaleUpperCase("tr-TR");
  if (clean.length <= 1) return clean.split("");
  let letters: string[] = [];
  for (let attempt = 0; attempt < 20; attempt++) {
    letters = shuffleArray(clean.split(""));
    if (letters.join("") !== clean) break;
  }
  return letters;
}

export function playTone(freq: number, duration = 0.12, type: OscillatorType = "sine") {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = 0.12;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
    setTimeout(() => void ctx.close(), duration * 1000 + 100);
  } catch {
    /* sessiz geç */
  }
}

export const soundGood = () => {
  playTone(523, 0.12);
  setTimeout(() => playTone(659, 0.12), 110);
  setTimeout(() => playTone(784, 0.2), 220);
};
export const soundBad = () => playTone(180, 0.25, "sawtooth");
export const soundClick = () => playTone(440, 0.06);

export interface Profile {
  totalScore: number;
  gamesPlayed: number;
  bestScramble: number;
  bestQuiz: number;
  bestMatch: number;
  wordsLearned: number[];
}

const KEY = "divan-profile-v1";

export const defaultProfile: Profile = {
  totalScore: 0,
  gamesPlayed: 0,
  bestScramble: 0,
  bestQuiz: 0,
  bestMatch: 0,
  wordsLearned: [],
};

export function loadProfile(): Profile {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...defaultProfile };
    return { ...defaultProfile, ...JSON.parse(raw) };
  } catch {
    return { ...defaultProfile };
  }
}

export function saveProfile(p: Profile) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* yoksay */
  }
}

export function levelFor(score: number): { level: number; title: string; progress: number } {
  const level = Math.floor(score / 200) + 1;
  const progress = ((score % 200) / 200) * 100;
  const titles = ["Çırak Katip", "Bilge Adayı", "Sözlük Avcısı", "Kaşgar Yolcusu", "Divan Bilgesi", "Ulu Bilge"];
  const title = titles[Math.min(level - 1, titles.length - 1)];
  return { level, title, progress };
}
