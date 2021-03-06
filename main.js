const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    BMI: {
        presence: true,
    
    },
    // password: {
    //     presence: true,
    //     length: {
    //         minimum : 6,
    //         message: "must be at least 6 digits"
    //     }, 
    // }
    // chosensubject: {
    //     presence: true
    // }
}
const app = Vue.createApp({

    data() {
        return {
            firstname: null,
            lastname: null,
            age: null,
            gender: null,
            email: null,
            phone: null,
            image1: './face.jpg',
            image2: '',
            BMI: null,
            errors: null,
            defultName: "nattanunkorn9743",

            input:{
               fname:'',
               lname:'',
               age:'',
               gender:'',
               email:'',
               phone:'',
               BMI:'',


            }


        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    BMI:this.BMI,
                                    // chosensubject: this.chosensubject
                                },
                                    constraints)
            if(this.errors){
                e.preventDefault();
            }if(!this.errors){
                alert("Your proflie is update successfully.")
                
            }
           
        }
       
    }
})

window.addEventListener('load', (event) => {
    
    console.log('page is fully loaded');
  });

app.mount('#app')


