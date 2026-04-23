const allData = [
  {
    id: 1,
    name: "Teresa",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Desvende a beleza interior com um produto que vai além da superfície. Os detalhes são um testemunho de seu compromisso com qualidade e excelência.",
    image1: "/images/workpic/pic1.jpg",
    image2: ["/images/workpic/pic1.jpg"],
  },
  {
    id: 2,
    name: "Jane",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Em cada contorno, celebre a arte da expressão. Nossos detalhes refletem a busca incessante pela perfeição. Descubra a magia de esculpir sua beleza única, onde cada produto é uma ferramenta na criação da sua própria obra-prima.",
    image1: "/images/workpic/pic2.jpg",
    image2: ["/images/workpic/pic2.jpg"],
  },
  {
    id: 3,
    name: "Fatima",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Desvende a beleza interior com um produto que vai além da superfície. Os detalhes são um testemunho de seu compromisso com qualidade e excelência.",
    image1: "/images/workpic/pic3.jpg",
    image2: [
      "/images/fatima/pic1.jpg",
      "/images/fatima/pic2.jpg",
      "/images/fatima/pic3.jpg",
      "/images/fatima/pic4.jpg",
      "/images/fatima/pic5.jpg",
    ],
  },
  {
    id: 4,
    name: "Emily",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Explore um mundo de cores que transcende o comum. Cada matiz conta uma história única, e nossa dedicação à qualidade se manifesta em cada detalhe. Descubra a verdadeira expressão da beleza, onde a arte encontra a excelência.",
    image1: "/images/workpic/pic4.jpg",
    image2: ["/images/workpic/pic4.jpg"],
  },
  {
    id: 5,
    name: "Michaela",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Em cada traço, revelamos o poder da elegância. A atenção meticulosa aos detalhes é a essência da nossa coleção. Sinta-se envolvida pela sofisticação, onde cada produto conta uma história de beleza única.",
    image1: "/images/workpic/pic5.jpg",
    image2: ["/images/workpic/pic5.jpg"],
  },
  // {
  //   id: 6,
  //   name: "Sarah",
  //   description:
  //     "This makeup essential is meticulously crafted to provide a seamless application experience.",
  //   details:
  //     "Deslumbre-se com a paleta de tons que reflete sua diversidade. Cada cor é uma promessa de autenticidade, e nossos produtos são a personificação da qualidade que você merece. Descubra a alegria de se expressar através das cores.",
  //   image1: "/images/workpic/pic6.jpg",
  //   image2: ["/images/workpic/pic6.6.jpg"],
  // },
  // {
  //   id: 7,
  //   name: "Daniela",
  //   description:
  //     "This makeup essential is meticulously crafted to provide a seamless application experience.",
  //   details:
  //     "Descubra a luminosidade em cada frasco. A beleza reside nos detalhes, e nossa linha de produtos é um testemunho dessa verdade. Deixe a luz brilhar através de sua maquiagem, destacando cada traço de sua própria luminosidade.",
  //   image1: "/images/workpic/pic7.jpg",
  //   image2: ["/images/workpic/pic7.7.jpg"],
  // },
  {
    id: 8,
    name: "Madalena",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Acentue sua beleza natural com produtos que abraçam a singularidade. Cada pincelada é uma celebração da diversidade, e nossos detalhes são a prova do compromisso com sua expressão autêntica.",
    image1: "/images/workpic/pic8.jpg",
    image2: ["/images/workpic/pic8.jpg"],
  },
  {
    id: 9,
    name: "Laura",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Em cada gota, a promessa de elegância. Nossa coleção líquida é uma experiência sensorial que transcende a maquiagem comum. Sinta a diferença nos detalhes, onde a qualidade se encontra com a inovação.",
    image1: "/images/workpic/pic9.jpg",
    image2: ["/images/laura/pic1.jpg", "/images/laura/pic2.jpg"],
  },
  {
    id: 10,
    name: "Ava",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Transforme-se com tons que contam sua história. Cada produto é uma jornada em si, e nossos detalhes revelam o cuidado que colocamos em cada passo. Descubra a arte de se expressar através da maquiagem.",
    image1: "/images/workpic/pic10.jpg",
    image2: ["/images/workpic/pic10.jpg"],
  },
  {
    id: 11,
    name: "Ely",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Deixe cada olhar contar sua própria história. Nossos detalhes refletem a paixão por destacar a beleza única de seus olhos. Envolva-se na experiência visual de uma maquiagem que vai além da aparência.",
    image1: "/images/workpic/pic11.jpg",
    image2: ["/images/workpic/pic11.jpg"],
  },
  {
    id: 12,
    name: "Lily",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Desvende a essência de uma beleza atemporal. Cada produto é uma obra-prima, e nossos detalhes são a assinatura do requinte. Descubra a sofisticação que vai além do efêmero, onde cada aplicação é uma celebração.",
    image1: "/images/workpic/pic12.jpg",
    image2: ["/images/workpic/pic12.jpg"],
  },
  // {
  //   id: 13,
  //   name: "Anita",
  //   description:
  //     "This makeup essential is meticulously crafted to provide a seamless application experience.",
  //   details:
  //     "Em cada nuance, revelamos o poder transformador da cor. Nossos detalhes refletem a dedicação à expressão autêntica. Descubra a alegria de se expressar com tons que falam a linguagem da sua beleza.",
  //   image1: "/images/workpic/pic13.jpg",
  //   image2: ["/images/workpic/pic13.jpg"],
  // },
  {
    id: 14,
    name: "Sophia",
    description:
      "This makeup essential is meticulously crafted to provide a seamless application experience.",
    details:
      "Explore a textura da elegância em cada aplicação. Nossos produtos são um testemunho de qualidade e atenção aos detalhes. Sinta o toque suave da beleza em cada momento, onde cada traço é uma experiência única.",
    image1: "/images/workpic/pic14.jpg",
    image2: ["/images/workpic/pic14.jpg"],
  },
];

export default allData;
