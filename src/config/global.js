export default {
  global: {
    componenteFormativo:
      'Interpretación del diseño para el desarrollo de la colección',
    descripcionCurso:
      'La colección parte de un concepto que se investiga para obtener las herramientas a utilizar de una manera gradual, efectiva y coherente, desde el color hasta el más mínimo detalle en accesorios y complementos, creando así la arquitectura de la colección, donde todo se une y se refleja en las nuevas propuestas que serán presentadas ante el comité de evaluación, a quienes se les tiene que convencer con argumentos reales proyectados hacia el crecimiento y productividad de la marca, con el convencimiento de que lo se va hacer es realmente lo que espera y desea el usuario, con el precio justo y en el momento oportuno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Desarrollo de la colección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto de la colección: interpretación y materialización del concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cuaderno de diseño: el concepto en detalle',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Plano de la colección: visión planimétrica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sustentación de la colección: selección de productos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Validación de los productos de vestuario para la colección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ficha técnica del proceso de diseño y producción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Desarrollo de patrones de la colección',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elaboración de los prototipos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Costos de los productos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Medición y validación',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Entrega y sustentación de la colección',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AITEX. (s.f.). Análisis y Gestión de Tendencias. Asociación de Investigación de la Industria Textil -  AITEX.',
    },
    {
      referencia:
        'AITEX. (s.f.). Branding 1. Asociación de Investigación de la Industria Textil -  AITEX.',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Bell, A. (s.f.). El Consumidor del Futuro 2022. WGSN BY ASCENTIAL.',
    },
    {
      referencia:
        'Diaz, S. (2014). Comunicación y gestión de marcas de moda. Editorial Gustavo Gili. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45542?page=1',
    },
    {
      referencia:
        'INEXMODA. (s.f.). La Nueva Visión del Consumidor de Moda. (ISCI). Instituto para la Exportación y la Moda - INEXMODA.',
    },
    {
      referencia:
        'Montava, X. (s.f.). El Concept Book. (Master en Moda, Gestión del Diseño y Operaciones). Asociación de Investigación de la Industria Textil -  AITEX.',
    },
    {
      referencia:
        'Montava, X. (s.f.). Marketing 1. (Master en Moda, Gestión del Diseño y Operaciones). Asociación de Investigación de la Industria Textil -  AITEX.',
    },
    {
      referencia:
        'Posner, H. (2015). Marketing de moda (2a. ed.). Editorial Gustavo Gili. ',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
    },
  ],
  glosario: [
    {
      termino: 'Consumo de telas',
      significado:
        'Se entiende el aprovechamiento de tela como la cantidad a utilizar en el proceso de corte, dado que la tela que sobra se desperdicia y eso influye directamente en el costo de la prenda. El consumo, por lo tanto, es la cantidad de tela utilizada para cada prenda y es lo que determinará el costo del producto.',
    },
    {
      termino: 'Estampados',
      significado:
        'Es un proceso que consiste en aplicar color a la tela para obtener un patrón o el diseño deseado. Un buen estampado textil tiene las propiedades de resistir al lavado y a la fricción. Con el estampado, se aplica un diseño, un color o un patrón a una determinada área.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'También llamada hoja técnica u hoja de datos, ficha de características u hoja de características, es un documento que resume el funcionamiento y otras características de un componente o subsistema con el suficiente detalle para ser utilizado por un ingeniero de diseño y diseñar el componente en un sistema.',
    },
    {
      termino: 'Gabarit',
      terminoHtml: '<em>Gabarit</em>',
      significado:
        'Modelo. Estructura hecha con medidas y forma del cuerpo humano que se utiliza para desarrollar o medir prendas de vestir.',
    },
    {
      termino: 'Herrajes',
      significado:
        'Son una línea de insumos para la confección, los cuales se usan principalmente para marroquinería (bolsos) y calzado. Estos se caracterizan por ser en diferentes acabados metálicos (que se denominan acabados galvánicos) los cuales pueden variar según la composición del material, aunque también existen varios que son hechos en plástico.',
    },
    {
      termino: 'Manualidades',
      significado:
        'Trabajo realizado con las manos, en especial el que realizan los escolares como ejercicio de desarrollo creativo.',
    },
    {
      termino: 'Muestra física',
      significado:
        'Es una parte o una porción de un producto que permite conocer la calidad del mismo.',
    },
    {
      termino: 'Pedrería',
      significado:
        'También llamadas piedras con engaste de garra, son piedras con base para coser. La garra en la base sostendrá firmemente la piedra. Hay agujeros en la parte posterior de la base para que pueda coser el <i>strass</i> a las prendas, zapatos, bolsos, accesorios fácilmente.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Primer ejemplar que se fabrica de una figura, un invento u otra cosa, y que sirve de modelo para fabricar otras iguales, o molde original con el que se fabrica.',
    },
    {
      termino: 'Tallaje',
      significado:
        'Conjunto de las tallas utilizadas en la fabricación de prendas de vestir.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas.',
    },
  ],
  complementario: [
    {
      texto:
        'Muñoz, L. (2020). Marca AMARILLA.  [Videoconferencia sesión de clase SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1kTz5_i485CxFsAv5DkpSwCq2hxDVWIsx/view?usp=sharing',
    },
    {
      texto:
        'Ramírez, D. (2020). Marca Laicks.  [Videoconferencia sesión de clase SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1Qaeq9JBldrqv3slDEQLvz7raWWogiOus/view?usp=sharing',
    },
    {
      texto:
        'Zoe Hong. (2018, 25 de noviembre). Fashion Design Tutorial: Developing and Merchandising a Collection. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/2tboY-iZsmY',
    },
    {
      texto:
        'KQED Art School. (2016, 28 de junio). What Does it Take to Be A Fashion Designer?. [video]. ',
      tipo: 'Video',
      link: 'https://youtu.be/367veujwj_Y',
    },
    {
      texto:
        'Pareja, N.; Hincapié, L. y López, I. (2020). Ficha Técnica: Recopilación y ejemplos.  [manuscrito no publicado]. SENA.',
      tipo: 'Página web',
      descarga: '/downloads/Anexo_E_Ficha_tecnica_Recopliacion_ y_ejemplos.pdf',
    },
    {
      texto:
        'SeamPedia. (2018, 1 de febrero). Ficha técnica, un documento imprescindible para la producción de moda. ',
      tipo: 'Página web',
      link:
        'https://www.seampedia.com/ficha-tecnica-documento-inprescindible-produccion-moda/',
    },
    {
      texto:
        'López, I. (2020). Desarrollo de patrones de la colección.  [Videoconferencia sesión experto temático SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1vH_ftUtszWPnda7jid16SIvPdvtOAA_P/view?usp=sharing',
    },
    {
      texto:
        'Eometric. (s.f.). Patronaje: Parte 1 - Transformación Básica. Trucos Maestros .04 by eometric (english subtitles). [video]. ',
      tipo: 'Video',
      link: 'https://youtu.be/w79jGSV357',
    },
    {
      texto:
        'Eometric. (2018, 28 de marzo). Patronaje: Parte 2 - Extracción y Preparación del Patrón. Trucos Maestros .05 by eometric. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RI7NIWHeab4',
    },
    {
      texto:
        'Natalia dedios. (2020, 8 de enero). HOW TO DESIGN A COLLECTION | practical tips and guidelines. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/WaF_6aSoUxg',
    },
    {
      texto:
        'AUDACES. (2017, 7 de julio). Cómo simular los costos de producción desde la etapa de creación. ',
      tipo: 'Página web',
      link:
        'https://www.audaces.com/es/como-simular-los-costos-de-produccion-desde-la-etapa-de-creacion/',
    },
    {
      texto:
        'SENA Antioquia. (2015, 6 de noviembre). Confección lean manufacturing. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/CJdTlzDa2n4',
    },
    {
      texto:
        'Noticias Caracol. (2019, 12 de febrero). Conozca una de las empresas de confección más importantes de Colombia | Noticias Caracol. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/7Bfnic66Rzw?t=22',
    },
    {
      texto:
        'Fabricato S.A. (2020, 3 de junio). Fabricato PROTECTIVE WEAR. [video]. Youtube. ',
      tipo: 'Video',
      link: 'https://youtu.be/7zJ1t5S2CoY',
    },
    {
      texto: 'Pantone Canvas. (2020). FABRICATO /Diseño de Stand. ',
      tipo: 'Página web',
      link:
        'http://canvas.pantone.com/gallery/76156783/FABRICATO-Diseno-de-Stand',
    },
    {
      texto:
        'Rivera, K. (2020) Marca IRREGULAR.  [Videoconferencia sesión de clase SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1yLyscBxN6NReqGe74FZVsRpMZ5Ba8-on/view?usp=sharing',
    },
    {
      texto:
        'Echeverry, D. (2020). Marca DANIEL ECHVRRY. [Videoconferencia sesión de clase SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1gk1pN8-UX8hT2dtRBke-TBsF4mQYAPph/view?usp=sharing',
    },
    {
      texto:
        'Osorio, N. (2020). Marca Mandrágora.  [Videoconferencia sesión de clase SENA]. ',
      tipo: 'Video',
      link:
        'https://drive.google.com/file/d/1xosL-J-gNid6QA0tYmHm1-EVGNbW188f/view?usp=sharing',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Alfonso Hincapié Echeverri',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Idian Fernando López Agudelo',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Ruth Elena Morales Ríos',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Alba Inés Gutiérrez González',
        cargo: 'Correctora de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Edición y corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
