const products = [
  {
    _id: {
      $oid: "6566c165801e99be12650c13",
    },
    name: "Rodrick Schwant",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    category: "Grocery",
    price: 6562674,
    capital: 6552674,
    profit: 10000,
    stock: 10,
    weight: 1708,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982c1",
        rating: 5,
        comment:
          "Revision of Extraluminal Device in Ureter, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898250",
        rating: 3,
        comment:
          "Supplement Right Brachial Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c0c",
    },
    name: "Fruits",
    image: [
      {
        link: "https://app1.jadidalmagribi.com/images/pexels-photo-1132047-1703488227106.jpeg",
        _id: {
          $oid: "65892ae3994dec19816b73bb",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/pexels-photo-1300975-1703488227110.jpeg",
        _id: {
          $oid: "65892ae3994dec19816b73bc",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/purple-grapes-vineyard-napa-valley-napa-vineyard-45209-1703488227113.jpeg",
        _id: {
          $oid: "65892ae3994dec19816b73bd",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/strawberries-frisch-ripe-sweet-89778-1703488227114.jpeg",
        _id: {
          $oid: "65892ae3994dec19816b73be",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/strawberries-red-fruit-royalty-free-70746-1703488227115.jpeg",
        _id: {
          $oid: "65892ae3994dec19816b73bf",
        },
      },
    ],
    desc: "<p>Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.</p>",
    category: "Fruits",
    price: 6821445,
    capital: 6811445,
    profit: 10000,
    stock: 44,
    weight: 2479,
    rating: 3.5,
    reviews: [
      {
        user: "64aa82aba176b956ba8982a2",
        rating: 3,
        comment: "Revision of Monitoring Device in Brain, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982c1",
        rating: 1,
        comment: "Division of Left Temporal Bone, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981a8",
        rating: 5,
        comment:
          "Supplement Right Breast with Synthetic Substitute, External Approach",
      },
      {
        user: "64aa82aba176b956ba898230",
        rating: 2,
        comment:
          "Excision of Right Upper Extremity Bursa and Ligament, Percutaneous Endoscopic Approach",
      },
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 5,
        comment: "Bagus sekali\n",
        _id: {
          $oid: "6580e77fbd189015e5ad7f73",
        },
        product: {
          $oid: "6566c165801e99be12650c0c",
        },
      },
      {
        user: {
          $oid: "657dab2b39550c5de9dde776",
        },
        rating: 5,
        comment: "coba lagi",
        _id: {
          $oid: "65811d6763169d86292ac87a",
        },
      },
    ],
    updatedAt: {
      $date: "2023-12-25T07:10:27.159Z",
    },
    __v: 2,
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c14",
    },
    name: "Chantalle Hatcliffe",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    category: "Books",
    price: 491262,
    capital: 481262,
    profit: 10000,
    stock: 45,
    weight: 2828,
    rating: 4,
    reviews: [
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 5,
        comment: "Keren Brooo",
        _id: {
          $oid: "658044b767e02a805fee2a1c",
        },
      },
    ],
    __v: 1,
    updatedAt: {
      $date: "2023-12-18T13:10:15.954Z",
    },
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c20",
    },
    name: "Giles Schaben",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    category: "Baby",
    price: 6298376,
    capital: 6288376,
    profit: 10000,
    stock: 84,
    weight: 138,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898331",
        rating: 1,
        comment:
          "Bypass Superior Mesenteric Vein to Lower Vein, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898387",
        rating: 3,
        comment:
          "Dilation of Left Common Iliac Artery, Bifurcation, with Two Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981d8",
        rating: 1,
        comment:
          "Supplement Left Common Carotid Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89822c",
        rating: 2,
        comment:
          "Plain Radiography of Right Upper Extremity Lymphatics using Low Osmolar Contrast",
      },
      {
        user: "64aa82aba176b956ba8981f1",
        rating: 2,
        comment:
          "Drainage of Perineum Bursa and Ligament with Drainage Device, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c24",
    },
    name: "Honor Alejandre",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Baby",
    price: 8602634,
    capital: 8592634,
    profit: 10000,
    stock: 37,
    weight: 1404,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981a6",
        rating: 3,
        comment:
          "Drainage of Left Hypogastric Vein, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c28",
    },
    name: "Cassondra Buckam",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    category: "Clothing",
    price: 4253252,
    capital: 4243252,
    profit: 10000,
    stock: 40,
    weight: 2811,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981a9",
        rating: 2,
        comment:
          "Dilation of Right Ulnar Artery, Bifurcation, with Three Drug-eluting Intraluminal Devices, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898301",
        rating: 4,
        comment:
          "Extirpation of Matter from Inferior Mesenteric Artery, Bifurcation, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89828b",
        rating: 2,
        comment: "Release Sacral Nerve, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898207",
        rating: 1,
        comment: "Transplantation of Esophagus, Allogeneic, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89821a",
        rating: 4,
        comment:
          "Revision of Synthetic Substitute in Bladder, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2c",
    },
    name: "Rachael Schofield",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    category: "Shoes",
    price: 1793162,
    capital: 1783162,
    profit: 10000,
    stock: 93,
    weight: 2636,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982b3",
        rating: 5,
        comment:
          "Replacement of Sacrum with Nonautologous Tissue Substitute, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981ed",
        rating: 5,
        comment:
          "Reposition Left Metatarsal-Phalangeal Joint with Internal Fixation Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981a7",
        rating: 3,
        comment: "Resection of Hard Palate, External Approach",
      },
      {
        user: "64aa82aba176b956ba89820a",
        rating: 3,
        comment:
          "Revision of Intraluminal Device in Vagina and Cul-de-sac, Via Natural or Artificial Opening",
      },
      {
        user: "64aa82aba176b956ba8981ed",
        rating: 3,
        comment:
          "Supplement Left Hand Muscle with Autologous Tissue Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c31",
    },
    name: "Johnette Izkoveski",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    category: "Outdoors",
    price: 234722,
    capital: 224722,
    profit: 10000,
    stock: 17,
    weight: 1871,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8982ec",
        rating: 5,
        comment:
          "Dilation of Right Brachial Artery with Four or More Intraluminal Devices, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981c9",
        rating: 2,
        comment:
          "Insertion of Ring External Fixation Device into Right Tibia, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c33",
    },
    name: "Hodge Lamacraft",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    category: "Games",
    price: 4205338,
    capital: 4195338,
    profit: 10000,
    stock: 15,
    weight: 1629,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898373",
        rating: 2,
        comment:
          "Drainage of Left Knee Region, Percutaneous Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba89821f",
        rating: 2,
        comment:
          "Dilation of Right Renal Artery with Three Drug-eluting Intraluminal Devices, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3c",
    },
    name: "Faunie Gorham",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    category: "Toys",
    price: 5620064,
    capital: 5610064,
    profit: 10000,
    stock: 9,
    weight: 497,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898233",
        rating: 4,
        comment:
          "Replacement of Right Hypogastric Vein with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898250",
        rating: 2,
        comment:
          "Computerized Tomography (CT Scan) of Hepatobiliary System, All using High Osmolar Contrast, Unenhanced and Enhanced",
      },
      {
        user: "64aa82aba176b956ba89823f",
        rating: 1,
        comment: "Division of Thoracic Vertebra, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c42",
    },
    name: "Letitia Tremblot",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    category: "Baby",
    price: 7900856,
    capital: 7890856,
    profit: 10000,
    stock: 93,
    weight: 1425,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898339",
        rating: 3,
        comment:
          "Range of Motion and Joint Mobility Treatment of Musculoskeletal System - Head and Neck",
      },
      {
        user: "64aa82aba176b956ba898214",
        rating: 2,
        comment: "Excision of Sternum, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898235",
        rating: 2,
        comment:
          "Measurement of Biliary Flow, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c48",
    },
    name: "Mil Rowney",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    category: "Industrial",
    price: 4897232,
    capital: 4887232,
    profit: 10000,
    stock: 17,
    weight: 307,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898308",
        rating: 2,
        comment: "Insertion of Other Device into Left Upper Leg, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c49",
    },
    name: "Currey Gaish",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: "Sports",
    price: 1353377,
    capital: 1343377,
    profit: 10000,
    stock: 81,
    weight: 310,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898371",
        rating: 3,
        comment: "Drainage of Sacral Plexus, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898380",
        rating: 5,
        comment:
          "Replacement of Nasal Turbinate with Autologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic",
      },
      {
        user: "64aa82aba176b956ba898277",
        rating: 3,
        comment:
          "Reposition Left Upper Leg Muscle, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981a8",
        rating: 5,
        comment:
          "Bypass Inferior Vena Cava to Superior Mesenteric Vein with Autologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898324",
        rating: 1,
        comment:
          "Revision of Synthetic Substitute in Diaphragm, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4d",
    },
    name: "Kizzee Nern",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    category: "Movies",
    price: 1304730,
    capital: 1294730,
    profit: 10000,
    stock: 17,
    weight: 3590,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898203",
        rating: 4,
        comment:
          "Revision of Synthetic Substitute in Right Sacroiliac Joint, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898271",
        rating: 5,
        comment:
          "Bypass Left External Iliac Artery to Left Internal Iliac Artery with Autologous Venous Tissue, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981eb",
        rating: 3,
        comment: "Drainage of Right Orbit, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981a2",
        rating: 1,
        comment:
          "Restriction of Right Renal Vein with Extraluminal Device, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981af",
        rating: 2,
        comment:
          "Fusion of Cervicothoracic Vertebral Joint with Interbody Fusion Device, Anterior Approach, Anterior Column, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4f",
    },
    name: "Eden Lorie",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    category: "Grocery",
    price: 2520026,
    capital: 2510026,
    profit: 10000,
    stock: 42,
    weight: 2944,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba89827d",
        rating: 5,
        comment:
          "Insertion of Intraluminal Device into Right Renal Vein, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981fb",
        rating: 2,
        comment:
          "Therapeutic Exercise Treatment of Integumentary System - Upper Back / Upper Extremity using Prosthesis",
      },
      {
        user: "64aa82aba176b956ba898362",
        rating: 4,
        comment:
          "Dilation of Coronary Artery, Three Arteries, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981d4",
        rating: 3,
        comment:
          "Replacement of Lower Tooth, All, with Autologous Tissue Substitute, External Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c52",
    },
    name: "Pepe Iliff",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    category: "Grocery",
    price: 5658520,
    capital: 5648520,
    profit: 10000,
    stock: 82,
    weight: 3016,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8982b5",
        rating: 3,
        comment: "Plain Radiography of Right Vertebral Artery",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c55",
    },
    name: "Trent Mallabone",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    category: "Outdoors",
    price: 8568412,
    capital: 8558412,
    profit: 10000,
    stock: 26,
    weight: 4324,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba8981b5",
        rating: 4,
        comment:
          "Revision of Nonautologous Tissue Substitute in Right Upper Extremity, External Approach",
      },
      {
        user: "64aa82aba176b956ba898293",
        rating: 3,
        comment:
          "High Dose Rate (HDR) Brachytherapy of Ureter using Iodine 125 (I-125)",
      },
      {
        user: "64aa82aba176b956ba898363",
        rating: 5,
        comment:
          "Excision of Right Foot Artery, Percutaneous Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8982b4",
        rating: 5,
        comment:
          "Revision of Nonautologous Tissue Substitute in Right Metacarpophalangeal Joint, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c5e",
    },
    name: "Daune Riddoch",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    category: "Grocery",
    price: 3760362,
    capital: 3750362,
    profit: 10000,
    stock: 47,
    weight: 4373,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8982f3",
        rating: 4,
        comment: "Beam Radiation of Hemibody using Electrons, Intraoperative",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c61",
    },
    name: "Laverne Dawidowsky",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    category: "Tools",
    price: 2292791,
    capital: 2282791,
    profit: 10000,
    stock: 98,
    weight: 426,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981a8",
        rating: 3,
        comment:
          "Restriction of Left Subclavian Artery with Extraluminal Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982bb",
        rating: 2,
        comment:
          "Extirpation of Matter from Tibial Nerve, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898239",
        rating: 5,
        comment:
          "Revision of Extraluminal Device in Hepatobiliary Duct, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c66",
    },
    name: "Keene Parnaby",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    category: "Clothing",
    price: 2156833,
    capital: 2146833,
    profit: 10000,
    stock: 8,
    weight: 4454,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981c7",
        rating: 1,
        comment:
          "Drainage of Subarachnoid Space, Percutaneous Approach, Diagnostic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c67",
    },
    name: "Johnathon Gettins",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    category: "Baby",
    price: 9263144,
    capital: 9253144,
    profit: 10000,
    stock: 53,
    weight: 1314,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982ac",
        rating: 2,
        comment: "Revision of Spacer in Right Carpal Joint, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c6a",
    },
    name: "Cory Elderbrant",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Tools",
    price: 9400672,
    capital: 9390672,
    profit: 10000,
    stock: 57,
    weight: 3893,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898291",
        rating: 5,
        comment:
          "Revision of Intraluminal Device in Lymphatic, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981fe",
        rating: 1,
        comment:
          "Restriction of Left Parotid Duct, Via Natural or Artificial Opening",
      },
      {
        user: "64aa82aba176b956ba898359",
        rating: 1,
        comment:
          "Replacement of Left Shoulder Joint with Synthetic Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981fa",
        rating: 3,
        comment: "Plain Radiography of Right Hand/Finger Joint",
      },
      {
        user: "64aa82aba176b956ba8982c3",
        rating: 1,
        comment:
          "Drainage of Vagina with Drainage Device, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c6b",
    },
    name: "Loralyn Bullick",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Beauty",
    price: 9597903,
    capital: 9587903,
    profit: 10000,
    stock: 30,
    weight: 2348,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba89828f",
        rating: 3,
        comment: "Drainage of Right Diaphragm, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981d9",
        rating: 5,
        comment: "Beam Radiation of Axillary Lymphatics using Neutron Capture",
      },
      {
        user: "64aa82aba176b956ba89820c",
        rating: 2,
        comment:
          "Occlusion of Right Common Iliac Vein, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c0d",
    },
    name: "Leigh Thorndycraft",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    category: "Shoes",
    price: 4245908,
    capital: 4235908,
    profit: 10000,
    stock: 61,
    weight: 2155,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8981f6",
        rating: 4,
        comment: "Dichotic Stimuli Assessment",
      },
      {
        user: "64aa82aba176b956ba8981d6",
        rating: 1,
        comment: "Reposition Left Ethmoid Bone, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c6d",
    },
    name: "Freddy Gilhool",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    category: "Health",
    price: 1049834,
    capital: 1039834,
    profit: 10000,
    stock: 97,
    weight: 3218,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89833d",
        rating: 4,
        comment: "Drainage of Left Upper Arm Skin, External Approach",
      },
      {
        user: "64aa82aba176b956ba8981b4",
        rating: 1,
        comment:
          "Introduction of Electrolytic and Water Balance Substance into Subcutaneous Tissue, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898348",
        rating: 4,
        comment: "Destruction of Right Ovary, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba89835e",
        rating: 5,
        comment:
          "Drainage of Skull with Drainage Device, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "65688fae4c54532531379c41",
    },
    name: "Dumb Truck",
    desc: "<p><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sit amet dictum sit amet justo donec enim diam. Molestie nunc non blandit massa. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Purus viverra accumsan in nisl nisi. In egestas erat imperdiet sed. Eget nunc scelerisque viverra mauris in aliquam. Massa sapien faucibus et molestie ac feugiat sed. Accumsan in nisl nisi scelerisque. Ut pharetra sit amet aliquam id diam maecenas ultricies. In eu mi bibendum neque egestas. Faucibus vitae aliquet nec ullamcorper sit. Purus in mollis nunc sed id semper risus in. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Dolor purus non enim praesent elementum. Quisque non tellus orci ac auctor augue mauris augue neque. Viverra justo nec ultrices dui sapien eget mi proin. Auctor eu augue ut lectus arcu bibendum at varius vel.</p><p>Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Neque gravida in fermentum et. Nisl tincidunt eget nullam non nisi est sit. Purus in massa tempor nec feugiat nisl pretium fusce. Aliquam purus sit amet luctus. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nibh mauris cursus mattis molestie a. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Habitant morbi tristique senectus et. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Rhoncus mattis rhoncus urna neque viverra justo nec. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p><p><br></p><p>Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna. Mauris cursus mattis molestie a iaculis at. Semper viverra nam libero justo laoreet sit amet cursus. Sit amet massa vitae tortor condimentum lacinia quis. Porta nibh venenatis cras sed felis eget. Purus sit amet luctus venenatis. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Mollis nunc sed id semper risus in. Pretium lectus quam id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet justo donec enim diam vulputate ut pharetra sit. Egestas maecenas pharetra convallis posuere morbi leo urna. Mattis nunc sed blandit libero volutpat sed cras ornare. Cum sociis natoque penatibus et magnis. Scelerisque in dictum non consectetur a erat nam at. Proin sed libero enim sed faucibus turpis in eu.</p><p>Tortor at risus viverra adipiscing at in tellus integer feugiat. Et netus et malesuada fames ac turpis. In vitae turpis massa sed elementum. Purus gravida quis blandit turpis cursus in hac. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Platea dictumst quisque sagittis purus sit amet volutpat. Facilisis volutpat est velit egestas. Vitae sapien pellentesque habitant morbi</p><p><br></p><p><br></p><p>tristique senectus. Mus mauris vitae ultricies leo integer. Ut pharetra sit amet aliquam id. Nunc eget lorem dolor sed viverra ipsum. Rutrum tellus pellentesque eu tincidunt. In ante metus dictum at tempor commodo ullamcorper a. Accumsan in nisl nisi scelerisque eu.</p><p>Consequat semper viverra nam libero justo. Amet venenatis urna cursus eget nunc. Facilisi cras fermentum odio eu feugiat. Luctus accumsan tortor posuere ac. Purus in mollis nunc sed id. Turpis massa sed elementum tempus egestas sed. Diam volutpat commodo sed egestas. Sed augue lacus viverra vitae congue. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Erat imperdiet sed euismod nisi.</p>",
    category: "Heavy Car",
    image: [
      {
        link: "https://app1.jadidalmagribi.com/images/C1-1701357888855-1703488247691.jpg",
        _id: {
          $oid: "65892af7994dec19816b776e",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/C2-1701357888865-1703488247692.jpg",
        _id: {
          $oid: "65892af7994dec19816b776f",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/E1-1701351342019-1703488247694.jpg",
        _id: {
          $oid: "65892af7994dec19816b7770",
        },
      },
    ],
    price: 15000000,
    capital: 11000000,
    profit: 4000000,
    stock: 10,
    weight: 3000,
    rating: 0,
    reviews: [],
    createdAt: {
      $date: "2023-11-30T13:35:42.469Z",
    },
    updatedAt: {
      $date: "2023-12-25T07:10:47.734Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1d",
    },
    name: "Karalynn Maiden",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    category: "Books",
    price: 6984743,
    capital: 6974743,
    profit: 10000,
    stock: 19,
    weight: 1909,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981c4",
        rating: 3,
        comment:
          "Removal of Autologous Tissue Substitute from Right Upper Extremity, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898334",
        rating: 1,
        comment:
          "Bypass Coronary Artery, Four or More Arteries from Right Internal Mammary, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981a0",
        rating: 2,
        comment: "Repair Left Femoral Region, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1e",
    },
    name: "Geoffrey Mulliss",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    category: "Games",
    price: 3388503,
    capital: 3378503,
    profit: 10000,
    stock: 44,
    weight: 226,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981df",
        rating: 4,
        comment:
          "Alteration of Right Elbow Region with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982b3",
        rating: 4,
        comment:
          "Bypass Right Subclavian Artery to Bilateral Lower Leg Artery with Autologous Venous Tissue, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89824a",
        rating: 3,
        comment:
          "Replacement of Aortic Valve with Autologous Tissue Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c27",
    },
    name: "Vernen Tibbles",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    category: "Health",
    price: 4912392,
    capital: 4902392,
    profit: 10000,
    stock: 38,
    weight: 1328,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8982d2",
        rating: 3,
        comment:
          "Extirpation of Matter from Accessory Pancreatic Duct, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898321",
        rating: 4,
        comment:
          "Bypass Left Atrium to Left Pulmonary Vein, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981e4",
        rating: 1,
        comment:
          "Supplement Right Knee Bursa and Ligament with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898360",
        rating: 2,
        comment:
          "Replacement of Cervical Vertebral Disc with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898378",
        rating: 3,
        comment:
          "Drainage of Left Foot Vein with Drainage Device, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2b",
    },
    name: "Clerkclaude Gallandre",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    category: "Outdoors",
    price: 3280065,
    capital: 3270065,
    profit: 10000,
    stock: 17,
    weight: 4771,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89828f",
        rating: 3,
        comment:
          "Insertion of Pedicle-Based Spinal Stabilization Device into Thoracic Vertebral Joint, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c32",
    },
    name: "Lin Wrathall",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    category: "Baby",
    price: 7312277,
    capital: 7302277,
    profit: 10000,
    stock: 39,
    weight: 4660,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8981ff",
        rating: 3,
        comment:
          "Revision of Nonautologous Tissue Substitute in Spinal Cord, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898377",
        rating: 3,
        comment:
          "Computerized Tomography (CT Scan) of Right Pulmonary Vein using Low Osmolar Contrast, Unenhanced and Enhanced",
      },
      {
        user: "64aa82aba176b956ba898384",
        rating: 4,
        comment:
          "Bypass Left Brachial Artery to Left Lower Arm Artery with Autologous Arterial Tissue, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981cb",
        rating: 3,
        comment:
          "Fusion of Left Metacarpocarpal Joint with Internal Fixation Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981f0",
        rating: 5,
        comment:
          "Bypass Right Innominate Vein to Upper Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c34",
    },
    name: "Aurora Hagard",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    category: "Automotive",
    price: 4930580,
    capital: 4920580,
    profit: 10000,
    stock: 21,
    weight: 3110,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898300",
        rating: 3,
        comment:
          "Drainage of Left Lesser Saphenous Vein, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c35",
    },
    name: "Gunter Salter",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    category: "Automotive",
    price: 5064475,
    capital: 5054475,
    profit: 10000,
    stock: 11,
    weight: 2734,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8981b5",
        rating: 1,
        comment: "Excision of Left Hand, Percutaneous Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba898223",
        rating: 3,
        comment:
          "Replacement of Right Tarsal with Autologous Tissue Substitute, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3b",
    },
    name: "Edie Deluce",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    category: "Sports",
    price: 6713552,
    capital: 6703552,
    profit: 10000,
    stock: 64,
    weight: 4373,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8982bd",
        rating: 3,
        comment: "Repair Left Shoulder Tendon, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3d",
    },
    name: "Bondie Hasker",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    category: "Health",
    price: 7201283,
    capital: 7191283,
    profit: 10000,
    stock: 27,
    weight: 4420,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898313",
        rating: 4,
        comment:
          "Excision of Right Fibula, Percutaneous Endoscopic Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8982e2",
        rating: 1,
        comment:
          "Insertion of Infusion Device into Right Temporal Artery, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981e5",
        rating: 5,
        comment:
          "Bypass Cerebral Ventricle to Peritoneal Cavity with Nonautologous Tissue Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c45",
    },
    name: "Ronica Stears",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    category: "Baby",
    price: 82766,
    capital: 72766,
    profit: 10000,
    stock: 28,
    weight: 4073,
    rating: 4,
    reviews: [
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 5,
        comment: "Ini barang bagus banget cuyy, wajib beli nih",
        _id: {
          $oid: "6580510a8435f1bcf44af9aa",
        },
      },
    ],
    __v: 1,
    updatedAt: {
      $date: "2023-12-18T14:02:50.374Z",
    },
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c46",
    },
    name: "Angele Kinze",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    category: "Garden",
    price: 1340180,
    capital: 1330180,
    profit: 10000,
    stock: 8,
    weight: 2151,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898269",
        rating: 4,
        comment:
          "Replacement of Right Ureter with Synthetic Substitute, Via Natural or Artificial Opening Endoscopic",
      },
      {
        user: "64aa82aba176b956ba8982b0",
        rating: 5,
        comment: "Division of Left Abdomen Bursa and Ligament, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89831f",
        rating: 5,
        comment: "Drainage of Cerebral Hemisphere, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981c6",
        rating: 3,
        comment:
          "Revision of Drainage Device in Lumbar Vertebral Disc, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4b",
    },
    name: "Shadow Seston",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    category: "Industrial",
    price: 2481356,
    capital: 2471356,
    profit: 10000,
    stock: 69,
    weight: 3740,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8981b9",
        rating: 5,
        comment: "Excision of Cervical Vertebra, Open Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba89836d",
        rating: 3,
        comment: "Reattachment of Vulva, External Approach",
      },
      {
        user: "64aa82aba176b956ba898212",
        rating: 5,
        comment:
          "Revision of Nonautologous Tissue Substitute in Great Vessel, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4e",
    },
    name: "Randell Cowp",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    category: "Books",
    price: 2716126,
    capital: 2706126,
    profit: 10000,
    stock: 29,
    weight: 2573,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898217",
        rating: 3,
        comment:
          "Insertion of Radioactive Element into Right Lung, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89824a",
        rating: 1,
        comment: "Drainage of Right Face Vein, Open Approach, Diagnostic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c5b",
    },
    name: "Cody Jenk",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Garden",
    price: 8755949,
    capital: 8745949,
    profit: 10000,
    stock: 55,
    weight: 2630,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8981f0",
        rating: 2,
        comment: "Excision of Abdominal Wall, External Approach",
      },
      {
        user: "64aa82aba176b956ba89837f",
        rating: 1,
        comment:
          "Supplement Cystic Duct with Synthetic Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898379",
        rating: 2,
        comment:
          "Insertion of Internal Fixation Device into Right Maxilla, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba89835e",
        rating: 3,
        comment: "Drainage of Right Mandible, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898367",
        rating: 4,
        comment:
          "Dilation of Celiac Artery with Two Intraluminal Devices, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c5f",
    },
    name: "Pammi Hessentaler",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    category: "Music",
    price: 9419412,
    capital: 9409412,
    profit: 10000,
    stock: 82,
    weight: 1998,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba89828d",
        rating: 4,
        comment: "Transfer Right Trunk Tendon, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981b7",
        rating: 1,
        comment:
          "Insertion of Neurostimulator Lead into Right Innominate Vein, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c64",
    },
    name: "Gina Silverwood",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    category: "Beauty",
    price: 9676375,
    capital: 9666375,
    profit: 10000,
    stock: 76,
    weight: 3280,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba8982ee",
        rating: 3,
        comment: "Inspection of Chest Wall, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981de",
        rating: 3,
        comment:
          "Removal of Drainage Device from Pancreatic Duct, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c68",
    },
    name: "Leontine McKue",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    category: "Jewelry",
    price: 6821775,
    capital: 6811775,
    profit: 10000,
    stock: 68,
    weight: 149,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89827f",
        rating: 3,
        comment:
          "Excision of Left Thorax Bursa and Ligament, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89830d",
        rating: 2,
        comment:
          "Bypass Left Femoral Artery to Bilateral Femoral Arteries with Synthetic Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982b3",
        rating: 4,
        comment: "Removal of Neurostimulator Lead from Brain, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898325",
        rating: 3,
        comment:
          "Removal of Infusion Device from Right Tarsal Joint, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898371",
        rating: 3,
        comment: "Excision of Celiac Artery, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c69",
    },
    name: "Rowe Jeandin",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    category: "Sports",
    price: 3783202,
    capital: 3773202,
    profit: 10000,
    stock: 51,
    weight: 814,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba898363",
        rating: 3,
        comment: "Inspection of Larynx, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c6c",
    },
    name: "Thornton Belcham",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    category: "Computers",
    price: 1093132,
    capital: 1083132,
    profit: 10000,
    stock: 30,
    weight: 2568,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba89830b",
        rating: 1,
        comment:
          "Extirpation of Matter from Left Upper Leg Subcutaneous Tissue and Fascia, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c0a",
    },
    name: "Theresa Arne",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    category: "Music",
    price: 2389934,
    capital: 2379934,
    profit: 10000,
    stock: 93,
    weight: 460,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba89827d",
        rating: 3,
        comment:
          "Introduction of Idarucizumab, Dabigatran Reversal Agent into Peripheral Vein, Percutaneous Approach, New Technology Group 1",
      },
      {
        user: "64aa82aba176b956ba8982fb",
        rating: 2,
        comment: "Removal of Brace on Right Upper Arm",
      },
      {
        user: "64aa82aba176b956ba8981a4",
        rating: 1,
        comment:
          "Insertion of Radioactive Element into Pelvic Cavity, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c0f",
    },
    name: "Bryanty MacCollom",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    category: "Electronics",
    price: 5666298,
    capital: 5656298,
    profit: 10000,
    stock: 6,
    weight: 2836,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8981bc",
        rating: 1,
        comment:
          "Insertion of Spacer into Right Metatarsal-Phalangeal Joint, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c18",
    },
    name: "Edgard Liquorish",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    category: "Industrial",
    price: 5001054,
    capital: 4991054,
    profit: 10000,
    stock: 30,
    weight: 3867,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898295",
        rating: 1,
        comment: "Drainage of Right Popliteal Artery, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898384",
        rating: 2,
        comment: "Occlusion of Right Upper Extremity Lymphatic, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982db",
        rating: 5,
        comment:
          "Fusion of Lumbar Vertebral Joint with Synthetic Substitute, Posterior Approach, Anterior Column, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c19",
    },
    name: "Brose Cavozzi",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    category: "Toys",
    price: 8793374,
    capital: 8783374,
    profit: 10000,
    stock: 11,
    weight: 1434,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981d6",
        rating: 2,
        comment: "Inspection of Female Perineum, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981a7",
        rating: 2,
        comment: "Oral Peripheral Mechanism Assessment",
      },
      {
        user: "64aa82aba176b956ba898360",
        rating: 1,
        comment:
          "Reposition Left Metacarpocarpal Joint with Internal Fixation Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89819c",
        rating: 5,
        comment:
          "Insertion of Pedicle-Based Spinal Stabilization Device into Thoracic Vertebral Joint, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1b",
    },
    name: "Robinette Welbelove",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Computers",
    price: 5596581,
    capital: 5586581,
    profit: 10000,
    stock: 52,
    weight: 2839,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8981a0",
        rating: 4,
        comment:
          "Restriction of Right Popliteal Artery with Extraluminal Device, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981c8",
        rating: 2,
        comment:
          "Destruction of Head and Neck Bursa and Ligament, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1c",
    },
    name: "Brucie Wilbor",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    category: "Games",
    price: 8094038,
    capital: 8084038,
    profit: 10000,
    stock: 36,
    weight: 4633,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89834c",
        rating: 3,
        comment:
          "Insertion of Facet Replacement Spinal Stabilization Device into Thoracolumbar Vertebral Joint, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898282",
        rating: 1,
        comment:
          "Bypass Inferior Vena Cava to Inferior Mesenteric Vein with Synthetic Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1f",
    },
    name: "Gilli Dabernott",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    category: "Automotive",
    price: 1628109,
    capital: 1618109,
    profit: 10000,
    stock: 17,
    weight: 504,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982e2",
        rating: 5,
        comment:
          "Bypass Coronary Artery, Two Arteries from Thoracic Artery with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981a7",
        rating: 4,
        comment: "Contact Radiation of Femur",
      },
      {
        user: "64aa82aba176b956ba8982ba",
        rating: 5,
        comment:
          "Removal of Intraluminal Device from Kidney, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898212",
        rating: 5,
        comment:
          "Dilation of Left Femoral Artery using Drug-Coated Balloon, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c21",
    },
    name: "Jsandye Auty",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    category: "Kids",
    price: 3900656,
    capital: 3890656,
    profit: 10000,
    stock: 28,
    weight: 3349,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898374",
        rating: 4,
        comment: "Drainage of Left Lower Lung Lobe, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c23",
    },
    name: "Jasun Connikie",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    category: "Beauty",
    price: 7321690,
    capital: 7311690,
    profit: 10000,
    stock: 2,
    weight: 1093,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898225",
        rating: 2,
        comment:
          "Dilation of Left Pulmonary Vein with Drug-eluting Intraluminal Device, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981b1",
        rating: 1,
        comment:
          "Destruction of Left Frontal Bone, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c26",
    },
    name: "Leonard Ivermee",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    category: "Automotive",
    price: 8723649,
    capital: 8713649,
    profit: 10000,
    stock: 17,
    weight: 4532,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898334",
        rating: 5,
        comment:
          "Supplement Left Posterior Tibial Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898291",
        rating: 3,
        comment:
          "Supplement Cervicothoracic Vertebral Disc with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89822d",
        rating: 5,
        comment:
          "Drainage of Nasal Bone with Drainage Device, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c29",
    },
    name: "Catlee Waterman",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    category: "Clothing",
    price: 7149399,
    capital: 7139399,
    profit: 10000,
    stock: 58,
    weight: 4696,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8981ac",
        rating: 2,
        comment:
          "Bypass Jejunum to Rectum with Autologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic",
      },
      {
        user: "64aa82aba176b956ba898286",
        rating: 1,
        comment:
          "Excision of Right Lower Extremity, Percutaneous Endoscopic Approach, Diagnostic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2e",
    },
    name: "Mortie Tockell",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    category: "Toys",
    price: 9189623,
    capital: 9179623,
    profit: 10000,
    stock: 35,
    weight: 2152,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89831d",
        rating: 1,
        comment: "Resection of Right Upper Lung Lobe, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898367",
        rating: 2,
        comment:
          "Supplement Right External Iliac Vein with Nonautologous Tissue Substitute, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981a1",
        rating: 4,
        comment:
          "Dilation of Left Internal Mammary Artery with Intraluminal Device, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898278",
        rating: 3,
        comment:
          "Computerized Tomography (CT Scan) of Bilateral Kidneys using Low Osmolar Contrast, Unenhanced and Enhanced",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2f",
    },
    name: "Micky Zoephel",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: "Outdoors",
    price: 291779,
    capital: 281779,
    profit: 10000,
    stock: 34,
    weight: 3828,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba898387",
        rating: 5,
        comment:
          "Removal of Intraluminal Device from Upper Vein, External Approach",
      },
      {
        user: "64aa82aba176b956ba898244",
        rating: 4,
        comment:
          "Revision of Nonautologous Tissue Substitute in Right Metatarsal-Tarsal Joint, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982c3",
        rating: 3,
        comment:
          "Extirpation of Matter from Mesenteric Lymphatic, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981c2",
        rating: 3,
        comment: "Change Packing Material on Right Foot",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c30",
    },
    name: "Darbee O'Neil",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    category: "Games",
    price: 5781066,
    capital: 5771066,
    profit: 10000,
    stock: 26,
    weight: 4309,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba89834a",
        rating: 3,
        comment:
          "Extirpation of Matter from Bilateral Lungs, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c37",
    },
    name: "Sayers Dericot",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    category: "Clothing",
    price: 3732291,
    capital: 3722291,
    profit: 10000,
    stock: 49,
    weight: 1678,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898228",
        rating: 2,
        comment:
          "Supplement Cervical Vertebral Joint with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898373",
        rating: 5,
        comment: "Inspection of Right Wrist Region, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8982e8",
        rating: 4,
        comment:
          "Dilation of Hepatic Vein with Intraluminal Device, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898197",
        rating: 3,
        comment: "Repair Left Finger Phalangeal Joint, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c38",
    },
    name: "Daveta Clowton",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    category: "Grocery",
    price: 6416734,
    capital: 6406734,
    profit: 10000,
    stock: 15,
    weight: 3262,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981e1",
        rating: 2,
        comment:
          "Drainage of Trigeminal Nerve with Drainage Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898248",
        rating: 4,
        comment:
          "Supplement Lower Back with Synthetic Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982ab",
        rating: 4,
        comment:
          "Fragmentation in Uterus, Via Natural or Artificial Opening Endoscopic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c39",
    },
    name: "Sheri McKinnon",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    category: "Music",
    price: 9115049,
    capital: 9105049,
    profit: 10000,
    stock: 10,
    weight: 4460,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898239",
        rating: 3,
        comment: "Excision of Gastric Artery, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3a",
    },
    name: "Penn Staker",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    category: "Home",
    price: 1405173,
    capital: 1395173,
    profit: 10000,
    stock: 58,
    weight: 3471,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898297",
        rating: 2,
        comment:
          "Occlusion of Lower Artery with Intraluminal Device, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c40",
    },
    name: "Charmion Olenchenko",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    category: "Computers",
    price: 516945,
    capital: 506945,
    profit: 10000,
    stock: 99,
    weight: 3307,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba898363",
        rating: 2,
        comment:
          "Plain Radiography of Bilateral Salivary Glands using High Osmolar Contrast",
      },
      {
        user: "64aa82aba176b956ba8982d5",
        rating: 3,
        comment:
          "Reposition Left Zygomatic Bone with Internal Fixation Device, Open Approach",
      },
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 2,
        comment: "Math round\n",
        _id: {
          $oid: "658184bda826cabc19532306",
        },
        createdAt: {
          $date: "2023-12-19T11:55:41.507Z",
        },
        updatedAt: {
          $date: "2023-12-19T11:55:41.507Z",
        },
      },
    ],
    __v: 2,
    updatedAt: {
      $date: "2023-12-19T12:02:46.498Z",
    },
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4a",
    },
    name: "Hayyim Hadye",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    category: "Baby",
    price: 3753731,
    capital: 3743731,
    profit: 10000,
    stock: 65,
    weight: 2397,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8982a4",
        rating: 4,
        comment:
          "Revision of Feeding Device in Lower Intestinal Tract, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982db",
        rating: 1,
        comment: "Beam Radiation of Arm Skin using Photons >10 MeV",
      },
      {
        user: "64aa82aba176b956ba898361",
        rating: 3,
        comment:
          "Supplement Right Large Intestine with Synthetic Substitute, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c4c",
    },
    name: "Victor Kearton",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: "Music",
    price: 958664,
    capital: 948664,
    profit: 10000,
    stock: 38,
    weight: 4320,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89831a",
        rating: 2,
        comment: "Fragmentation in Jejunum, External Approach",
      },
      {
        user: "64aa82aba176b956ba898304",
        rating: 4,
        comment: "Repair Left Renal Vein, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c50",
    },
    name: "Kelli Clashe",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    category: "Shoes",
    price: 9672399,
    capital: 9662399,
    profit: 10000,
    stock: 68,
    weight: 4219,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898341",
        rating: 1,
        comment:
          "Alteration of Left Upper Eyelid with Nonautologous Tissue Substitute, External Approach",
      },
      {
        user: "64aa82aba176b956ba8982a7",
        rating: 3,
        comment:
          "Restriction of Left Foot Vein with Intraluminal Device, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898267",
        rating: 1,
        comment: "Resection of Right Toe Phalangeal Joint, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898255",
        rating: 4,
        comment:
          "Removal of Nonautologous Tissue Substitute from Occipital-cervical Joint, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c54",
    },
    name: "Alexandre Flanigan",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    category: "Books",
    price: 3633591,
    capital: 3623591,
    profit: 10000,
    stock: 16,
    weight: 1860,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89823d",
        rating: 1,
        comment: "Repair Right Hand Muscle, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981d9",
        rating: 1,
        comment: "Repair Uterus, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c57",
    },
    name: "Andree Richardes",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    category: "Beauty",
    price: 358737,
    capital: 348737,
    profit: 10000,
    stock: 7,
    weight: 1853,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898262",
        rating: 2,
        comment:
          "Extirpation of Matter from Left Metatarsal-Phalangeal Joint, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c59",
    },
    name: "Barthel Rappoport",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    category: "Books",
    price: 5414300,
    capital: 5404300,
    profit: 10000,
    stock: 44,
    weight: 4536,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8982d4",
        rating: 3,
        comment: "Fluoroscopy of Aorta and Bilateral Lower Extremity Arteries",
      },
      {
        user: "64aa82aba176b956ba8981ec",
        rating: 4,
        comment: "Repair Bilateral Breast, External Approach",
      },
      {
        user: "64aa82aba176b956ba8981f0",
        rating: 2,
        comment:
          "Supplement Right Upper Leg Tendon with Synthetic Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981de",
        rating: 2,
        comment:
          "Insertion of Internal Fixation Device into Left Acromioclavicular Joint, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c5c",
    },
    name: "Maire Tappington",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: "Jewelry",
    price: 1014231,
    capital: 1004231,
    profit: 10000,
    stock: 6,
    weight: 2947,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba89830a",
        rating: 5,
        comment: "Removal of Extraluminal Device from Stomach, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c5d",
    },
    name: "Bruno Leahey",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    category: "Games",
    price: 2092250,
    capital: 2082250,
    profit: 10000,
    stock: 32,
    weight: 4960,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898321",
        rating: 2,
        comment: "Excision of Upper Back, Percutaneous Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8982ed",
        rating: 2,
        comment:
          "Fusion of Lumbosacral Joint with Interbody Fusion Device, Posterior Approach, Posterior Column, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89835b",
        rating: 4,
        comment: "Repair Right Tarsal Joint, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89827b",
        rating: 5,
        comment:
          "Bypass Innominate Artery to Lower Arm Vein with Synthetic Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c60",
    },
    name: "Rory Coopman",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    category: "Industrial",
    price: 5615597,
    capital: 5605597,
    profit: 10000,
    stock: 50,
    weight: 2013,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba8982bd",
        rating: 1,
        comment:
          "Drainage of Sacral Nerve with Drainage Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898244",
        rating: 5,
        comment: "Repair of Lower Tooth, Multiple, External Approach",
      },
      {
        user: "64aa82aba176b956ba898306",
        rating: 5,
        comment: "Gastrointestinal System, Reattachment",
      },
      {
        user: "64aa82aba176b956ba898218",
        rating: 3,
        comment:
          "Plain Radiography of Left Testicle using High Osmolar Contrast",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c62",
    },
    name: "Yuri Raubenheim",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    category: "Baby",
    price: 4414902,
    capital: 4404902,
    profit: 10000,
    stock: 43,
    weight: 4860,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba8982b3",
        rating: 2,
        comment:
          "Dilation of Left External Iliac Artery with Three Drug-eluting Intraluminal Devices, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89821c",
        rating: 1,
        comment:
          "Computerized Tomography (CT Scan) of Right Pelvic (Iliac) Veins using Intravascular Optical Coherence",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c63",
    },
    name: "Channa Keynd",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    category: "Books",
    price: 2401709,
    capital: 2391709,
    profit: 10000,
    stock: 23,
    weight: 210,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898348",
        rating: 5,
        comment:
          "Repair Right Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c65",
    },
    name: "Iormina Berdale",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    category: "Games",
    price: 7798405,
    capital: 7788405,
    profit: 10000,
    stock: 51,
    weight: 4367,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981cc",
        rating: 2,
        comment:
          "Low Dose Rate (LDR) Brachytherapy of Soft Palate using Californium 252 (Cf-252)",
      },
      {
        user: "64aa82aba176b956ba898334",
        rating: 1,
        comment:
          "High Dose Rate (HDR) Brachytherapy of Nose using Other Isotope",
      },
      {
        user: "64aa82aba176b956ba8981eb",
        rating: 3,
        comment:
          "Select Picture Audiometry Assessment using Audiovisual Equipment",
      },
      {
        user: "64aa82aba176b956ba898378",
        rating: 1,
        comment:
          "Introduction of Analgesics, Hypnotics, Sedatives into Upper GI, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8982f1",
        rating: 5,
        comment: "Drainage of Cul-de-sac with Drainage Device, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "65693f7e566a5259e072cbce",
    },
    name: "Infinix X2",
    desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 8GB DDR4</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Windows 11 Home</span></p><p><span style="color: rgb(33, 33, 33);">• Display : 14" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style="color: rgb(33, 33, 33);">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Ports :</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data)</span></p><p><span style="color: rgb(33, 33, 33);">USB 3.0 × 2</span></p><p><span style="color: rgb(33, 33, 33);">HDMI 1.4 × 1</span></p><p><span style="color: rgb(33, 33, 33);">SD card slot x 1</span></p><p><span style="color: rgb(33, 33, 33);">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style="color: rgb(33, 33, 33);">• Touchpad : Touchpad with Multi-touch</span></p><p><span style="color: rgb(33, 33, 33);">• Camera : Dual-Star light HD Video Camera</span></p><p><span style="color: rgb(33, 33, 33);">• Audio : Dual DTS audio processing</span></p><p><span style="color: rgb(33, 33, 33);">• Microphone : Microphone x 2</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• In The Box :</span></p><p><span style="color: rgb(33, 33, 33);">Inbook X2</span></p><p><span style="color: rgb(33, 33, 33);">45W USB-C Power Adapter</span></p><p><span style="color: rgb(33, 33, 33);">USB-C Charger Cable</span></p><p><span style="color: rgb(33, 33, 33);">Quick Start Guide</span></p><p><span style="color: rgb(33, 33, 33);">Warranty Card</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Case : Aluminium Alloy</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
    category: "Laptop",
    image: [
      {
        link: "https://app1.jadidalmagribi.com/images/3a72dd51-10e5-45f3-9d2b-b34e82c15be7-1701396350011-1703488271904.png",
        _id: {
          $oid: "65892b0f994dec19816b7b19",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/7e8238d3-39de-49c1-a5fa-570f1cdb8930-1701396350017-1703488271905.jpg",
        _id: {
          $oid: "65892b0f994dec19816b7b1a",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/7fe4596b-4940-4638-bf72-76a959cc614c-1701396350363-1703488271907.png",
        _id: {
          $oid: "65892b0f994dec19816b7b1b",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/36e09dcd-d3db-479c-82bd-be8dbde6f8e1-1701396350363-1703488271907.png",
        _id: {
          $oid: "65892b0f994dec19816b7b1c",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/56dc4d3e-76a7-437f-83e0-d807915dce1d-1701396350364-1703488271907.png",
        _id: {
          $oid: "65892b0f994dec19816b7b1d",
        },
      },
    ],
    price: 6000000,
    capital: 5500000,
    profit: 500000,
    stock: 50,
    weight: 4000,
    rating: 0,
    reviews: [],
    createdAt: {
      $date: "2023-12-01T02:05:50.439Z",
    },
    updatedAt: {
      $date: "2023-12-25T07:11:11.946Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c15",
    },
    name: "Hercule O'Fallon",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
    ],
    desc: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    category: "Jewelry",
    price: 2722817,
    capital: 2712817,
    profit: 10000,
    stock: 56,
    weight: 4775,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba8982da",
        rating: 4,
        comment: "Drainage of Right Lacrimal Bone, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c16",
    },
    name: "Kath Haswell",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    category: "Games",
    price: 1850313,
    capital: 1840313,
    profit: 10000,
    stock: 37,
    weight: 3481,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8982ee",
        rating: 2,
        comment:
          "Drainage of Left Lower Lobe Bronchus with Drainage Device, Via Natural or Artificial Opening",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c17",
    },
    name: "Vincenz Carwithen",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    category: "Tools",
    price: 2218417,
    capital: 2208417,
    profit: 10000,
    stock: 73,
    weight: 3122,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898213",
        rating: 4,
        comment: "Inspection of Skull, External Approach",
      },
      {
        user: "64aa82aba176b956ba89824d",
        rating: 5,
        comment:
          "Removal of Tracheostomy Device from Trachea, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981ed",
        rating: 5,
        comment:
          "Bypass Right Atrium to Left Pulmonary Artery with Zooplastic Tissue, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89833e",
        rating: 1,
        comment:
          "Removal of Nonautologous Tissue Substitute from Vagina and Cul-de-sac, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c1a",
    },
    name: "Kiel Quarrell",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: "Music",
    price: 1475963,
    capital: 1465963,
    profit: 10000,
    stock: 93,
    weight: 4181,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898218",
        rating: 1,
        comment:
          "Dilation of Right Renal Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89834f",
        rating: 1,
        comment:
          "Insertion of Infusion Device into Thoracic Vertebral Joint, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba89821e",
        rating: 1,
        comment:
          "Excision of Left Trunk Tendon, Percutaneous Endoscopic Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8981b8",
        rating: 5,
        comment: "Resection of Common Bile Duct, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c22",
    },
    name: "Steward Wildber",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    category: "Outdoors",
    price: 1717535,
    capital: 1707535,
    profit: 10000,
    stock: 24,
    weight: 1603,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898339",
        rating: 5,
        comment:
          "Reposition Right Humeral Head with Hybrid External Fixation Device, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982d4",
        rating: 4,
        comment: "Inspection of Lower Back, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898331",
        rating: 5,
        comment:
          "Extirpation of Matter from Abducens Nerve, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898288",
        rating: 3,
        comment: "Change Other Device in Vulva, External Approach",
      },
      {
        user: "64aa82aba176b956ba89836a",
        rating: 4,
        comment:
          "Dilation of Abdominal Aorta, Bifurcation, with Three Intraluminal Devices, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c25",
    },
    name: "Doe Pygott",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    category: "Kids",
    price: 7388262,
    capital: 7378262,
    profit: 10000,
    stock: 5,
    weight: 3677,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898305",
        rating: 4,
        comment:
          "Replacement of Aortic Valve using Zooplastic Tissue, Rapid Deployment Technique, Percutaneous Endoscopic Approach, New Technology Group 2",
      },
      {
        user: "64aa82aba176b956ba89836a",
        rating: 5,
        comment:
          "Dilation of Intracranial Artery with Three Intraluminal Devices, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982aa",
        rating: 4,
        comment:
          "Alteration of Chest Wall with Synthetic Substitute, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8982d5",
        rating: 2,
        comment:
          "Introduction of Clofarabine into Peripheral Vein, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898215",
        rating: 2,
        comment: "Revision of Synthetic Substitute in Vulva, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2a",
    },
    name: "Blaire Messingham",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    category: "Baby",
    price: 1016774,
    capital: 1006774,
    profit: 10000,
    stock: 77,
    weight: 4714,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba898239",
        rating: 5,
        comment: "Beam Radiation of Sinuses using Photons <1 MeV",
      },
      {
        user: "64aa82aba176b956ba89824f",
        rating: 3,
        comment: "Beam Radiation of Kidney using Photons 1 - 10 MeV",
      },
      {
        user: "64aa82aba176b956ba89825a",
        rating: 4,
        comment:
          "Bypass Left Common Iliac Artery to Right Femoral Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898290",
        rating: 3,
        comment:
          "Extirpation of Matter from Lower Esophagus, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8981ef",
        rating: 2,
        comment:
          "Removal of Nonautologous Tissue Substitute from Cisterna Chyli, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c2d",
    },
    name: "Wendie Sterry",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    category: "Music",
    price: 9581249,
    capital: 9571249,
    profit: 10000,
    stock: 41,
    weight: 1463,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba898369",
        rating: 5,
        comment:
          "Excision of Right Pelvic Bone, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898196",
        rating: 3,
        comment:
          "Removal of Infusion Device from Hepatobiliary Duct, Via Natural or Artificial Opening",
      },
      {
        user: "64aa82aba176b956ba8981e7",
        rating: 2,
        comment: "Excision of Lumbar Nerve, Open Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8982dd",
        rating: 5,
        comment:
          "Extraction of Right Foot Vein, Percutaneous Endoscopic Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c36",
    },
    name: "Melba Hakking",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    category: "Toys",
    price: 5884756,
    capital: 5874756,
    profit: 10000,
    stock: 66,
    weight: 805,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89828d",
        rating: 3,
        comment:
          "Bypass Left Lesser Saphenous Vein to Lower Vein with Autologous Venous Tissue, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898301",
        rating: 5,
        comment:
          "Supplement Left Retina with Synthetic Substitute, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3e",
    },
    name: "Bibbye Olliff",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    category: "Industrial",
    price: 3261504,
    capital: 3251504,
    profit: 10000,
    stock: 49,
    weight: 342,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898268",
        rating: 4,
        comment:
          "Drainage of Head and Neck Sympathetic Nerve, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8982ad",
        rating: 2,
        comment:
          "Occlusion of Cisterna Chyli with Extraluminal Device, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981fb",
        rating: 5,
        comment: "Drainage of Sternum, Open Approach, Diagnostic",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c3f",
    },
    name: "Morris Burren",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    category: "Garden",
    price: 457182,
    capital: 447182,
    profit: 10000,
    stock: 17,
    weight: 198,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba898247",
        rating: 4,
        comment:
          "Insertion of Infusion Device into Left External Carotid Artery, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898328",
        rating: 2,
        comment: "Excision of Mediastinum, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89825c",
        rating: 1,
        comment: "Repair Glossopharyngeal Nerve, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8981be",
        rating: 1,
        comment:
          "Drainage of Left Foot Artery with Drainage Device, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba89819b",
        rating: 2,
        comment:
          "Occlusion of Left Thyroid Artery with Intraluminal Device, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c41",
    },
    name: "Pippo Pharaoh",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: "Home",
    price: 7401864,
    capital: 7391864,
    profit: 10000,
    stock: 23,
    weight: 3044,
    rating: 3,
    reviews: [
      {
        user: "64aa82aba176b956ba8981ef",
        rating: 1,
        comment:
          "Destruction of Anterior Neck Subcutaneous Tissue and Fascia, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89828b",
        rating: 4,
        comment:
          "Revision of Synthetic Substitute in Left Acromioclavicular Joint, Open Approach",
      },
      {
        user: "64aa82aba176b956ba89831c",
        rating: 3,
        comment:
          "Revision of Monitoring Device in Great Vessel, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8981e9",
        rating: 3,
        comment: "Division of Left Knee Bursa and Ligament, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982f4",
        rating: 5,
        comment:
          "Removal of Synthetic Substitute from Left Pelvic Bone, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c43",
    },
    name: "Isahella Dangl",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    category: "Automotive",
    price: 6986874,
    capital: 6976874,
    profit: 10000,
    stock: 51,
    weight: 4527,
    rating: 5,
    reviews: [
      {
        user: "64aa82aba176b956ba89824b",
        rating: 3,
        comment:
          "Therapeutic Exercise Treatment of Integumentary System - Whole Body using Physical Agents",
      },
      {
        user: "64aa82aba176b956ba8982b4",
        rating: 3,
        comment: "Excision of Coronary Vein, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982d7",
        rating: 1,
        comment: "Revision of Infusion Device in Face, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898210",
        rating: 3,
        comment: "Reposition Right Peroneal Artery, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c44",
    },
    name: "Cesya Daunter",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    category: "Baby",
    price: 3834019,
    capital: 3824019,
    profit: 10000,
    stock: 95,
    weight: 4652,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898265",
        rating: 4,
        comment:
          "Supplement Right 1st Toe with Nonautologous Tissue Substitute, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898297",
        rating: 2,
        comment: "Restriction of Right Vertebral Vein, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982d1",
        rating: 4,
        comment:
          "Bypass Coronary Artery, Two Arteries from Left Internal Mammary with Autologous Arterial Tissue, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982dc",
        rating: 4,
        comment:
          "Replacement of Urethra with Synthetic Substitute, External Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c47",
    },
    name: "Zoe Dukelow",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    category: "Beauty",
    price: 6087895,
    capital: 6077895,
    profit: 10000,
    stock: 39,
    weight: 2123,
    rating: 1,
    reviews: [
      {
        user: "64aa82aba176b956ba89822a",
        rating: 4,
        comment: "Repair Brain, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c51",
    },
    name: "Bernadene Doree",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    category: "Beauty",
    price: 8559600,
    capital: 8549600,
    profit: 10000,
    stock: 54,
    weight: 1416,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981cb",
        rating: 5,
        comment:
          "Dilation of Left Anterior Tibial Artery, Bifurcation, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982d0",
        rating: 5,
        comment:
          "Revision of Internal Fixation Device in Cervical Vertebral Joint, Open Approach",
      },
      {
        user: "64aa82aba176b956ba8982f4",
        rating: 1,
        comment: "Destruction of Right Lower Eyelid, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898305",
        rating: 4,
        comment: "Division of Trigeminal Nerve, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c53",
    },
    name: "Reeta Oleszcuk",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    category: "Sports",
    price: 2396135,
    capital: 2386135,
    profit: 10000,
    stock: 37,
    weight: 1435,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba8981ff",
        rating: 5,
        comment:
          "Revision of Nonautologous Tissue Substitute in Kidney, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898308",
        rating: 3,
        comment:
          "Revision of Synthetic Substitute in Left Radius, Percutaneous Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c56",
    },
    name: "Vladamir Judson",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/cc0000/ffffff",
      },
    ],
    desc: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    category: "Kids",
    price: 4467346,
    capital: 4457346,
    profit: 10000,
    stock: 13,
    weight: 2412,
    rating: 2,
    reviews: [
      {
        user: "64aa82aba176b956ba89835f",
        rating: 5,
        comment:
          "Reposition of Cervical Vertebra using Magnetically Controlled Growth Rod(s), Percutaneous Endoscopic Approach, New Technology Group 2",
      },
      {
        user: "64aa82aba176b956ba8982ef",
        rating: 5,
        comment: "Repair Left Anterior Tibial Artery, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898346",
        rating: 4,
        comment:
          "Dilation of Left Popliteal Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba8982fb",
        rating: 5,
        comment: "Bypass Left Vertebral Vein to Upper Vein, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898197",
        rating: 1,
        comment: "Release Right Parotid Duct, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "6566c165801e99be12650c58",
    },
    name: "Eugine Redwall",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
    ],
    desc: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    category: "Outdoors",
    price: 9440997,
    capital: 9430997,
    profit: 10000,
    stock: 28,
    weight: 4846,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba898284",
        rating: 1,
        comment: "Excision of Right Foot, Open Approach",
      },
      {
        user: "64aa82aba176b956ba898312",
        rating: 5,
        comment:
          "Drainage of Bilateral Fallopian Tubes, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba8982da",
        rating: 1,
        comment:
          "Drainage of Left Metatarsal, Percutaneous Approach, Diagnostic",
      },
      {
        user: "64aa82aba176b956ba8981c8",
        rating: 3,
        comment: "Destruction of Prostate, Percutaneous Approach",
      },
      {
        user: "64aa82aba176b956ba898365",
        rating: 5,
        comment:
          "Insertion of Intraluminal Device into Left Common Carotid Artery, Open Approach",
      },
    ],
  },
  {
    _id: {
      $oid: "65818fced6b17ca50baa5809",
    },
    name: "Baju Pria Keren",
    desc: '<p><span style="color: rgb(33, 33, 33);">M = Berat badan 40-50 kg</span></p><p><span style="color: rgb(33, 33, 33);">L = Berat badan 50-60 kg</span></p><p><span style="color: rgb(33, 33, 33);">XL = Berat badan 60-70kg</span></p><p><span style="color: rgb(33, 33, 33);">2XL = Berat Badan 70-80kg</span></p><p><span style="color: rgb(33, 33, 33);">3XL = Berat Badan 80-90kg</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Model Slimfit pas di badan jika takut sempit maka lebihkan ukurannya.</span></p><p><span style="color: rgb(33, 33, 33);">Ready 6 warna pilihan</span></p><p><span style="color: rgb(33, 33, 33);">Kemeja pria lengan panjang Slim Fit Premium</span></p><p><span style="color: rgb(33, 33, 33);">bahan katun streach.</span></p><p><span style="color: rgb(33, 33, 33);">4 ukuran M-L-XL-XXL</span></p><p><span style="color: rgb(33, 33, 33);">M=ld 92cm pjg 68cm</span></p><p><span style="color: rgb(33, 33, 33);">L=ld 94cm pjg 70cm</span></p><p><span style="color: rgb(33, 33, 33);">XL=ld 100cm pjg 73cm..</span></p><p><span style="color: rgb(33, 33, 33);">XXL=ld 110cm pjg 75cm</span></p><p><span style="color: rgb(33, 33, 33);">DEPAN 2 KANTONG NEMPEL</span></p><p><span style="color: rgb(33, 33, 33);">Good Quality</span></p>',
    category: "Fashion",
    image: [
      {
        link: "https://app1.jadidalmagribi.com/images/5c55cba8-a016-43c7-b3ec-f5f75f7c37b0-1701780388411-1703488315388.jpg",
        _id: {
          $oid: "65892b3b994dec19816b7ec5",
        },
      },
      {
        link: "https://app1.jadidalmagribi.com/images/06f419e2-2682-4377-bd84-3a587fe13933-1701780388413-1703488315389.jpg",
        _id: {
          $oid: "65892b3b994dec19816b7ec6",
        },
      },
    ],
    price: 100000,
    capital: 80000,
    profit: 20000,
    stock: 100,
    weight: 400,
    rating: 5,
    reviews: [
      {
        user: {
          $oid: "652ba75b93f29666cf776283",
        },
        rating: 5,
        comment: "Keren banget",
        _id: {
          $oid: "6594f439994dec19816c0833",
        },
        createdAt: {
          $date: "2024-01-03T05:44:25.703Z",
        },
        updatedAt: {
          $date: "2024-01-03T05:44:25.703Z",
        },
      },
    ],
    createdAt: {
      $date: "2023-12-19T12:42:54.817Z",
    },
    updatedAt: {
      $date: "2024-01-03T05:44:25.705Z",
    },
    __v: 1,
  },
];

export default products;
