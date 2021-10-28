<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Desarrollo de la colección 
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="zoom-in-down")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/ilustraciones/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Abordar los siguientes temas implica extraer del interior saberes que quizá no se creen tener, desde pensar inicialmente, qué, significa desarrollar una colección de moda y cómo es el proceso, desde el inicio hasta la validación y aprobación de la prenda. Lo fundamental es conocer bien la marca y el usuario al que está dirigido todo el esfuerzo. Los elementos que priman en este contexto son: agilidad, armonía, novedad, factor diferenciador en el producto, viabilidad de la propuesta, fácil desarrollo obtenido y el máximo provecho del concepto. Todo lo anterior indica que se ha emprendido un buen camino y conocimiento para el desempeño laboral en el área del desarrollo de colecciones de moda.       

    separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1  Concepto de la colección: interpretación y materialización del concepto 
    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-12.bg-img-1.p-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            p(data-aos="fade-down") Cuando ya se ha desarrollado todo el proceso de investigación del concepto, se debe tener claridad sobre la interpretación de los resultados obtenidos, definiendo las características que tendrá la colección, en cuanto a los elementos tangibles e intangibles, estos se pueden determinar en cuanto a las características de peso, movilidad, recarga o limpieza, estipular la estructura y la forma que sostendrá cada pieza y cuidar que en conjunto se puedan obtener unos resultados positivos en lo referente a la combinación, mezcla y coherencia con los resultados de la investigación. Cada elemento o proceso realizado debe marcar la diferencia con el anterior, pero a su vez el espíritu de la colección siempre estará presente; es importante determinar las palabras claves del concepto ya que ayudan a mantenerlo presente en cualquier decisión que se tome, de alguna forma se llega al punto donde se verifica si se utilizan todas las herramientas definidas en el proceso de investigación para armar la colección. 
          .col-lg-6
            img.img-a.img-t.yoyo.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img4.png', alt='')

    .BorTit.mt-5 #[b Anexo A Video]<br> Concepto de la Colección. Marca “AMARILLA”
    figure.mt-3
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kAhMY79mPio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Nota. Muñoz, L. (2020)  
    
    separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2  Cuaderno de diseño: el concepto en detalle 
    .row.justify-content-start.align-items-cente.row-top-t1
      .col-lg-11.d-none.d-lg-block       
        .row.justify-content-end.align-items-center.row-t1-color-1.p-5
          .col-lg-6.text-sup
            p(data-aos="fade-down").text-white.mb-0 Este nos muestra los resultados definitivos en cuanto a la carta de color y su propuesta para llevarla a las prendas y complementos, teñidos, estampación, bordados y accesorios; las formas determinan las líneas que caracterizarán la colección en sus cortes, silueta y estructura de las piezas. Realizar prototipos permite visualizar resultados previos a la construcción de las prendas, se construyen con todas las ideas innovadoras y creativas que marcarán la diferencia de los nuevos desarrollos, la mezcla de materiales y complementos le deben aportar valor a la colección; no es pertinente utilizar elementos (materiales o complementos) seleccionados a última hora ya que pueden alterar la estética, coherencia y armonía de la colección.  
        .row.justify-content-start.align-items-center.mt-5
          .col-lg-6.p-0.mx-0
            img.img-t.yoyo.img-m-top(data-aos="fade-left")(src='@/assets/ilustraciones/img5.png', alt='')  

    .row.justify-content-start.align-items-center
      .col-lg-11.d-block.d-lg-none.row-t1-color-1-movil.p-5
        p(data-aos="fade-down").text-white.mb-0 Este nos muestra los resultados definitivos en cuanto a la carta de color y su propuesta para llevarla a las prendas y complementos, teñidos, estampación, bordados y accesorios; las formas determinan las líneas que caracterizarán la colección en sus cortes, silueta y estructura de las piezas. Realizar prototipos permite visualizar resultados previos a la construcción de las prendas, se construyen con todas las ideas innovadoras y creativas que marcarán la diferencia de los nuevos desarrollos, la mezcla de materiales y complementos le deben aportar valor a la colección; no es pertinente utilizar elementos (materiales o complementos) seleccionados a última hora ya que pueden alterar la estética, coherencia y armonía de la colección.  

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-left")
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=jcR-M26H0rY" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Anexo B Video]<br> Cuaderno de diseño. Marca “Laicks”
    separador
    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 1.3  Plano de la colección: visión planimétrica 

    img.img-t.img-a(data-aos="fade-down")(src='@/assets/ilustraciones/img6.jpg', alt='') 
    p.mt-5(data-aos="fade-down") Definir el número de piezas que contendrá la colección permite tener claridad de varios aspectos en cuanto a volumen de la colección, tipo de prendas que la componen, armar outfit completos, realizando una trazabilidad cruzada que muestre que tan móvil es cada pieza dentro de la misma colección. Es importante realizar este juego para visualizar la versatilidad de las prendas.

    p(data-aos="fade-down") La colección, se puede armar por grupos, líneas, color, silueta e incluso los mismos complementos necesitan ser planeados dentro del proceso, para no caer en excesos o carencia, un buen complemento bien ubicado puede llegar a salvar una prenda. El control de las variables se refiere a que todo lo que se necesita si sea posible y de fácil consecución. En cuanto al manejo de los proveedores, es muy importante verificar las existencias o tiempos de fabricación antes de utilizarlas en las prendas, el registro de nombres comerciales o referencias es fundamental, los tiempos de entrega y de fabricación tanto de insumos como de textiles, así como, cuando se planean procesos de teñido, lavandería y acabados (bordado, pedrería, herrajes, estampados y manualidades, entre otros) visualizando el proceso previo a su fabricación y contemplando el tiempo que cada uno de los procesos tomará a fin de optimizar la logística de la colección.     

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-left")
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=2tboY-iZsmY" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Video]<br> Fashion Design Tutorial: Developing and Merchandising a Collection.

    separador
    #t_1_4.titulo-segundo(data-aos="fade-right")
      h2 1.4  Sustentación de la colección: selección de productos
    .row.justify-content-center.align-items-center.d-none.d-lg-block
      .col-12        
        .row.justify-content-start.align-items-center.row-t1-color-2.mt-5(data-aos="fade-right")
          .col-lg-8.p-5.text-sup
            p Es el momento crucial en la definición de lo que realmente se va a producir, normalmente intervienen todas las personas que toman las decisiones en la empresa, quienes definen, de todo lo que se realizó qué continúa en proceso, pero también qué se puede transformar, mejorar o definitivamente sale de la propuesta. 

            p.mb-0 Las opiniones al respecto son importantes, pero es relevante que las personas encargadas de los desarrollos argumenten y sustenten desde el concepto, la marca y el usuario todo lo que se está presentando. Es muy común y fácil tumbar una creación teniendo en cuenta que todo lo nuevo genera desconfianza e inseguridad, pero con un buen argumento todo se vale y se puede defender; este proceso es crucial porque es aquí donde se intercambia la información de los diferentes departamentos de la empresa, en especial el área comercial que es la que conoce el destino de los productos y al consumidor, recordemos que este siempre espera algo nuevo que motive o satisfaga sus necesidades emergentes. 
        .row.justify-content-end.align-items-center(data-aos="fade-right")
          .col-lg-4.p-0
            img.img-t.img-m-top-1(data-aos="fade-left")(src='@/assets/ilustraciones/img7.png', alt='')        

    .row.justify-content-center.align-items-center.row-t1-color-2-movil(data-aos="fade-right")
      .col-lg-12.p-5.d-block.d-lg-none
        p Es el momento crucial en la definición de lo que realmente se va a producir, normalmente intervienen todas las personas que toman las decisiones en la empresa, quienes definen, de todo lo que se realizó qué continúa en proceso, pero también qué se puede transformar, mejorar o definitivamente sale de la propuesta. 

        p.mb-0 Las opiniones al respecto son importantes, pero es relevante que las personas encargadas de los desarrollos argumenten y sustenten desde el concepto, la marca y el usuario todo lo que se está presentando. Es muy común y fácil tumbar una creación teniendo en cuenta que todo lo nuevo genera desconfianza e inseguridad, pero con un buen argumento todo se vale y se puede defender; este proceso es crucial porque es aquí donde se intercambia la información de los diferentes departamentos de la empresa, en especial el área comercial que es la que conoce el destino de los productos y al consumidor, recordemos que este siempre espera algo nuevo que motive o satisfaga sus necesidades emergentes. 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5(data-aos="fade-left")
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=367veujwj_Y&t=1s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-youtube.svg")
          .anexo__texto
            p #[b Video]<br> What Does It Take to Be a Fashion Designer?
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
