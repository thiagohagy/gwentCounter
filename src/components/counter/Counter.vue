<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Voltar">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/faction')"/>
    </ActionBar>

    <GridLayout rows="auto,auto,auto,auto,auto" columns="*,*,*,*,*,*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

      <Image row="0" col="0" class="factionImage" colSpan="4" :src="images[playersFactions.player1]" />
      <Image row="0" col="5" class="factionImage" colSpan="4" :src="images[playersFactions.player2]" />

      <ListPicker row="1" col="0" :items="numeros" v-model='player1Points[0]'/>
      <ListPicker row="1" col="1" :items="numeros" v-model='player1Points[1]'/>
      <ListPicker row="1" col="2" :items="numeros" v-model='player1Points[2]'/>
      <ListPicker row="1" col="3" :items="numeros" v-model='player1Points[3]'/>

      <ListPicker row="1" col="5" :items="numeros" v-model='player2Points[0]'/>
      <ListPicker row="1" col="6" :items="numeros" v-model='player2Points[1]'/>
      <ListPicker row="1" col="7" :items="numeros" v-model='player2Points[2]'/>
      <ListPicker row="1" col="8" :items="numeros" v-model='player2Points[3]'/>

      <Button row="2" col="0" @tap="openCalc('0')" colSpan="4" text='calc' class="btn btn-default"/>
      <Button row="2" col="5" @tap="openCalc('1')" colSpan="4" text='calc' class="btn btn-default"/>

      <!-- <Button row="3" col="1" class="btn btn-primary" text='<<' />
      <Button row="3" col="2" class="btn btn-primary" text='||' />
      <Button row="3" col="3" class="btn btn-primary" text='>'  />
      <Button row="3" col="4" class="btn btn-primary" text='>>' /> -->

      <!-- <Button row="3" col="1" @tap="openCalc(0)" colSpan="2" text='<<' class="btn btn-primary"/>
      <Button row="3" col="3" @tap="openCalc(1)" colSpan="3" text='>' class="btn btn-primary"/>
      <Button row="3" col="6" @tap="openCalc(1)" colSpan="2" text='>>' class="btn btn-primary"/> -->

      <Button row="4" col="0" colSpan="9" class="btn btn-danger" text="Reset points" @tap="resetPoints" />

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
        player1Points: ['0','0','0','0'],
        player2Points: ['0','0','0','0'],
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
        this.player1Points = ['0','0','0','0'];
        this.player2Points = ['0','0','0','0'];
      },
      updatePoints(player, points){
        points = points.toString();
        if(points.length < 4)   {
          while (points.length < 4) {
            points = '0' + points;
          }
        }

        points = points.split('');

        this.$nextTick(function () {
          if (player === '0') {
            this.player1Points = points;
          } else {
            this.player2Points = points;
          }
        })
      },
      openCalc(player) {
        let points = player === '0' ? this.player1Points : this.player2Points;
        this.$showModal(Calculator,  { context: { propsData: { total: points , player  }}}).then( data => {
          this.updatePoints(data.player, data.total);
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

