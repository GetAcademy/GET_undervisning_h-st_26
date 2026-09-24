const model = {
  app: document.getElementById("app"),

  viewState: {
    currentPage: "home",
    selectedPlaceId: null,
  },

  data: {
    places: [
      {
        id: 1,
        title: "Oslo",
        category: "Storby",
        shortDescription: "Kultur, mat og byliv ved Oslofjorden.",
        description:
          "Oslo er Norges hovedstad og byr på en blanding av moderne arkitektur, historie, kultur og natur. Her finner du museer, restauranter, parker og kort vei til både fjord og skog.",
        population: "ca. 720 000",
        region: "Østlandet",
        activities: [
          "Besøke Munchmuseet",
          "Gå langs Akerselva",
          "Utforske Grünerløkka",
          "Ta badstue ved fjorden",
        ],
      },

      {
        id: 2,
        title: "Bergen",
        category: "Kystby",
        shortDescription: "Fjell, historie og vestlandsk byliv.",
        description:
          "Bergen ligger mellom syv fjell og er kjent for Bryggen, Fløyen og nærheten til fjordene. Byen har en lang historie som handelsby og et aktivt kulturliv.",
        population: "ca. 290 000",
        region: "Vestlandet",
        activities: [
          "Besøke Bryggen",
          "Ta Fløibanen",
          "Besøke Fisketorget",
          "Dra på fjordtur",
        ],
      },

      {
        id: 3,
        title: "Tromsø",
        category: "Nord-Norge",
        shortDescription: "Nordlys og arktiske opplevelser.",
        description:
          "Tromsø ligger nord for polarsirkelen og er et populært reisemål for nordlys, midnattssol og arktiske naturopplevelser.",
        population: "ca. 80 000",
        region: "Nord-Norge",
        activities: [
          "Se nordlyset",
          "Besøke Ishavskatedralen",
          "Ta Fjellheisen",
          "Dra på hvalsafari",
        ],
      },

      {
        id: 4,
        title: "Lofoten",
        category: "Natur",
        shortDescription: "Dramatiske fjell og små fiskevær.",
        description:
          "Lofoten er kjent for spektakulære fjell, strender og tradisjonelle fiskevær. Området er populært blant både fotografer, surfere og fjellvandrere.",
        population: "ca. 25 000",
        region: "Nordland",
        activities: [
          "Gå fjelltur",
          "Besøke Reine",
          "Surfe på Unstad",
          "Oppleve midnattssolen",
        ],
      },

      {
        id: 5,
        title: "Stavanger",
        category: "Kystby",
        shortDescription: "Mat, historie og spektakulær natur.",
        description:
          "Stavanger kombinerer et moderne byliv med historiske trehus og nærhet til noen av Norges mest kjente naturopplevelser.",
        population: "ca. 150 000",
        region: "Vestlandet",
        activities: [
          "Besøke Gamle Stavanger",
          "Gå til Preikestolen",
          "Utforske Fargegaten",
          "Besøke Norsk Oljemuseum",
        ],
      },

      {
        id: 6,
        title: "Trondheim",
        category: "Historisk by",
        shortDescription: "Studentliv, historie og teknologi.",
        description:
          "Trondheim er en historisk by med et stort studentmiljø. Byen er blant annet kjent for Nidarosdomen, NTNU og den fargerike bebyggelsen langs Nidelva.",
        population: "ca. 215 000",
        region: "Trøndelag",
        activities: [
          "Besøke Nidarosdomen",
          "Gå over Gamle Bybro",
          "Utforske Bakklandet",
          "Besøke Kristiansten festning",
        ],
      },
    ],
  },
};
