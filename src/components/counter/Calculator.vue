<template>
  <Page class="page">
    <GridLayout rows="auto,auto,auto,auto,auto,auto,auto" columns="*,*,*,*" horizontalAlignment="center" verticalAlignment="center">

      <TextView id='textView' class="form-control" row="0" col="0" ref='result' v-model="result" colSpan="3" editable="false" textWrap="true"></TextView>

      <Button  row="0" col="4" text='<<' @tap="backspace" class="btn btn-default"/>

      <Button  row="1" col="0" text='1' @tap="result += '1'" class="btn btn-default"/>
      <Button  row="1" col="1" text='2' @tap="result += '2'" class="btn btn-default"/>
      <Button  row="1" col="2" text='3' @tap="result += '3'" class="btn btn-default"/>

      <Button  row="2" col="0" text='4' @tap="result += '4'" class="btn btn-default"/>
      <Button  row="2" col="1" text='5' @tap="result += '5'" class="btn btn-default"/>
      <Button  row="2" col="2" text='6' @tap="result += '6'" class="btn btn-default"/>

      <Button  row="3" col="0" text='7' @tap="result += '7'" class="btn btn-default"/>
      <Button  row="3" col="1" text='8' @tap="result += '8'" class="btn btn-default"/>
      <Button  row="3" col="2" text='9' @tap="result += '9'" class="btn btn-default"/>

      <Button  row="4" col="1" text='0' @tap="result += '0'" class="btn btn-default"/>

      <Button  row="1" col="4" text='+' @tap="result += '+'" class="btn btn-default"/>
      <Button  row="2" col="4" text='-' @tap="result += '-'" class="btn btn-default"/>
      <Button  row="3" col="4" text='/' @tap="result += '/'" class="btn btn-default"/>
      <Button  row="4" col="4" text='*' @tap="result += '*'" class="btn btn-default"/>
      <Button  row="5" col="4" text='=' colSpan="2" @tap='calculate' class="btn btn-default"/>

      <Button class="btn btn-danger"  row="7" col="0" colSpan="2" text='Fechar' @tap='dismiss'/>
      <Button class="btn btn-success" row="7" col="2" colSpan="2" text='Aplicar' @tap='apply'/>

    </GridLayout>

  </Page>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import * as Toast from 'nativescript-toast';

  export default {
    props:['total','player'],
    data(){
      return {
        result:'0',
      }
    },
    beforeMount(){
       let dado = this.total.toString();
       dado = dado.replace(/\,/gmi,'');
       this.result = parseInt(dado);
    },
    methods: {
      calculate(){
        let dado = this.result;
        if(dado) {
          dado = dado.replace(/^0/,'');
          let resultado = eval(dado);

          if (resultado) {
            this.result = resultado.toString();
          } else {
            this.result = '0';
            Toast.makeText("Não foi possivel calcular :(").show();
          }
        } else {
            Toast.makeText("Informe uma expressão para ser calculada").show();
        }
      },
      backspace(){
        let dado = this.result;
        if(dado.length > 0) {
          this.result = dado.substring(0, dado.length - 1);
        }
      },
      dismiss(){
        this.$modal.close({});
      },
      apply(){
        this.calculate();
        this.$modal.close({ total: this.result, player: this.player });
      }
    },
  };
</script>

<style scoped>
  #textField{
    font-size: 25px;
    margin:20px;
  }

  #textView {
    background-color: #000;
    color: #fff;
  }

  .page{
    padding: 15px;
    border-radius: 15px
  }
</style>

