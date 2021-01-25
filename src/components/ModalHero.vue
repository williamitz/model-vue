<template>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Nuevo
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{titleModal}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form  >

                <div class="modal-body">

                    <div class="mb-3">
                        <label class="col-form-label" for="">Nombre</label>
                        <input class="form-control" type="text" name="nameHero" placeholder="Nombre real" v-model="bodyHero.nameHero" required>
                    </div>

                    <div class="mb-3">
                        <label class="col-form-label" for="">Alias</label>
                        <input class="form-control" type="text" name="alias" placeholder="Super nombre" v-model="bodyHero.alias" required>
                    </div>

                    <div class="mb-3">
                        <label class="col-form-label" for="txtPower">Poder</label>
                        <textarea class="form-control" name="power" id="txtPower" rows="3" placeholder="Describa poder y habilidades" v-model="bodyHero.power" required></textarea>
                    </div>

                    <div class="mb-3">
                        <label class="col-form-label" for="">URL Img</label>
                        <input class="form-control" type="text" name="urlImg" placeholder="https://" v-model="bodyHero.urlImg">
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="btnCloseModal" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" :disabled="frmValid" @click="submitHero">
                        Guardar
                    </button>
                </div>

            </form>

        </div>
    </div>
    </div>
  
</template>

<script>
import shortid from 'shortid';
import { mapActions } from 'vuex';
import * as $ from 'jquery'
const shortId = require('shortid')

export default {
    props: {
        typeHero: {
            type: String,
            default: 'MARVEL',
            enum: ['MARVEL', 'DC']
        }
    },
    data() {
        return {
            bodyHero: {
                id: '',
                nameHero: '',
                alias: '',
                power: '',
                urlImg: ''
            }
        }
    },

    methods: {
        ...mapActions(['addHeroMarvel','addHeroDC']),

        submitHero() {
            this.bodyHero.id = shortid.generate();
            this.typeHero === 'MARVEL' ? this.addHeroMarvel( {data: this.bodyHero} ) : this.addHeroDC( {data: this.bodyHero} ) ;
            this.bodyHero =  {
                id: '',
                nameHero: '',
                alias: '',
                power: '',
                urlImg: ''
            };

            $('#btnCloseModal').trigger('click');
        }

    },

    computed: {
        titleModal() {
            if (this.typeHero === 'MARVEL') {
                return 'Nuevo Héroe MARVEL';
            }

            return 'Nuevo Héroe DC';
        },

        frmValid() {

            if (this.bodyHero.nameHero === '' || this.bodyHero.alias === '' || this.bodyHero.power === '' ) {
                return true;
            }

            return false;

        }
    }
}
</script>

<style scoped>

</style>