<template>
    <section>
        <b-field horizontal label="Decimal">
            <b-input name="decimal" expanded v-model="Decimal"></b-input>
        </b-field>

        <b-field grouped class="recadredclass">
        <b-field label="Exposant">
            <b-input name="Exposant" expanded v-model="Exposant" readonly></b-input>
        </b-field>
        <b-field label="Exposant Norme" expanded>
           <b-input name="ExposantNorme" expanded v-model="ExposantNorme" readonly></b-input>
        </b-field>
        <b-field label="Exposant Binary" expanded>
            <b-input name="ExposantBinary" expanded v-model="ExposantBinary" readonly></b-input>
        </b-field>
    </b-field>


    <b-field grouped class="recadredclass">
        <b-field label="Mantisse">
            <b-input name="Mantisse" expanded v-model="Mantisse" readonly></b-input>
        </b-field>
        <b-field label="Mantisse Norme" expanded>
           <b-input name="MantisseNorme" expanded v-model="MantisseNorme" readonly></b-input>
        </b-field>
        <b-field label="Mantisse Binary" expanded>
            <b-input name="MantisseBinary" expanded v-model="MantisseBinary" readonly></b-input>
        </b-field>
    </b-field>
        <b-field horizontal label="IEEE745 Binaire">
            <b-input name="ieee745bin" expanded v-model="IeeeBin"></b-input>
        </b-field>

        <b-field horizontal label="IEEE745 Hexa">
            <b-input name="ieee745hexa" expanded v-model="IeeeHexa"></b-input>
        </b-field>
        <b-field horizontal class="buttonslist"><!-- Label left empty for spacing -->
            <p class="control">
                <b-button label="Convert Decimal To IEEE" type="is-primary" class="buttoner" v-on:click="ConvertDecimalToIeee()"/>
                <b-button label="Convert IEEE To Decimal" type="is-primary" class="buttoner" v-on:click="ConvertIeeeToDecimal()"/>
                <b-button label="Convert Hex To Decimal" type="is-primary" class="buttoner" v-on:click="ConvertHexToDecimal()"/>
            </p>
        </b-field>
       
       

    </section>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  name: 'BinToIeee',
  props: {
    msg: String
  },
  methods:  {
    dec2bin(dec){
      return (dec >>> 0).toString(2);
    },
    DecimalApresVirgule2bin(d) {
      let dec = parseFloat(d);
      console.log(dec);
      let Binary = "";
        while (dec != 0){
          dec = dec * 2;
          if (dec >=1){
            Binary = Binary+"1";
            dec = dec -1;
          }
          else {
            Binary = Binary+"0";
          }
          console.log("newValue ==> " +dec);
        }
        
        return Binary;
        
    },

    getNewExposant(bin){
      let newVirg = "";
      if (bin[0] == "1"){
        newVirg = bin.indexOf(",")-1;
      }
      else if (bin[bin.indexOf(",")+1] == "1") {
        newVirg = -1;
      }
      return newVirg;
    },
    getExposantFullBinary(bin){
      let newbin = bin;

      if (bin.length < 8){
        for(let i=0;i<8 - bin.length;i++){
          newbin = "0"+newbin;
        }
      }

      return newbin;
    },
    getMantisseFullBinary(bin){
      let newbin = bin;
      let composedBin ="";
      let reste = 0;
      if (newbin.length <23){
        reste = 23 - newbin.length;
        for(let j=0;j< reste;j++){
          composedBin = composedBin+"0";
        }
        newbin = newbin+composedBin;
      }
      return newbin;
    },
    calculHexaDecimalFormBinary(bin){
      let tab = ["A","B","C","D","E","F"];
      let hexa = "";
      let temp = "";
      let tempdec = "";
      for(let z=0;z<8;z++){
        tempdec = (bin[z*4] * Math.pow(2,3)) + (bin[z*4 +1] * Math.pow(2,2)) + (bin[z*4 +2] * Math.pow(2,1))+(bin[z*4 +3] * Math.pow(2,0));
        if (tempdec <10){
          temp = tempdec;
        } else {
          temp = tab[tempdec - 10];
        }
        hexa = hexa+temp;
      }
      return hexa;
    },
    BinaryToDec(bin){
      let dec =0;
      let temp =0;
      for(let i=0;i<bin.length;i++){
        temp = bin[i] * Math.pow(2,bin.length - i- 1);
        dec = temp +dec;
      }
      return dec;
    },
    BinaryFragmanttedToDec(bin){
      let dec =0;
      let temp =0;
      let tempo = 0;
      for(let i=0;i<bin.length;i++){
        tempo = -i -1;
        temp = bin[i] * Math.pow(2, tempo);
        dec = temp +dec;
      }
      return dec;
    },
    ConvertBinaryToDec(bin){
      let Binary = bin;
      let Decimal = "";
      if (Binary[0] == "1"){
        Decimal = "-";
      }
      Binary = Binary.substring(1);
      let Exposant = Binary.substring(0,8);
      this.ExposantBinary = Exposant;
      let Mantisse = Binary.substring(8);
      this.MantisseBinary = Mantisse;
      this.ExposantNorme = this.BinaryToDec(Exposant);
      Exposant = this.BinaryToDec(Exposant) -127;
      console.log(Exposant);
      this.Exposant = Exposant;
      this.MantisseNorme = "1,"+Mantisse;
      let newMantisse;

      newMantisse = "1";
      for(let i=0;i<Mantisse.length;i++){
        if (i == Exposant){
          newMantisse = newMantisse+","+Mantisse[i];
        }
        else{
          newMantisse = newMantisse+Mantisse[i];
        }
        
      }
      this.Mantisse = newMantisse;
      let Mantisses = newMantisse.split(",");
      let AvantVir = Mantisses[0];
      AvantVir = this.BinaryToDec(AvantVir);
      let ApresVir = Mantisses[1];
      ApresVir = this.BinaryFragmanttedToDec(ApresVir);
      let Virred = ApresVir + AvantVir;
      Decimal = Decimal+""+Virred;
      return Decimal;
    },
    formattedfor4bits(bin){
      let newbin = "";
      let reste = 4-bin.length;
      for (let i=0;i<reste;i++){
        newbin = newbin + "0";
      }
      newbin=newbin+""+bin;
      return newbin;
    },
    calculBinFromHex(hex){
      let newbin = "";
      let temp = "";
      let car = "";
      
      for(let i=0;i<hex.length;i++){
        car = hex[i];
        if (car == "A") {temp = 10;}
        else if (car == "B") {temp = 11;}
        else if (car == "C") {temp = 12;}
        else if (car == "D") {temp = 13;}
        else if (car == "E") {temp = 14;}
        else if (car == "F") {temp = 15;}
        else temp = car;
        newbin = newbin+this.formattedfor4bits(this.dec2bin(temp));
      }
        return newbin;
    },
    ConvertHexToDecimal(){
      let HexaIee = this.IeeeHexa;
      let Binary = this.calculBinFromHex(HexaIee)
      this.IeeeBin =Binary;
      let Decimal = this.ConvertBinaryToDec(Binary);
      Decimal = Decimal.replace(".",",");
      this.Decimal = Decimal;
    },
    ConvertIeeeToDecimal(){
      let Binary = this.IeeeBin;
      let Decimal = this.ConvertBinaryToDec(Binary);
      Decimal = Decimal.replace(".",",");
      this.Decimal = Decimal;
      let HexaIee = this.calculHexaDecimalFormBinary(Binary);
      this.IeeeHexa = HexaIee;
    },
    ConvertDecimalToIeee(){
      let Signe;
      Signe = '';
      let Decimal = this.Decimal;
      let IeeeBin = "";
      if (Decimal[0] == '-') {
        Signe = 1;
        Decimal = Decimal.substring(1);
      } else {
        Signe = 0;
      }
      let AvantVir = Decimal.substring(0,Decimal.indexOf(","));
      let ApresVir = Decimal.substring(Decimal.indexOf(",")+1);
      ApresVir = "0."+ApresVir;
      let BinAfterVir = this.DecimalApresVirgule2bin(ApresVir);

      let PureBin = this.dec2bin(AvantVir)+" "+BinAfterVir;
      this.Bin = PureBin;


      let BinConsoled = this.dec2bin(AvantVir)+","+BinAfterVir;
      let newVirg = this.getNewExposant(BinConsoled);
      this.Exposant = newVirg;
      let ExposantNorme = newVirg+127;
      this.ExposantNorme = ExposantNorme;
      //**  ExposantBinary */
      let ExposantBinary = this.dec2bin(ExposantNorme);
      let ExposantFullBinary = this.getExposantFullBinary(ExposantBinary);
      //**  ExposantBinary */
      this.ExposantBinary = ExposantBinary;

      this.Mantisse = BinConsoled;
      let BinPoint = BinConsoled.replace(",",".");

      let MantisseNorme = BinPoint * Math.pow(10,-1 * newVirg);
      MantisseNorme = MantisseNorme.toString().replace(".",",");
      this.MantisseNorme = MantisseNorme;
      //** MantisseBinary  */
      let MantisseBinary = MantisseNorme.substring(MantisseNorme.indexOf(",")+1)
      //** MantisseBinary */
      this.MantisseBinary = MantisseBinary;
      let MantisseFullBinary =  this.getMantisseFullBinary(MantisseBinary);
      

      this.BinConsoled =BinConsoled;
      IeeeBin = Signe+ExposantFullBinary+MantisseFullBinary;
      this.IeeeBin = IeeeBin;

      let HexaIee = this.calculHexaDecimalFormBinary(IeeeBin);
      this.IeeeHexa = HexaIee;
      
    },
  },
  data() {
    return {
      Decimal : '0',
      Bin : '',
      Hexa : '',
      IeeeBin : '',
      IeeeHexa : '',
      BinConsoled : '',
      Exposant : '',
      ExposantNorme : '',
      ExposantBinary : '',
      Mantisse : '',
      MantisseNorme : '',
      MantisseBinary : '',
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.recadredclass {
    margin-left: 86px;
}
.buttoner {
    margin-left: 18px;
}
.buttonslist {
    padding-right: 15%;
    padding-top: 9px;
}
</style>
