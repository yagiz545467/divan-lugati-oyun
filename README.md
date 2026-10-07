# Divanü Lügati't-Türk — İnteraktif Kelime Oyunu 🏛️

Kaşgarlı Mahmud'un 1072–1074 yıllarında yazdığı ilk Türkçe sözlükteki kelimeleri
oyunlarla öğreten, krem temalı, mobil uyumlu React uygulaması.

## Özellikler

- 📖 **160 kelimelik sözlük** — arama, kategori filtresi, kelime detay kartı
- 🔤 **Kelime Karıştırma** — 60 sn/kelime, ipucu ve seri bonusu
- ❓ **Anlam Quizi** — 10 soru, 4 şık, seri bonusu
- 🔗 **Eşleştirme** — 6 çift, 90 saniye, süre bonusu
- 🎖 **Profil sistemi** — XP, seviye unvanları, en iyi skorlar (localStorage)
- 📱 **Mobil + tablet uyumlu**, göz yormayan krem tema, ses efektleri

## Çalıştırma

```bash
npm install
npm run dev
```

Derleme:

```bash
npm run build
```

## Vercel'e Yükleme

1. Bu repoyu GitHub'a push'layın
2. [vercel.com](https://vercel.com) → Add New Project → repo'yu seçin
3. Framework: **Vite** (otomatik algılanır), Build: `npm run build`, Output: `dist`
4. Deploy ✅

## Teknolojiler

React 19 + TypeScript + Vite. Harici oyun kütüphanesi yok, saf CSS.
