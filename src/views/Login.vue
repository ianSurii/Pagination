<template>
    <header>
    

    
  </header>

  <main>

   <div class="container align-self-center position-absolute top-50 start-50 translate-middle bg-light text-dark ">
     
   
      <img class="h-2" src="../assets/load.gif" width="200" height="150" alt="">
   
  <form name= "loginForm" class="col-6" action="" method='post' >
  <div class="mb-3 ">
    <label for="" class="form-label">Email address</label>
    <input type="email"  name = "email" class="form-control" v-model="email" placeholder="user@mail"  aria-describedby="emailHelp">
    
  </div>
  <br>
  <div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model='password' class="form-control"  :placeholder="123" id="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  name="login" id="login" @click="register" class=" mb-3 btn btn-primary">Login</button>
</form>
</div>
  </main>
</template>

<script setup >
    
    import {ref} from "vue";
    import router from "../router/index.js";

    const email = ref("email");
    const password = ref('password');

    const register =() => {
        if (email.value === "email" && password.value === "password") {

       router.push("/albums")
       
        } else {
             alert("Try again");
        }

    };
</script> 