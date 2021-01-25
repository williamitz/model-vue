<template>
  
  <div class="row">
    <div class="col-12">
      <h1>
        DC Heroes
      </h1>
      <ModalHero typeHero="MARVEL" />
    </div>
  </div>
  <hr>
  <div class="row">

      <div class="col card" style="width: 18rem;" v-for="(item, index) in heroes.marvel" :key="index">
        <img :src="item.urlImg" class="card-img-top" alt="...">
      <div class="card-body">
        {{ item.alias }}
        <h5 class="card-title">
          {{ item.nameHero }}
        </h5>
        <p class="card-text">
          {{ item.power }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>


</template>

<script>
import ModalHero from '../components/ModalHero'
import {mapState} from 'vuex'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    ModalHero
  },
  computed: {
    ...mapState(['heroes'])
  }
}
</script>
