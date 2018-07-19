<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Voltar">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/faction')"/>
    </ActionBar>

    <GridLayout rows="auto,auto,auto, auto" columns="*,*,*,*,*,*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

      <Image row="0" col="0" class="factionImage" colSpan="4" :src="images[playersFactions.player1]" />
      <Image row="0" col="5" class="factionImage" colSpan="4" :src="images[playersFactions.player2]" />

      <ListPicker row="1" col="0" :items="numeros" v-model='playersPoints[0][0]'/>
      <ListPicker row="1" col="1" :items="numeros" v-model='playersPoints[0][1]'/>
      <ListPicker row="1" col="2" :items="numeros" v-model='playersPoints[0][2]'/>
      <ListPicker row="1" col="3" :items="numeros" v-model='playersPoints[0][3]'/>

      <ListPicker row="1" col="5" :items="numeros" v-model='playersPoints[1][0]'/>
      <ListPicker row="1" col="6" :items="numeros" v-model='playersPoints[1][1]'/>
      <ListPicker row="1" col="7" :items="numeros" v-model='playersPoints[1][2]'/>
      <ListPicker row="1" col="8" :items="numeros" v-model='playersPoints[1][3]'/>

      <Button row="2" col="0" @tap="openCalc(0)" colSpan="4" text='calc' class="btn btn-default"/>
      <Button row="2" col="5" @tap="openCalc(1)" colSpan="4" text='calc' class="btn btn-default"/>

      <Button row="3" col="0" colSpan="9" class="btn btn-danger" text="Reset points" @tap="resetPoints" />

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
        playersPoints: [
          ['0','0','0','0'],
          ['0','0','0','0'],
        ],
        images: [],
        numeros: ['0','1','2','3','4','5','6','7','8','9'],
      }
    },
    methods:{
      ...mapActions([
      ]),
      ...mapGetters([
        'getImages',
        'getFactions'
      ]),
      resetPoints(){
        this.playersPoints = [
          ['0','0','0','0'],
          ['0','0','0','0'],
        ];
      },
      updatePoints(player, points){
        this.playersPoints[player] = poits;
      },
      openCalc(player) {
        this.$showModal(Calculator,  { context: { propsData: { total: this.playersPoints[player], player  }}}).then( data => {
          let dado = data.total.toString()
          if(dado.length < 4)   {
            while (dado.length < 4) {
              dado = '0' + dado;
            }
          }
          dado = dado.split('');
          this.updatePoints(data.player, dado)

        });
      }
    } ,
    beforeMount(){
      this.images = this.getImages();
      this.playersFactions = this.getFactions()
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
    margin: 10px;
    height: 200px;
  }
</style>

