const app = Vue.createApp({
    data() {
        return {
            alertMessage: 'Alert!', 
            userOutput: '',
            userOutputKeydown: '',
            userOutputEnter: '',
        }
    },
    methods: {
        userAlert(){
            alert(this.alertMessage);
        },
        userInputKeydown(){
            this.userOutputKeydown = this.userOutput;
        },
        userInputEnter(){
            this.userOutputEnter = this.userOutput;
        },
        userInput(event){
            this.userOutput = event.target.value;
        }, 
    },
}).mount('#assignment')