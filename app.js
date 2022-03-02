

const app = new Vue ({

    el: "#app",

    data: {


        contatore : 0,
        messaggioInserito: "",

        contacts: [


            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                active: false,
                messages:[
                    
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
        
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
        
                    },
        
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },

           {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                active: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },

                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },

                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ]
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                active: true,

                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },

                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },

                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },

            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                active: false,

                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },

                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ]
            }


            

        ]
    },

    methods: {
        controlloStatus : function(j) {
            // console.log(this.contacts[this.contatore].messages[j].status)
             if(this.contacts[this.contatore].messages[j].status === "sent"){
                return "messaggio_inviato";
             } else{
                return "messaggio_ricevuto";
             }
        },

        risposta: function(indice){

            const d = new Date();
            const newRisposta = {
                date:`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`,
                text: "ok",
                status: "received"
            };
            
            this.contacts[indice].messages.push(newRisposta);
        },


        aggiungiMessaggio: function(){

            const d = new Date();

            

            console.log(this.messaggioInserito)

            const newObject = {
                date: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`,
                text: this.messaggioInserito,
                status: "sent"
            }

            const indice = this.contatore;

            if(this.messaggioInserito){
                this.contacts[indice].messages.push(newObject);
            }

            setTimeout(()=>{
                this.risposta(indice);
            }, 1000);

            this.messaggioInserito="";
        },
        

        oraInvio: function(date){
            const ora = date.split(" ")[1];
            return ora.substring(0,5);
        },

        oraUltimoAccesso: function(){
            const arrayMessaggiRicevuti= [];
            const arrayMessaggi = this.contacts[this.contatore].messages;
            console.log(arrayMessaggi);
            let k = 0;
            for(let i=0; i < arrayMessaggi.length; i++ ){
                console.log(arrayMessaggi[i].status);
                console.log(arrayMessaggi[i])

                if(arrayMessaggi[i].status === "received"){
                    arrayMessaggiRicevuti[k] = arrayMessaggi[i];
                    k++;

                }
            

            }

            console.log(arrayMessaggiRicevuti.length);
            
            const posizioneUltimoMessaggio = arrayMessaggiRicevuti.length - 1;
            console.log(posizioneUltimoMessaggio);

           const dataUltimoMessaggio = arrayMessaggiRicevuti[posizioneUltimoMessaggio].date;
           console.log(dataUltimoMessaggio);

           return this.oraInvio(dataUltimoMessaggio);
        },

    }
})