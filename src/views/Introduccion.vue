<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La creatividad, innovación y conocimiento técnico de un diseñador se evidencia en el desarrollo de su colección de vestuario; la capacidad de inspiración y conceptualización se sustenta en la coherencia entre el concepto de la marca, el segmento de mercado y la creatividad para combinar los materiales con las formas y conceptos que armonizan y conforman las propuestas a desarrollar. <br><br>Para la interpretación del diseño y el desarrollo de la colección además de los elementos conceptuales y creativos, se debe tener claridad de las etapas que se deben desarrollar para lograr los objetivos propuestos por el diseñador, en ese sentido este material le permite descubrir cuales son esos pasos que le permitirán crear la propuesta de diseño con alto valor agregado para la empresa y sus clientes.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
.bloque-texto-g.color-secundario
  background-color: #339CE9 !important
.bloque-texto-g
  justify-content: flex-start !important
.m-left
  left: 50% !important
@media only screen and (max-width: 992px)
  .m-left
    left: 0 !important
</style>
