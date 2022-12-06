const {createApp} = Vue;

createApp({
    data(){
        return{
            emailList : [],
            nEmail : 10,
            ready : false,
        }
    },
    mounted(){
        let aux = 0;
        for(let i=0; i<this.nEmail; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=>{
                this.emailList.push(result.data.response);
                aux++;
                if(aux === this.nEmail){
                    this.ready = true;
                }
            });
        }
    }
}).mount("#app");