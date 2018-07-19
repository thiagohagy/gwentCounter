<template>

  <Page id='page'>
    <ActionBar class="action-bar" title="Voltar">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/faction')"/>
    </ActionBar>

    <GridLayout rows="auto,auto,auto, auto" columns="*,*,*,*,*,*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

      <Image row="0" col="0" class="factionImage" colSpan="4" :src="images[playersFactions.player1]" />
      <Image row="0" col="5" class="factionImage" colSpan="4" :src="images[playersFactions.player2]" />

      <ListPicker row="1" col="0"  class="p-15 text-center font-weight-bold" id="langPickerP1m" :items="numeros"/>
      <ListPicker row="1" col="1"  class="p-15 text-center font-weight-bold" id="langPickerP1c" :items="numeros"/>
      <ListPicker row="1" col="2"  class="p-15 text-center font-weight-bold" id="langPickerP1d" :items="numeros"/>
      <ListPicker row="1" col="3"  class="p-15 text-center font-weight-bold" id="langPickerP1u" :items="numeros"/>

      <ListPicker row="1" col="5"  class="p-15 text-center font-weight-bold" id="langPickerP1m" :items="numeros"/>
      <ListPicker row="1" col="6"  class="p-15 text-center font-weight-bold" id="langPickerP1c" :items="numeros"/>
      <ListPicker row="1" col="7"  class="p-15 text-center font-weight-bold" id="langPickerP1d" :items="numeros"/>
      <ListPicker row="1" col="8"  class="p-15 text-center font-weight-bold" id="langPickerP1u" :items="numeros"/>
      
      <Button row="2" col="0" @tap="openCalc" colSpan="4" text='calc' :tap="resetPoints" />
      <Button row="2" col="5" @tap="openCalc" colSpan="4" text='calc' :tap="resetPoints" />
      <!-- <Button row="3" col="0" colSpan="9" text="Reset points" :tap="resetPoints" /> -->

    </GridLayout>

  </Page>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Calculator from './Calculator.vue';

  export default {
    data(){
      return {
        playersFactions: {},
        images: [],
        numeros: [0,1,2,3,4,5,6,7,8,9],
      }
    },
    methods:{
      ...mapActions([
      ]),
      ...mapGetters([
        'getImages',
        'getFactions'
      ]),
      openCalc() {
        this.$showModal(Calculator);
      }
    } ,
    beforeMount(){
      this.images = this.getImages();
      this.playersFactions = this.getFactions()

      console.log(this.playersFactions.player1);
      console.log(this.playersFactions.player2);
      console.log(this.images[this.playersFactions.player1]);
      console.log(this.images[this.playersFactions.player2]);
    }
  };
</script>

<style scoped>
  .gridLayout{
      padding: 10px;
      text-align:center;
  }

  .label{
      padding-top:150px;
  }

  .factionImage{
    margin: 10px
  }

  #page{
    background-image: url('~/images/papperBg.jpg')
  }
</style>

