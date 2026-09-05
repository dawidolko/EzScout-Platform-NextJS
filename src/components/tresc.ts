/*
 * Tresc serwisu w dwoch jezykach.
 *
 * Angielski jest domyslny (trasa `/`), polski dostepny pod `/pl`. Wszystko —
 * lacznie z etykieta skip linku i tekstami formularza — siedzi tutaj, wiec
 * dolozenie kolejnego jezyka nie wymaga dotykania zadnego komponentu.
 */

export type Jezyk = 'en' | 'pl';

export type Pakiet = {
  nazwa: string;
  cena: string;
  opis: string;
  punkty: string[];
  wyrozniony?: boolean;
};

export type Tresc = {
  htmlLang: string;
  sciezka: string;
  skipLink: string;
  nav: { oferta: string; jak: string; skutecznosc: string; faq: string; cta: string };
  menu: { otworz: string; zamknij: string; etykieta: string; etykietaMobil: string };
  jezyk: { etykieta: string; drugi: string; drugiHref: string; drugiLang: string };
  hero: {
    nadtytul: string;
    tytul1: string;
    tytul2: string;
    opis: string;
    ctaGlowne: string;
    ctaDrugie: string;
    kartaNadtytul: string;
    kartaTytul: string;
    kartaZnacznik: string;
    kartaOceny: [string, number][];
    kartaWniosek: string;
  };
  oferta: { tytul: string; opis: string; wyrozniony: string; zamow: string; zamowSr: string };
  pakiety: Pakiet[];
  jak: { tytul: string; opis: string; kroki: { tytul: string; opis: string }[] };
  skutecznosc: { tytul: string; akapit1: string; akapit2: string };
  liczby: { etykieta: string; wartosc: string; opis: string }[];
  faq: { tytul: string; pytania: { pytanie: string; odpowiedz: string }[] };
  kontakt: {
    tytul: string;
    opis: string;
    imie: string;
    email: string;
    wiadomosc: string;
    podpowiedz: string;
    wyslij: string;
    bledy: { imie: string; email: string; wiadomosc: string };
    sukces: string;
  };
  stopka: { opis: string; serwis: string; kontakt: string; godziny: string; miasto: string; prawa: string; autor: string };
};

const EN: Tresc = {
  htmlLang: 'en',
  sciezka: '/',
  skipLink: 'Skip to main content',
  nav: { oferta: 'Packages', jak: 'How we work', skutecznosc: 'Results', faq: 'FAQ', cta: 'Order a report' },
  menu: { otworz: 'Menu', zamknij: 'Close', etykieta: 'Main', etykietaMobil: 'Main (mobile)' },
  jezyk: { etykieta: 'Language', drugi: 'PL', drugiHref: '/pl/', drugiLang: 'pl' },
  hero: {
    nadtytul: 'Football scouting',
    tytul1: 'A report that says',
    tytul2: 'whether he is worth buying',
    opis:
      'We collect match data by hand, minute by minute, and the conclusions are written by the ' +
      'analyst who watched the game. You get a PDF with a rating, a tactical profile and a plain ' +
      'recommendation — within 48 hours.',
    ctaGlowne: 'See the packages',
    ctaDrugie: 'How we work',
    kartaNadtytul: 'Player report',
    kartaTytul: 'Centre-back, 21',
    kartaZnacznik: 'RECOMMENDED',
    kartaOceny: [['Aerial duels', 86], ['Progression on the ball', 71], ['Positioning off the ball', 64], ['One-v-one defending', 78]],
    kartaWniosek:
      'Dominant in the air and reads crosses well. Loses his shape against a high press — ready ' +
      'now for a side defending deep, needs a season for one pressing high.',
  },
  oferta: {
    tytul: 'Packages',
    opis: 'Each package states a number of matches watched and a delivery format. No subscription — you pay for the report you order.',
    wyrozniony: 'Most popular',
    zamow: 'Order',
    zamowSr: 'the {n} package',
  },
  pakiety: [
    { nazwa: 'Screening', cena: '£65', opis: 'One match, one page of conclusions. Useful when you need to thin a shortlist quickly.',
      punkty: ['1 match watched', 'Rating across 6 categories', 'PDF, 1 page', 'Delivered in 48 h'] },
    { nazwa: 'Report', cena: '£170', opis: 'A full player profile from three matches in the last two months.',
      punkty: ['3 matches watched', 'Tactical profile and position map', 'Comparison against the league', 'PDF, 8–10 pages', 'Delivered in 5 days'], wyrozniony: true },
    { nazwa: 'Matchday', cena: '£410', opis: 'Opposition analysis before a specific fixture — patterns, set pieces, weak points.',
      punkty: ['5 opposition matches', 'Build-up and press-resistance patterns', 'Set pieces', 'Recorded walkthrough (25 min)', 'Delivered in 7 days'] },
    { nazwa: 'Club', cena: 'from £520', opis: 'An ongoing arrangement: a watchlist of players and a monthly report.',
      punkty: ['Up to 10 players tracked', 'Monthly report', 'Phone consultations', 'Archive of previous ratings'] },
  ],
  jak: {
    tytul: 'How we work',
    opis: 'Three steps, one lead analyst and a deadline we state before accepting the job.',
    kroki: [
      { tytul: 'Enquiry', opis: 'You give us the name, the club and the date you need the report by. If the player is not playing in the coming weeks, we say so immediately.' },
      { tytul: 'Observation', opis: 'The analyst watches the agreed number of matches and logs events minute by minute: duels, passes under pressure, positioning off the ball.' },
      { tytul: 'Report', opis: 'You get a PDF with a rating, a tactical profile and an unambiguous recommendation. No charts that cannot be turned into a decision.' },
    ],
  },
  skutecznosc: {
    tytul: 'Results',
    akapit1: 'A report is worth whatever decision it enables. So after every transfer we worked on, we go back to the player a season later and check whether the rating held up.',
    akapit2: 'We also publish the cases we got wrong, together with the reason. Scouting without misses does not exist; scouting that learns from them does.',
  },
  liczby: [
    { etykieta: 'Reports', wartosc: '340+', opis: 'Delivered since 2023 to clubs and agents.' },
    { etykieta: 'Delivery', wartosc: '48 h', opis: 'For the Screening package, from confirmation.' },
    { etykieta: 'Accuracy', wartosc: '71%', opis: 'Of recommendations confirmed a season after transfer.' },
    { etykieta: 'Clubs', wartosc: '18', opis: 'Working with us regularly, second and third tier.' },
  ],
  faq: {
    tytul: 'Frequently asked questions',
    pytania: [
      { pytanie: 'Where does the data come from?', odpowiedz: 'From match footage the analyst watches in full. Public statistics are used to compare against the league, but the rating comes from observation, not a spreadsheet.' },
      { pytanie: 'Do I get the report in an editable format?', odpowiedz: 'A PDF as standard. On request we add a sheet of raw events (CSV) if you want to compute your own metrics.' },
      { pytanie: 'What if the player does not feature by the agreed date?', odpowiedz: 'We move the date and tell you in advance. If the break runs longer than a month, we refund in full.' },
      { pytanie: 'Do you only work with clubs?', odpowiedz: 'No. Screening and Report are most often ordered by agents and by players themselves, who want to know how they compare to the league.' },
      { pytanie: 'How does payment work?', odpowiedz: 'An invoice with seven-day terms. For a first commission we ask for half up front.' },
    ],
  },
  kontakt: {
    tytul: 'Order a report',
    opis: 'Tell us who to watch and by when. We answer within one working day with a date and a quote.',
    imie: 'Full name',
    email: 'Email',
    wiadomosc: 'Who should we watch',
    podpowiedz: 'Name, club, position and the date you need the report by.',
    wyslij: 'Send enquiry',
    bledy: {
      imie: 'Enter a name — at least two characters.',
      email: 'Enter a valid email address.',
      wiadomosc: 'Describe the job in at least 20 characters.',
    },
    sukces: 'Thank you — the form passed validation. This is a demonstration build, so nothing is actually sent.',
  },
  stopka: {
    opis: 'Scouting reports and match analysis. Data collected by hand, conclusions written by an analyst — not by a generator.',
    serwis: 'Site',
    kontakt: 'Contact',
    godziny: 'Monday to Friday, 9:00 – 17:00',
    miasto: 'Rzeszów, Poland',
    prawa: 'EzScout. Portfolio project — demonstration site.',
    autor: 'Built by',
  },
};

const PL: Tresc = {
  htmlLang: 'pl',
  sciezka: '/pl/',
  skipLink: 'Przejdź do treści głównej',
  nav: { oferta: 'Oferta', jak: 'Jak działamy', skutecznosc: 'Skuteczność', faq: 'FAQ', cta: 'Zamów raport' },
  menu: { otworz: 'Menu', zamknij: 'Zamknij', etykieta: 'Główna', etykietaMobil: 'Główna (telefon)' },
  jezyk: { etykieta: 'Wersja językowa', drugi: 'EN', drugiHref: '/', drugiLang: 'en' },
  hero: {
    nadtytul: 'Skauting piłkarski',
    tytul1: 'Raport, który mówi,',
    tytul2: 'czy warto go kupić',
    opis:
      'Zbieramy dane z meczów ręcznie, minuta po minucie, a wnioski pisze analityk, który ten mecz ' +
      'obejrzał. Dostajesz PDF z oceną zawodnika, profilem taktycznym i konkretną rekomendacją — ' +
      'w 48 godzin.',
    ctaGlowne: 'Zobacz pakiety',
    ctaDrugie: 'Jak pracujemy',
    kartaNadtytul: 'Raport zawodnika',
    kartaTytul: 'Środkowy obrońca, 21 lat',
    kartaZnacznik: 'REKOMENDACJA',
    kartaOceny: [['Gra w powietrzu', 86], ['Wyprowadzenie piłki', 71], ['Ustawienie bez piłki', 64], ['Pojedynki 1v1', 78]],
    kartaWniosek:
      'Dominuje w powietrzu i czyta dośrodkowania. Przy wysokim pressingu gubi ustawienie — do ' +
      'zespołu grającego niską linią gotowy od razu, do gry wysoko potrzebuje sezonu.',
  },
  oferta: {
    tytul: 'Pakiety',
    opis: 'Każdy pakiet to konkretna liczba obejrzanych meczów i konkretny format dostawy. Bez abonamentu — płacisz za raport, który zamawiasz.',
    wyrozniony: 'Najczęściej wybierany',
    zamow: 'Zamów',
    zamowSr: 'pakiet {n}',
  },
  pakiety: [
    { nazwa: 'Podgląd', cena: '299 zł', opis: 'Jeden mecz, jedna strona wniosków. Dobry, gdy chcesz szybko odsiać nazwiska.',
      punkty: ['1 obejrzany mecz', 'Ocena w 6 kategoriach', 'PDF, 1 strona', 'Dostawa 48 h'] },
    { nazwa: 'Raport', cena: '790 zł', opis: 'Pełny profil zawodnika na podstawie trzech meczów z ostatnich dwóch miesięcy.',
      punkty: ['3 obejrzane mecze', 'Profil taktyczny i mapa pozycji', 'Porównanie do ligi', 'PDF, 8–10 stron', 'Dostawa 5 dni'], wyrozniony: true },
    { nazwa: 'Sztab', cena: '1 900 zł', opis: 'Analiza przeciwnika przed konkretnym meczem — schematy, stałe fragmenty, słabe punkty.',
      punkty: ['5 meczów przeciwnika', 'Schematy wyjścia z pressingu', 'Stałe fragmenty gry', 'Nagranie omówienia (25 min)', 'Dostawa 7 dni'] },
    { nazwa: 'Klub', cena: 'od 2 400 zł', opis: 'Stała współpraca: lista obserwowanych zawodników i raport miesięczny.',
      punkty: ['Do 10 zawodników w obserwacji', 'Raport miesięczny', 'Konsultacje telefoniczne', 'Archiwum poprzednich ocen'] },
  ],
  jak: {
    tytul: 'Jak działamy',
    opis: 'Trzy kroki, jeden analityk prowadzący i termin, który podajemy przed przyjęciem zlecenia.',
    kroki: [
      { tytul: 'Zgłoszenie', opis: 'Podajesz nazwisko, klub i termin, na kiedy potrzebujesz raportu. Jeśli zawodnik nie gra w najbliższych tygodniach, mówimy o tym od razu.' },
      { tytul: 'Obserwacja', opis: 'Analityk ogląda ustaloną liczbę meczów i notuje zdarzenia minuta po minucie: pojedynki, podania pod presją, ustawienie bez piłki.' },
      { tytul: 'Raport', opis: 'Dostajesz PDF z oceną, profilem taktycznym i jednoznaczną rekomendacją. Bez wykresów, których nie da się przełożyć na decyzję.' },
    ],
  },
  skutecznosc: {
    tytul: 'Skuteczność',
    akapit1: 'Raport jest wart tyle, ile decyzja, którą pozwala podjąć. Dlatego po każdym transferze, przy którym pracowaliśmy, wracamy do zawodnika po sezonie i sprawdzamy, czy ocena się obroniła.',
    akapit2: 'Publikujemy też przypadki, w których się pomyliliśmy — razem z powodem. Skauting bez pomyłek nie istnieje; istnieje skauting, który się z nich uczy.',
  },
  liczby: [
    { etykieta: 'Raportów', wartosc: '340+', opis: 'Wydanych od 2023 roku dla klubów i agentów.' },
    { etykieta: 'Czas dostawy', wartosc: '48 h', opis: 'Dla pakietu Podgląd, liczone od potwierdzenia.' },
    { etykieta: 'Trafność', wartosc: '71%', opis: 'Rekomendacji potwierdzonych po sezonie od transferu.' },
    { etykieta: 'Klubów', wartosc: '18', opis: 'Współpracujących regularnie, II i III liga.' },
  ],
  faq: {
    tytul: 'Najczęstsze pytania',
    pytania: [
      { pytanie: 'Skąd bierzecie dane?', odpowiedz: 'Z nagrań meczów, które analityk ogląda w całości. Statystyki publiczne służą do porównania z ligą, ale ocena powstaje z obserwacji, nie z arkusza.' },
      { pytanie: 'Czy raport dostanę w formie edytowalnej?', odpowiedz: 'Standardowo PDF. Na życzenie dokładamy arkusz z surowymi zdarzeniami (CSV), jeśli chcesz przeliczyć wskaźniki po swojemu.' },
      { pytanie: 'Co jeśli zawodnik nie zagra w umówionym terminie?', odpowiedz: 'Przesuwamy termin i informujemy o tym z wyprzedzeniem. Jeśli przerwa jest dłuższa niż miesiąc, zwracamy wpłatę w całości.' },
      { pytanie: 'Czy pracujecie tylko z klubami?', odpowiedz: 'Nie. Pakiety Podgląd i Raport zamawiają najczęściej agenci i sami zawodnicy, którzy chcą wiedzieć, jak wypadają na tle ligi.' },
      { pytanie: 'Jak wygląda płatność?', odpowiedz: 'Faktura z siedmiodniowym terminem. Przy pierwszym zleceniu prosimy o połowę kwoty z góry.' },
    ],
  },
  kontakt: {
    tytul: 'Zamów raport',
    opis: 'Napisz, kogo mamy obejrzeć i na kiedy. Odpowiadamy w jeden dzień roboczy z terminem i wyceną.',
    imie: 'Imię i nazwisko',
    email: 'E-mail',
    wiadomosc: 'Kogo mamy obejrzeć',
    podpowiedz: 'Nazwisko, klub, pozycja i termin, na kiedy potrzebujesz raportu.',
    wyslij: 'Wyślij zapytanie',
    bledy: {
      imie: 'Podaj imię — co najmniej dwa znaki.',
      email: 'Podaj poprawny adres e-mail.',
      wiadomosc: 'Opisz zlecenie w co najmniej 20 znakach.',
    },
    sukces: 'Dziękujemy — formularz przeszedł walidację. To wersja demonstracyjna, więc wiadomość nie jest nigdzie wysyłana.',
  },
  stopka: {
    opis: 'Raporty skautingowe i analizy meczowe. Dane zbierane ręcznie, wnioski pisane przez analityka — nie przez generator.',
    serwis: 'Serwis',
    kontakt: 'Kontakt',
    godziny: 'Poniedziałek – piątek, 9:00 – 17:00',
    miasto: 'Rzeszów, Polska',
    prawa: 'EzScout. Projekt portfolio — serwis demonstracyjny.',
    autor: 'Autor:',
  },
};

export const TRESC: Record<Jezyk, Tresc> = { en: EN, pl: PL };
