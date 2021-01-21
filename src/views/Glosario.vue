<template>
  <v-container fluid>
    <v-row class="py-12 px-5">
      <v-col
        cols="12"
        class="d-flex align-center px-12"
      >
        <v-row>
          <v-col
            cols="12"
          >
            <h1 class="title-init">
              Glosario de terminos
            </h1>
          </v-col>
          <v-col
            cols="12"
          >
            <span class="headline">
              En esta publicación te compartimos algunos de los terminos que debes conocer sobre el entorno tecnologico.
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pb-12 px-5">
      <v-col
        cols="12"
        class="px-12 pb-6"
        v-for="(termino, i) in terminos"
        :key="i"
      >
        <h3 class="headline font-weight-bold">{{ termino.title }}</h3>
        <span>
          {{ termino.description }}
        </span>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'Glosario',
  components: {Footer},
  data: () => ({
    terminos: [
      {
        title: 'Automatización',
        description: 'Es el uso de sistemas o elementos computarizados, electromecánicos, electroneumáticos y electrohidráulicos a fin de acelerar un proceso.'
      },
      {
        title: 'Buscadores',
        description: 'Sistemas informáticos que buscan archivos almacenados en servidores web gracias a su araña web.'
      },
      {
        title: 'Ciberespacio',
        description: 'Es el ámbito de información que se encuentra implementado dentro de los ordenadores y de las redes digitales de todo el mundo.'
      },
      {
        title: 'Comunicación',
        description: 'Es la acción consciente de intercambiar información entre dos o más participantes con el fin de transmitir o recibir información u opiniones distintas.'
      },
      {
        title: 'Comunicación Virtual',
        description: 'Es la acción de comunicarse a través de dispositivos y equipos informáticos, a través de la red u otro medio digital, por ejemplo; una vídeo llamada por computadora o tlf.'
      },
      {
        title: 'Control',
        description: 'Es una de las etapas que forman el proceso administrativo, en la cual se puede tener una información más precisa de lo que sucede.'
      },
      {
        title: 'Correo Electrónico',
        description: 'Es un servicio de red que permite a los usuarios enviar y recibir mensajes mediante redes de comunicación electrónica.'
      },
      {
        title: 'Emprendedor',
        description: 'Es una persona que diseña, lanza y pone en funcionamiento un negocio, partiendo de una innovación. El emprendedor es un empresario de la innovación; además de lanzar la empresa, abre una nueva línea empresarial, su creatividad abre las puertas a otros empresarios y a otros nuevos productos.'
      },
      {
        title: 'Emprendimiento',
        description: 'Es el proceso de diseñar, lanzar y administrar un nuevo negocio, que generalmente comienza como una pequeña empresa o una emergente, ofreciendo a la venta un producto, servicio o proceso.'
      },
      {
        title: 'Everything',
        description: 'Es una utilidad de búsqueda de escritorio para Windows que puede encontrar rápidamente archivos y carpetas por nombre.'
      },
      {
        title: 'Exelearning',
        description: 'Es un programa de código abierto bajo licencia GPL-2 para crear contenidos educativos en soportes informáticos sin necesidad de ser ni convertirse en expertos en HTML, XML o HTML5.'
      },
      {
        title: 'Gerencia',
        description: 'La palabra gerencia se utiliza para denominar al conjunto de empleados de alta calificación que se encarga de dirigir y gestionar los asuntos de una empresa.'
      },
      {
        title: 'Gestión de la Información',
        description: 'Se refiere a un ciclo de actividad organizacional y al desarrollo, simulación o modelado de sistemas de información, aplicables a áreas de gestión en organizaciones para la adquisición de información de una o más fuentes, la custodia y la distribución de esa información a aquellos que la necesitan, y su disposición final a través del archivado o borrado.'
      },
      {
        title: 'Gobierno Electrónico',
        description: 'El gobierno electrónico o e-gobierno, es el uso de dispositivos tecnológicos de comunicación, como computadoras e Internet para proporcionar servicios públicos a ciudadanos y otras personas en un país o región.'
      },
      {
        title: 'Herramientas Gerencia',
        description: 'Las herramientas gerenciales son todas aquellos métodos empleados para hacer más eficaz la labor de dirección de una organización. Apoyan a los tomadores de decisiones a determinar un modelo directivo y acoplarlo a su estructura, su función es dirigir de la mejor manera a los procesos que se llevan a cabo al interior de una entidad y van enfocados a los directivos y mandos medios.'
      },
      {
        title: 'Internet',
        description: 'Es un conjunto descentralizado de redes de comunicación interconectadas que utilizan la familia de protocolos TCP/IP, lo cual garantiza que las redes físicas heterogéneas que la componen constituyan una red lógica única de alcance mundia.'
      },
      {
        title: 'Intranet',
        description: 'Es una red informática que utiliza la tecnología del protocolo de Internet para compartir información, sistemas operativos o servicios de computación dentro de una organización. Suele ser interna, en vez de pública como internet, por lo que solo los miembros de esa organización tienen acceso a ella.'
      },
      {
        title: 'Libro Electrónico',
        description: 'Un libro electrónico, libro digital o ciberlibro, conocido en inglés como e-book o eBook, es la publicación electrónica o digital de un libro.'
      },
      {
        title: 'Líder',
        description: 'Es una persona que actúa como guía o jefe de un grupo. Para que su liderazgo sea efectivo, el resto de los integrantes debe reconocer sus capacidades.'
      },
      {
        title: 'Liderazgo',
        description: 'Es el conjunto de habilidades gerenciales o directivas que un individuo tiene para influir en la forma de ser o actuar de las personas o en un grupo de trabajo determinado, haciendo que este equipo trabaje con entusiasmo hacia el logro de sus metas y objetivos.'
      },
      {
        title: 'Módem',
        description: 'Es un dispositivo que convierte las señales digitales en analógicas y viceversa, y permite así la comunicación entre computadoras a través de la línea telefónica o del cable-módem. Sirve para enviar la señal moduladora mediante otra señal llamada portadora.'
      },
      {
        title: 'Multimedia',
        description: 'El término multimedia hace referencia a cualquier objeto o sistema que utiliza múltiples medios de expresión físicos o digitales electrónicos para presentar o comunicar información. De allí la expresión multimedios.'
      },
      {
        title: 'Niveles de Responsabilidad',
        description: 'nivel 0; Irresponsabilidad, nivel 1; Respeto, nivel 2; Participación y esfuerzo, nivel 3; Autonomía, nivel 4; Ayuda a los demás, nivel 5; Transferencia.'
      },
      {
        title: 'Objetividad',
        description: 'Objetividad se refiere a expresar la realidad tal cual es. También indica cualidad de objetivo. La objetividad está desligada de los sentimientos y de la afinidad que una persona pueda tener con respecto a otro individuo, objeto o situación.'
      },
      {
        title: 'Ocr',
        description: 'generalmente conocido como reconocimiento de caracteres y expresado con frecuencia con la sigla OCR (del inglés Optical Character Recognition), es un proceso dirigido a la digitalización de textos, los cuales identifican automáticamente a partir de una imagen símbolos o caracteres que pertenecen a un determinado alfabeto, para luego almacenarlos en forma de datos. Así podremos interactuar con estos mediante un programa de edición de texto o similar.'
      },
      {
        title: 'Oferta y Demanda',
        description: 'La ley de la oferta y demanda es un modelo económico básico postulado para la formación de precios de mercado de los bienes dentro de la escuela neoclásica y otras afines, usándose para explicar una gran variedad de fenómenos y procesos tanto macro como microeconómicos.'
      },
      {
        title: 'Organización',
        description: 'Las organizaciones son estructuras administrativas y sistemas administrativos creadas para lograr metas u objetivos con el apoyo de las propias personas, o con apoyo del talento humano o de otras características similares.'
      },
      {
        title: 'Pequeño y Mediano Emprendedor',
        description: 'Un pequeño y mediano empresario es la persona que establece los objetivos y toma las decisiones estratégicas sobre los medios, la administración y el control de una PYME(Pequeña Y Mediana Empresa). Asimismo, asume la responsabilidad tanto comercial como legal frente a terceros.'
      },
      {
        title: 'Piratería Electrónica',
        description: 'Es realizada por piratas informáticos donde son aquellos que tienen como práctica regular la reproducción, apropiación y distribución con fines lucrativos y a gran escala de contenidos (soporte lógico, vídeos, música, etc.) de los que no posee licencia o permiso de su autor. Suele generalmente apoyarse de una computadora o un soporte tecnológico para estas acciones. Una de las prácticas de piratería de contenidos más conocida es la del software.'
      },
      {
        title: 'Plan',
        description: 'Es típicamente cualquier diagrama o lista de pasos con detalles de tiempo y recursos, utilizados para lograr un objetivo de hacer algo. Comúnmente se entiende como un conjunto temporal de acciones previstas a través de las cuales se espera lograr un objetivo.'
      },
      {
        title: 'Planificación',
        description: 'Se conoce como planificación, planeación o planteamiento, generalmente en países de habla hispana, pero en el sentido más universal, implica tener uno o varios objetivos en común, junto con acciones requeridas para concluirse exitosamente.'
      },
      {
        title: 'Problema',
        description: 'Es un asunto o cuestión que se debe solucionar o aclarar, una contradicción o un conflicto entre lo que es y lo que debe ser, una dificultad o un inconveniente para la consecución de un fin o un disgusto, una molestia o una preocupación'
      },
      {
        title: 'Proceso',
        description: 'Es una secuencia de pasos dispuesta con algún tipo de lógica que se enfoca en lograr algún resultado específico.'
      },
      {
        title: 'Proceso Administrativo',
        description: 'Es una causa formal de la serie de actos en que se concreta la actuación administrativa para la realización de un fin determinado; en el cual se fijan los objetivos y metas a lograr.'
      },
      {
        title: 'Producto',
        description: 'Un producto es una opción elegible, viable y repetible que la oferta pone a disposición de la demanda, para satisfacer una necesidad o atender un deseo a través de su uso o consumo.'
      },
      {
        title: 'Proyecto',
        description: 'Es una planificación que consiste en un conjunto de objetivos que se encuentran interrelacionados y coordinados. De conformidad con el Project Management Institute, "un proyecto es un esfuerzo temporal que se lleva a cabo para crear un producto, servicio o resultado único".'
      },
      {
        title: 'Proyecto Económico, Social Productivo',
        description: 'Son aquellos que impulsan el desarrollo de actividades generadoras de bienes y servicios útiles para nuestra comunidad, enmarcándose dentro del concepto de desarrollo endógeno, generando redes productivas para el desarrollo de la economía solidaria.'
      },
      {
        title: 'Redes Sociales',
        description: 'Son estructuras formadas en Internet por personas u organizaciones que se conectan a partir de intereses o valores comunes. A través de ellas, se crean relaciones entre individuos o empresas de forma rápida, sin jerarquía o límites físicos.'
      },
      {
        title: 'Rol de Gerente',
        description: 'El rol del gerente de una empresa consiste en la utilización eficiente de diversos recursos para obtener beneficios en una organización determinada. El gerente también controlará, planificará y organizará la empresa. Coordinara a las personas para poder lograr el cumplimento de cada uno de sus objetivos.'
      },
      {
        title: 'Sistema de Almacenamiento en la Nube',
        description: 'es un modelo de almacenamiento de datos basado en redes de computadoras, ideado en los años 1960, donde los datos están alojados en espacios de almacenamiento virtualizados, por lo general aportados por terceros.'
      },
      {
        title: 'Sistema Operativo',
        description: 'Es el software principal o conjunto de programas de un sistema informático que gestiona los recursos de hardware y provee servicios a los programas de aplicación de software, ejecutándose en modo privilegiado respecto de los restantes.'
      },
      {
        title: 'Sociedad de Garantía Reciproca',
        description: ' de Garantía Reciproca: son entidades financieras cuyo objeto principal consiste en facilitar el acceso al crédito de las pequeñas y medianas empresas (pymes) y mejorar, en términos generales, sus condiciones de financiación, a través de la prestación de avales ante bancos, cajas de ahorros y cooperativas de crédito, Administraciones Públicas y clientes y proveedores.'
      },
      {
        title: 'Software de Gestión',
        description: 'Es un sistema informático integrado por múltiples herramientas que individualmente se utilizan para ejecutar tareas administrativas, y que en conjunto, simplifica los procesos operativos, productivos y burocráticos de una organización.'
      },
      {
        title: 'Software Educativo',
        description: 'Es una herramienta o programa informático que ayuda a integrar las diferentes áreas de gestión dentro de un centro educativo: el área de facturación, financiera, contable y administrativa, el área de comunicación y atención al cliente, la organización escolar del centro, los sistemas de calificación, etc. Es decir, se trata de un software ideado para unificar las diferentes áreas de gestión del centro para, de esta forma, poder hacer una gestión más eficaz y coordinada de todos los departamentos necesarios para el buen funcionamiento del centro escolar al igual se utilizará para la computadora.'
      },
      {
        title: 'Software Libre',
        description: 'Es todo software cuyo código fuente puede ser estudiado, modificado, y utilizado libremente con cualquier fin y redistribuido con cambios o mejoras o sin ellas.'
      },
      {
        title: 'Software Propietario',
        description: 'Se denomina con software propietario o privativo al software del cual no existe una forma libre de acceso a su código fuente, el cual solo se encuentra a disposición de su desarrollador y no se permite su libre modificación, adaptación o incluso lectura por parte de terceros.'
      },
      {
        title: 'Telematica',
        description: 'Es un campo de la ciencia que engloba los conocimientos de la informática y de la tecnología de la comunicación para el desarrollo de diseños, procesos y técnicas de servicios o aplicaciones que permiten transmitir datos.'
      },
      {
        title: 'TICS',
        description: 'Tecnologías de la Información y Comunicaciones (TICS) es un término extensivo para la tecnología de la información (TI) que enfatiza el papel de las comunicaciones unificadas y la integración de las telecomunicaciones (líneas telefónicas y señales inalámbricas) y las computadoras, así como el software necesario, el middleware, almacenamiento y sistemas audiovisuales, que permiten a los usuarios acceder, almacenar, transmitir y manipular información.'
      },
      {
        title: 'Tipos de Empresas',
        description: 'Según el tamaño; numero de empleados, cantidad de activos, facturación. Según la actividad que realiza; produce bienes, ofrece servicios. Distinguiendo el área geográfica; local, regional, nacional, multinacional. Según el sector Económico al que pertenecen; sector primario, secundario, terciario, cuaternario, quinario. Según la titularidad de la empresa; publica, privada y mixta. Según la forma jurídica; empresario individual o autónomo, sociedad limitada, sociedad anónima, comunidad de bienes.'
      },
      {
        title: 'Tipos de Proyectos',
        description: 'Proyectos productivos o privados, proyectos públicos o sociales, proyectos comunitarios, proyectos de vida y proyectos de investigación.'
      },
      {
        title: 'Vanguardia',
        description: 'La tecnología vanguardista hace referencia a toda la tecnología que fue desarrollada muy recientemente y que es de avanzada(es decir, que supone un adelanto o algo innovador respecto a los productos ya existentes).'
      },
      {
        title: 'Virus',
        description: 'Un virus o virus informático es un software que tiene por objetivo alterar el funcionamiento normal de cualquier tipo de dispositivo informático, sin el permiso o el conocimiento del usuario principalmente para lograr fines maliciosos sobre el dispositivo.'
      },
      {
        title: 'Virus Troyano',
        description: 'En informática, se denomina caballo de Troya, o troyano, a un malware que se presenta al usuario como un programa aparentemente legítimo e inofensivo, pero que, al ejecutarlo, le brinda a un atacante acceso remoto al equipo infectado.'
      },
      {
        title: 'Web 2.0',
        description: 'El término "Web 2.0" o "Web social" comprende aquellos sitios web que facilitan compartir información, la interoperabilidad, el diseño centrado en el usuario y la colaboración en la World Wide Web. Web 2.0 permite a los usuarios interactuar y colaborar entre sí, como creadores de contenido.'
      },
      {
        title: 'WI-FI:',
        description: 'Es una tecnología que permite la interconexión inalámbrica de dispositivos electrónicos.'
      }
    ]
  })

}
</script>

<style>

</style>