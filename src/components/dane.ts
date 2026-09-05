/*
 * Tresc serwisu w jednym miejscu.
 *
 * Strony sa statyczne, wiec nie ma CMS-a ani API — ale trzymanie tekstow poza
 * komponentami sprawia, ze zmiana oferty nie wymaga grzebania w JSX.
 */

export type Pakiet = {
  nazwa: string;
  cena: string;
  opis: string;
  punkty: string[];
  wyrozniony?: boolean;
};

export const PAKIETY: Pakiet[] = [
  {
    nazwa: 'Podgląd',
    cena: '299 zł',
    opis: 'Jeden mecz, jedna strona wniosków. Dobry, gdy chcesz szybko odsiać nazwiska.',
    punkty: ['1 obejrzany mecz', 'Ocena w 6 kategoriach', 'PDF, 1 strona', 'Dostawa 48 h'],
  },
  {
    nazwa: 'Raport',
    cena: '790 zł',
    opis: 'Pełny profil zawodnika na podstawie trzech meczów z ostatnich dwóch miesięcy.',
    punkty: [
      '3 obejrzane mecze',
      'Profil taktyczny i mapa pozycji',
      'Porównanie do ligi',
      'PDF, 8–10 stron',
      'Dostawa 5 dni',
    ],
    wyrozniony: true,
  },
  {
    nazwa: 'Sztab',
    cena: '1 900 zł',
    opis: 'Analiza przeciwnika przed konkretnym meczem — schematy, stałe fragmenty, słabe punkty.',
    punkty: [
      '5 meczów przeciwnika',
      'Schematy wyjścia z pressingu',
      'Stałe fragmenty gry',
      'Nagranie omówienia (25 min)',
      'Dostawa 7 dni',
    ],
  },
  {
    nazwa: 'Klub',
    cena: 'od 2 400 zł',
    opis: 'Stała współpraca: lista obserwowanych zawodników i raport miesięczny.',
    punkty: [
      'Do 10 zawodników w obserwacji',
      'Raport miesięczny',
      'Konsultacje telefoniczne',
      'Archiwum poprzednich ocen',
    ],
  },
];

export const KROKI = [
  {
    tytul: 'Zgłoszenie',
    opis:
      'Podajesz nazwisko, klub i termin, na kiedy potrzebujesz raportu. Jeśli ' +
      'zawodnik nie gra w najbliższych tygodniach, mówimy o tym od razu.',
  },
  {
    tytul: 'Obserwacja',
    opis:
      'Analityk ogląda ustaloną liczbę meczów i notuje zdarzenia minuta po ' +
      'minucie: pojedynki, podania pod presją, ustawienie bez piłki.',
  },
  {
    tytul: 'Raport',
    opis:
      'Dostajesz PDF z oceną, profilem taktycznym i jednoznaczną rekomendacją. ' +
      'Bez wykresów, których nie da się przełożyć na decyzję.',
  },
];

export const LICZBY = [
  { etykieta: 'Raportów', wartosc: '340+', opis: 'Wydanych od 2023 roku dla klubów i agentów.' },
  { etykieta: 'Czas dostawy', wartosc: '48 h', opis: 'Dla pakietu Podgląd, liczone od potwierdzenia.' },
  { etykieta: 'Trafność', wartosc: '71%', opis: 'Rekomendacji potwierdzonych po sezonie od transferu.' },
  { etykieta: 'Klubów', wartosc: '18', opis: 'Współpracujących regularnie, II i III liga.' },
];

export const PYTANIA = [
  {
    pytanie: 'Skąd bierzecie dane?',
    odpowiedz:
      'Z nagrań meczów, które analityk ogląda w całości. Statystyki publiczne ' +
      'służą do porównania z ligą, ale ocena powstaje z obserwacji, nie z arkusza.',
  },
  {
    pytanie: 'Czy raport dostanę w formie edytowalnej?',
    odpowiedz:
      'Standardowo PDF. Na życzenie dokładamy arkusz z surowymi zdarzeniami ' +
      '(CSV), jeśli chcesz przeliczyć wskaźniki po swojemu.',
  },
  {
    pytanie: 'Co jeśli zawodnik nie zagra w umówionym terminie?',
    odpowiedz:
      'Przesuwamy termin i informujemy o tym z wyprzedzeniem. Jeśli przerwa jest ' +
      'dłuższa niż miesiąc, zwracamy wpłatę w całości.',
  },
  {
    pytanie: 'Czy pracujecie tylko z klubami?',
    odpowiedz:
      'Nie. Pakiety Podgląd i Raport zamawiają najczęściej agenci i sami zawodnicy, ' +
      'którzy chcą wiedzieć, jak wypadają na tle ligi.',
  },
  {
    pytanie: 'Jak wygląda płatność?',
    odpowiedz:
      'Faktura z siedmiodniowym terminem. Przy pierwszym zleceniu prosimy o połowę ' +
      'kwoty z góry.',
  },
];
