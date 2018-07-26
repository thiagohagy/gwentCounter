<template>
  <Page class="page">
     <ActionBar class="action-bar" title="Esolha a facção"/>

    <FlexboxLayout  flexWrap="wrap" justifyContent="center">

			<Label width='50%' class='label' text="Jogador 1" />
			<Label width='50%' class='label' text="Jogador 2" />

      <Image width='50%' class="img" :src="this.images[this.imgPlayer1Counter]" @tap='setImagePlayer(1)' @swipe='setImagePlayer(1)' />
      <Image width='50%' class="img" :src="this.images[this.imgPlayer2Counter]" @tap='setImagePlayer(2)' @swipe='setImagePlayer(2)' />

	    <!-- <Button :text="'fa-youtube-square' | fonticon"  width="50%" @tap="playGame" /> -->
	    <Button text="Lets play gwent"  class="btn btn-danger" width="50%" @tap="playGame" />

  	</FlexboxLayout>

  </Page>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex';

  export default {
    data(){
      return {
        imgPlayer1Counter:0,
        imgPlayer2Counter:0,
        images: [],
      }
    },
    methods:{
      ...mapGetters([
        'getImages'
      ]),
      ...mapMutations([
        'setPlayersFactions'
      ]),
      setImagePlayer(player){
        if(player == 1) {
          this.imgPlayer1Counter++;
          if (this.imgPlayer1Counter > 4) this.imgPlayer1Counter = 0;
        } else {
          this.imgPlayer2Counter++;
          if (this.imgPlayer2Counter > 4) this.imgPlayer2Counter = 0;
        }
      },
      playGame(){
        this.setPlayersFactions({ player1faction: this.imgPlayer1Counter, player2faction: this.imgPlayer2Counter });
        this.$router.push({ path: 'counter' })
      }
    } ,
    beforeMount(){
      this.images = this.getImages();
    }
  };
</script>

<style scoped>
  .img{
      padding: 10px;
      text-align:center;
  }

  .label{
      padding-top: 100px;
      text-align: center;
      font-size: 25px;
      color: #000
  }
</style>

