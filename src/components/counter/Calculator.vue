<template>

  <Page id='page'>

    <GridLayout rows="auto,auto,auto, auto" columns="*,*,*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

      <TextField row="0" col="0" ref='result' v-model="result" keyboardType='number' colSpan="6" id='textField'/>

      <Button row="1" col="0" text='+' @tap="result += '+'"/>
      <Button row="1" col="1" text='-' @tap="result += '-'"/>
      <Button row="1" col="2" text='/' @tap="result += '/'"/>
      <Button row="1" col="3" text='*' @tap="result += '*'"/>
      <Button row="1" col="4" text='=' colSpan="2" @tap='calculate'/>

    </GridLayout>

  </Page>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data(){
      return {
        result:0,
      }
    },
    methods: {
      calculate(){
        this.result = eval(this.result).toString();
        // console.log(this.$refs);
        // e.target.setSelectionRange(0, this.text.length);
      }
    },
    mounted() {
      // let page = this.$refs.page.nativeView;
      console.log(this);
    }
  };
</script>

<style scoped>
  #textField{
    font-size: 25px;
    margin:20px;
  }
  
  #page{
    background-image: url('~/images/papperBg.jpg')
  }
</style>

