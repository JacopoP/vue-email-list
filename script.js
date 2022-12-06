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
        for(let i=0; i<this.nEmail; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=>{
                this.emailList.push(result.data.response);
            });
            if(i + 1 === this.nEmail){
                this.ready = true;
            }
        }
    }
}).mount("#app");