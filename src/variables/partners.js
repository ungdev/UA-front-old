const partners = [
  {
    name: 'tekliss',
    description:
      'Depuis 1992, Nous réalisons avec nos techniciens et notre propre matériel tout type d’événement faisant appel à de la lumière, de la sonorisation, de la vidéo et de la scène avec une prestation clés en main en tout inclus. De l’inauguration d’événements institutionnels, d’équipements publics et privés, de manifestations sportives, à la mise en oeuvre de soirées de gala et d’entreprises, séminaires, congrès, assemblées générales, salons, stands et surfaces d’expositions, nous saurons gérer avec vous tous vos événements. Du plus simple au plus complexe, de toutes tailles et pour tous les budgets. Notre agence Aube est située au 7 boulevard du 1er RAM à Troyes. troyes@tekliss.com. 03 25 43 04 95',
    url: 'https://www.tekliss.com/',
  },
  {
    name: 'festival',
    description:
      'L’univers du jeu s’installe de nouveau à Troyes pour une 4ème année encore plus animée !<br/>Avec près de 6000 m² le festival propose toujours plus d’animations réparties en trois grands univers :<br/>- Le Gaming, le Rétrogaming et le Fantastique<br/>- Les jeux de café et les jeux traditionnels<br/>- Les loisirs et  les espaces aventures',
    url:
      'http://www.maisonduboulanger.com/missions/le-cube-troyes-champagne-expo/agenda/les-salons/FESTIVAL-DES-JEUX_22.html',
  },
  {
    name: 'asusrog',
    description:
      "Réputée pour la fiabilité, la qualité et les performances inégalées de ses produits, la marque Asus est aujourd'hui le n°1 mondial des fabricants de cartes mères. En quête constante de perfection technologique, Asus conçoit des ordinateurs, composants et périphériques pour PC sans cesse primés par des sites internet d'actualités informatique très reconnus et respectés.<br/>La marque taïwanaise a toujours mis l’accent sur l’innovation et l’esthétique de ses produits pour répondre précisément aux besoins des consommateurs en assurant une constante évolution du design et de la technologie. Toujours à l’avant-garde du secteur numérique, les produits Asus ont toujours été conçu pour satisfaire tous les niveaux de productivité et de divertissement.",
    url: 'https://rog.asus.com/',
  },
  {
    name: 'silverstone',
    description:
      'SilverStone voit le jour en 2003 avec une équipe d’ingénieurs issus d’un gros fabricant de matériel informatique. En quelques années, la marque est parvenue à développer une très large gamme de produits allant des boitiers PC, boitiers gaming et mini-ITX, ventilateurs, alimentations, périphériques de stockage aux accessoires.<br/>Cette diversité associée à l’expertise de l’équipe ont rapidement fait de la marque un acteur de premier plan sur le marché du hardware, mais aussi auprès des joueurs et passionnés d’informatique qui trouvent chez le fabricant tout le nécessaire pour leur PC. Les produits Silverstone séduisent par leur esthétique travaillée, une excellente qualité de fabrication et une finition impeccable.',
    url: 'https://www.silverstonetek.com/',
  },
  {
    name: 'noctua',
    description:
      'Fabricant de solutions de refroidissement haut de gamme, Noctua étend ses produits à l’internationale grâce à leur silence, leurs performances exceptionnelles et leur qualité sans faille.<br/>Les produits Noctua bénéficient de technologies reconnues telles que les turbines optimisées ou les systèmes de roulement et de transmission SSO-Bearing et SCD. Noctua vous proposera des modèles équipés des dernières innovations pour vous garantir des performances optimales !  Pour autant, le savoir-faire de la marque à la chouette ne se limite pas uniquement au PC.',
    url: 'https://noctua.at/',
  },
  {
    name: 'rc3',
    description:
      'Radio Campus3 est une radio associative de proximité et de communication sociale, engagée dans la vie locale, offrant un grand nombre d’informations principalement autour de la vie étudiante, associative, culturelle, musicale et sportive.<br/>Le public cible de Radio Campus3 est la population étudiante de Troyes et son agglomération. L’auditoire principal se situe dans la tranche 18 / 25 ans.',
    url: 'https://www.facebook.com/Radio-Campus3-Troyes-887-442730425749919/',
  },
  {
    name: 'meltdown',
    description:
      "Des bars 100% gaming !<br/>Au Melt', vous pouvez partager des games de LoL, Hearthstone, Starcraft... Les ordinateurs sont en libre accès, venez jouer ou simplement regarder un stream autour d'un verre !",
    url: 'https://www.meltdown.bar/troyes',
  },
  {
    name: 'compumsa',
    description:
      'Compumsa est un e-commerce de pièces informatiques qui a été fondé durant l’été 2006 dans le but de fournir principalement des passionnés et connaisseurs, mais aussi un public un peu moins averti.<br/>Cette petite structure est dynamique, accessible, optimisée et spécialisée cela permet de vous proposer le meilleur rapport prix/service en Belgique.<br/>Nos amis français sont les bienvenus, nous envoyons tous les jours en France !',
    url: 'https://www.compumsa.eu/',
  },
  {
    name: 'scoup',
    description:
      'Scoup eSport est une jeune société dynamique en pleine expansion.<br/>Son service de location de PC Gamer de haute performance répond à un réel besoin des joueurs qui peuvent à présent venir en Lan en toute tranquillité.<br/>Scoup eSport s’occupe de la livraison, l’installation et du support tout au long de l’événement.',
    url: 'https://www.scoup-esport.fr ',
  },
  {
    name: 'qtg',
    description:
      "\"Qu'est-ce que tu GEEKes ?\" c'est LA chaîne de vulgarisation informatique accessible à tous avec des réalisations sourcées, libres de droits et sans publicité. Ses deux auteurs, Tom et Flo, vont profiter du Festival des Jeux de Troyes et plus particulièrement de l'UTT Arena pour expliquer en quoi la pratique des Jeux Vidéos apporte des compétences nécessaires et recherchées dans le monde professionnel. De la connaissance de soi-même, à la coordination d'équipe en passant par l'apprentissage des langues, nombreux sont ces \"Softs Skills\" qu'un \"Gamer\" peut valoriser. Alors pourquoi s'en priver ;-)",
    url: 'https://www.qtg.fr',
  },
  {
    name: 'cube',
    description:
      'Imaginé dans les années 60, relooké dans les années 80, puis entièrement rénové en 2009, Le Cube - Troyes Champagne Expo s’affirme aujourd’hui comme un complexe moderne et extrêmement polyvalent. Situé au cœur de la Ville de Troyes, ce site événementiel accueille des événements grand public (salons, foires, concerts, spectacles, manifestation sportives…) et professionnels (congrès, conventions, séminaires, assemblées générales, galas…).',
    url: 'http://www.troyeschampagneexpo.com',
  },
  {
    name: 'warlegend',
    description:
      "Structure francophone très active dans les jeux e-sport les plus fun et populaires, War Legend est partenaire de l'UTT Arena pour l'organisation du tournoi Fornite de cette édition. Leur équipe, habituée aux événements LAN comme l'ESWC Metz, saura apporter leur expérience pour proposer un tournoi inoubliable à nos joueurs Fortnite !",
    url: 'https://www.warlegend.net',
  },
  {
    name: 'creditmutuel',
    description: 'Banque, assurance, téléphonie et services à destination des plus jeunes',
    url: 'https://www.creditmutuel.fr/fr/jeunes.html',
  },
  {
    name: 'wig',
    description:
      'Women in Games France est une association professionnelle œuvrant pour la mixité dans l’industrie du jeu vidéo en France. Notre objectif est de doubler le nombre de femmes dans l’industrie en 10 ans. L’association mène des actions à travers 4 axes principaux : améliorer la visibilité des femmes de l’industrie, communiquer auprès des jeunes filles sur les métiers du jeu vidéo et eSport, faciliter le réseautage et sensibiliser les acteurs du secteur à l’intérêt de la mixité. L’association, créée en 2017 et ouverte à tous, regroupe plus de 900 membres et mène des actions à travers toute la France. L’association, indépendante, est notamment soutenue par les syndicats et par les clusters régionaux du jeu vidéo. L’association collabore également avec des associations soeurs actives sur les mêmes domaines.',
    url: 'https://womeningamesfrance.org',
  },
  {
    name: 'bdeutt',
    description:
      "Le Bureau Des Étudiants de l'Université de Technologie de Troyes est la première association de l'école. Le BDE remplit différentes missions :<br/>- Fédérer et encourager la vie associative à l'UTT<br/>- Animer le campus<br/>- Faire de la vie étudiante à l'UTT les meilleures années",
    url: 'https://bde.utt.fr/fr',
  },
];

export default partners.map(partner => ({
  ...partner,
  description: partner.description.split('<br/>'),
  image: `/static/partners/${partner.name}.png`,
}));
