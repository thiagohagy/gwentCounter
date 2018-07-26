<template>

  <Page class="page">
    <ActionBar class="action-bar" title="Voltar">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/faction')"/>
    </ActionBar>

    <GridLayout rows="auto,auto,auto,auto,auto,auto" columns="*,*,*,*,*,*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

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

      <Button row="3" col="0" @tap="resetPoints" colSpan="9" text='Resetar pontos' class="btn btn-danger"/>

      <Button row="4" col="1" @tap="changeSong(false)" colSpan="2" text='<<' class="btn btn-primary"/>
      <Button row="4" col="3" @tap="playStop()" colSpan="3" text='>||' class="btn btn-primary"/>
      <Button row="4" col="6" @tap="changeSong(true)" colSpan="2" text='>>' class="btn btn-primary"/>

    </GridLayout>

  </Page>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Calculator from './Calculator.vue';
  import * as audio from "nativescript-audio";

  export default {
    data(){
      return {
        playersFactions: {},
        player1Points: ['0','0','0','0'],
        player2Points: ['0','0','0','0'],
        numeros: ['0','1','2','3','4','5','6','7','8','9'],
        images: [],
        audioOpts:{
          songs: [],
          currentSong: 0,
        },
        audioPlayerStatus: false,
        audioPlayer: null,
      }
    },
    methods:{
      ...mapActions([
      ]),
      ...mapGetters([
        'getImages',
        'getFactions',
        'getSongs',
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
      },
      playStop(){
        if(this.audioPlayer.isAudioPlaying()) {
          this.audioPlayerStatus = false;
          this.audioPlayer.pause();
        } else {
          this.audioPlayerStatus = true;
          this.audioPlayer.play();
        }
      },
      playSong(){
        let song = this.audioOpts.songs[this.audioOpts.currentSong];
        this.audioPlayer.initFromFile({
          audioFile: song,
          loop: false,
          completeCallback: this.changeSong,
        }).then(() => {
          this.audioPlayer.play();
          this.audioPlayerStatus = true;
        })
      },
      changeSong(op) {
        if(!op) op = true;

        if(op) {
          this.audioOpts.currentSong += 1;
        } else {
          this.audioOpts.currentSong -= 1;
        }

        if (this.audioOpts.currentSong < 0 ) {
          this.audioOpts.currentSong = this.audioOpts.songs.length;
        } else if( this.audioOpts.currentSong > this.audioOpts.songs.length) {
          this.audioOpts.currentSong = 0;
        }
        this.playSong();
      }
    },
    beforeMount(){
      this.images = this.getImages();
      this.playersFactions = this.getFactions();
      this.audioOpts.songs = this.getSongs();
      this.audioPlayer = new audio.TNSPlayer();
      this.audioPlayer.debug = true;
      this.audioPlayer.volume = 0.5;
      this.playSong();
    },
    beforeDestroy(){
      this.audioPlayer.pause();
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

