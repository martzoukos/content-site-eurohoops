export type Category = {
  slug: string;
  title: string;
  blurb: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export type Team = {
  slug: string;
  name: string;
  city: string;
  country: string;
  founded: number;
  euroleagueTitles: number;
  arena: string;
  summary: string;
  body: string[];
};

export type Player = {
  slug: string;
  name: string;
  position: string;
  nationality: string;
  born: string;
  primaryTeam: string;
  summary: string;
  body: string[];
};

export const categories: Category[] = [
  {
    slug: "history",
    title: "History",
    blurb: "From the 1958 Champions Cup to the modern Euroleague era.",
  },
  {
    slug: "teams",
    title: "Teams",
    blurb: "The clubs that have defined European basketball.",
  },
  {
    slug: "players",
    title: "Players",
    blurb: "Legends who lit up the EuroLeague hardwood.",
  },
];

export const historyArticles: Article[] = [
  {
    slug: "origins",
    title: "Origins of the Euroleague",
    summary:
      "How a continental club competition was born in 1958 and grew into the EuroLeague we know today.",
    body: [
      "The roots of the EuroLeague stretch back to 1958, when FIBA launched the European Champions Cup as a knockout tournament for national league champions. ASK Riga, led by the legendary Latvian forward Maigonis Valdmanis, claimed the first three titles, setting an early standard for what would become Europe's premier club competition.",
      "Through the 1960s and 1970s the format remained largely unchanged: a straight cup, contested by champions, and dominated for long stretches by Real Madrid, CSKA Moscow, and Italian powerhouses Ignis Varese and Cantù. Television contracts were modest, travel was demanding, and rosters relied heavily on local talent.",
      "By the 1990s the gap between the elite clubs and the rest had widened, and the top teams pushed for a more commercial, league-style competition with guaranteed games. That pressure culminated in 2000 with the founding of Euroleague Basketball, the clubs' organisation that still runs the league today.",
    ],
  },
  {
    slug: "format-evolution",
    title: "How the Format Has Evolved",
    summary:
      "Knockout cup, group stages, Top 16, and the round-robin regular season — every era has had its own shape.",
    body: [
      "For most of its first 40 years the European Champions Cup was a pure knockout tournament. Champions met in two-legged ties through autumn and winter, narrowing to a Final Four — a format introduced in 1988 — where one neutral host city decided the title over a single weekend.",
      "The 2000s brought experimentation: group stages, a Top 16 second round, and best-of-three or best-of-five playoffs. The competition flirted with several different qualifying paths as Euroleague Basketball balanced the interests of long-term licence holders with associated clubs from smaller markets.",
      "Since 2016 the EuroLeague has run as a closed round-robin regular season among 16 to 20 clubs, with playoffs leading into the Final Four. The change gave broadcasters a predictable inventory of marquee matchups, but reignited debate about promotion, relegation, and the place of domestic cup champions in the European calendar.",
    ],
  },
  {
    slug: "golden-era",
    title: "The Modern Golden Era",
    summary:
      "Why the 2010s and 2020s have produced some of the most competitive Euroleague basketball ever played.",
    body: [
      "The combination of a long round-robin season, deep rosters, and an influx of NBA-calibre talent has made recent EuroLeague seasons remarkably balanced. Margins between the top eight clubs are routinely a single win or a tiebreaker.",
      "Coaches like Željko Obradović, Ettore Messina, and Pablo Laso have pushed offensive systems toward NBA-style spacing while preserving the league's tradition of physical, half-court defence. The result is faster basketball without losing the tactical density European fans expect.",
      "Off the court, attendances in Belgrade, Athens, Istanbul, and Tel Aviv regularly rival or exceed NBA averages, and arenas in Kaunas and Vitoria remain among the most intimidating road trips in world basketball.",
    ],
  },
];

export const teams: Team[] = [
  {
    slug: "real-madrid",
    name: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    founded: 1931,
    euroleagueTitles: 11,
    arena: "WiZink Center",
    summary:
      "The most decorated club in European basketball, with a tradition stretching back to the first ever Champions Cup.",
    body: [
      "Real Madrid's basketball section was founded in 1931 and has competed at the top of Spanish and European basketball for nearly a century. The club is the all-time leader in continental titles and reached the inaugural European Champions Cup final in 1958.",
      "Under coach Pablo Laso between 2011 and 2022, Madrid won two EuroLeague titles, six Spanish leagues, and reached the Final Four nearly every year. The roster blended Spanish talent like Sergio Llull and Rudy Fernández with international stars such as Luka Dončić, who began his senior career in white before moving to the NBA.",
      "Home games are played at the WiZink Center in central Madrid, an arena shared with the city's concert and event calendar. The atmosphere for Clásicos against FC Barcelona remains one of the most charged occasions in club basketball.",
    ],
  },
  {
    slug: "panathinaikos",
    name: "Panathinaikos AKTOR Athens",
    city: "Athens",
    country: "Greece",
    founded: 1919,
    euroleagueTitles: 7,
    arena: "OAKA Olympic Indoor Hall",
    summary:
      "The Greens — seven-time European champions and a fixture of the EuroLeague's loudest atmospheres.",
    body: [
      "Panathinaikos has been a permanent fixture of European basketball's elite since the late 1990s. The club's golden run spanned 1996 to 2011, during which it won six EuroLeague titles and produced a generation of Greek players who would also dominate national-team basketball.",
      "The 2024 EuroLeague title under coach Ergin Ataman, with a roster led by Kostas Sloukas and Kendrick Nunn, brought the trophy back to Athens after more than a decade and reignited the rivalry with Olympiacos.",
      "Home games at the 18,000-seat OAKA, built for the 2004 Olympics, are known for some of the most intense crowds in European sport. The Gate 13 ultras section sets a standard for atmosphere that visiting teams describe as physically overwhelming.",
    ],
  },
  {
    slug: "cska-moscow",
    name: "CSKA Moscow",
    city: "Moscow",
    country: "Russia",
    founded: 1923,
    euroleagueTitles: 8,
    arena: "Megasport Arena",
    summary:
      "Eight-time European champions and one of the league's most consistent contenders for two decades.",
    body: [
      "CSKA Moscow's basketball lineage runs through Soviet-era dominance and into the modern professional era. The club has won the European top-flight title eight times, with appearances at the Final Four becoming an almost annual fixture between 2003 and 2020.",
      "Coaches Ettore Messina and Dimitris Itoudis built rosters around stars like Theo Papaloukas, Andrei Kirilenko, Miloš Teodosić, and Nando De Colo, combining elite defence with disciplined half-court offence.",
      "CSKA was suspended from EuroLeague competition in 2022 following the invasion of Ukraine. The club continues to play in domestic Russian competitions while its European future remains unresolved.",
    ],
  },
];

export const players: Player[] = [
  {
    slug: "dimitris-diamantidis",
    name: "Dimitris Diamantidis",
    position: "Guard",
    nationality: "Greek",
    born: "1980",
    primaryTeam: "Panathinaikos",
    summary:
      "A six-time EuroLeague Defensive Player of the Year and the heartbeat of Panathinaikos's golden generation.",
    body: [
      "Diamantidis spent his entire EuroLeague career with Panathinaikos between 2004 and 2016, winning three EuroLeague titles and being named MVP of the 2011 Final Four in Barcelona, where the Greens beat Maccabi Tel Aviv.",
      "He is one of only a handful of players to be named EuroLeague Defensive Player of the Year six times, anchoring teams that prized defensive discipline above flashy individual numbers. His ability to switch one through four made him an early prototype for the modern positionless guard.",
      "Internationally he was a leader of the Greek national team that beat the United States at the 2006 World Championship semi-final, one of the country's most celebrated sporting moments.",
    ],
  },
  {
    slug: "juan-carlos-navarro",
    name: "Juan Carlos Navarro",
    position: "Shooting guard",
    nationality: "Spanish",
    born: "1980",
    primaryTeam: "FC Barcelona",
    summary:
      "La Bomba — Barcelona's all-time leading scorer and the player who popularised the floater in European basketball.",
    body: [
      "Navarro spent essentially his entire club career at FC Barcelona, with a single NBA season at the Memphis Grizzlies in 2007. He became the EuroLeague's all-time leading scorer and was named EuroLeague MVP in 2009 after leading Barça to the Final Four.",
      "His signature shot, a high-arcing one-handed floater nicknamed 'la bomba,' became a tactical staple — a way to release a shot before help defenders could react. A generation of Spanish guards grew up imitating it.",
      "With Spain's national team he won the 2006 World Championship and three European titles, alongside Pau and Marc Gasol, Rudy Fernández, and Ricky Rubio in one of the strongest national-team rosters of the modern era.",
    ],
  },
  {
    slug: "vassilis-spanoulis",
    name: "Vassilis Spanoulis",
    position: "Guard",
    nationality: "Greek",
    born: "1982",
    primaryTeam: "Olympiacos",
    summary:
      "Kill Bill — a four-time EuroLeague Final Four MVP and the most decorated point guard in modern European basketball.",
    body: [
      "Spanoulis is one of only two players to be named Final Four MVP four times, an honour he earned with both Panathinaikos and Olympiacos. His back-to-back EuroLeague titles with Olympiacos in 2012 and 2013 are widely regarded as among the greatest underdog runs in league history.",
      "Known for his ice-cold late-game scoring — the nickname 'Kill Bill' followed him for years — Spanoulis combined creative pick-and-roll reads with a willingness to take any shot in any moment. Coach Dušan Ivković built entire late-game systems around him.",
      "He retired in 2021 and moved into coaching, eventually taking over the senior Greek national team alongside Giannis Antetokounmpo's resurgent international career.",
    ],
  },
];

export function getArticle(slug: string) {
  return historyArticles.find((a) => a.slug === slug);
}

export function getTeam(slug: string) {
  return teams.find((t) => t.slug === slug);
}

export function getPlayer(slug: string) {
  return players.find((p) => p.slug === slug);
}
