 
<template>
    <header>
    

    
  </header>

  <main>
  
<div class="album ">
  <div class="row ">
    <div class="col-sm-8">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Check out some amazing albums from 90s</h5>
        <p class="card-text">Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
       
      </div>
    </div>
  </div>
   <div class="col-sm-4">
   
  </div>

  </div>
  
</div>
<div class ="row bg-light">
   
    <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
Show {{filter}} entries
     </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item"  @click="setCount(10)" placeholder="10" disabled true>10</a></li>
    <li><a class="dropdown-item"  @click="setCount(25)" placeholder="10" disabled true>20</a></li>
    <li><a class="dropdown-item"  @click="setCount(30)" placeholder="10" disabled true>30</a></li>
  </ul>
  
</div>
        
 <div>
   
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" @click="previousPage(startIndex)">Previous</a></li>
  <li class="page-item"><a class="page-link"  @click="nextPage(end)" >Next</a></li>
  </ul>
  </ul>
  </nav>
 </div>

     

</div>
<div class ="row p-4 m-3 bg-light"  >
 <table class="table table-striped">  
        <thead>  
        <th>Id</th>  
        <th>Picture</th>  
        <th>Tittle</th>  
        <th>Album</th>  
          </thead>  
        <tbody>  
            <tr v-for="item in albums" :key="item.id">  
              
                <td>{{item.id}}</td>  
                
                  <td><img  :src="item.thumbnailUrl" width="55" height="55" alt="img"></td> 
                 <td>{{item.title }}</td>  
                 <td>{{item.albumId}}</td>  
               
            </tr>  
        </tbody>  
    </table>  


</div>



  </main>
</template>
<script >
import axios from "axios";  
import "../../assets/style.css";
import {ref} from "vue";
import Albums from "../../album.js"
import router from "../../router/index.js";

 

  
     
     
     

    export default {  
     
         name: 'AlbumList', 
         
             data() {  
       return {  
      filter:10,
      startIndex:0,
      end:0,
      albums: [], 
      data:[]
    };  
  },  
          created()  
        {  
             this.retrive();  
             
        },  
      
    methods: { 
       
      
     
       setCount(count){
         this.filter=count
         this.end=this.startIndex+this.filter
          this.albums=this.data.slice(this.startIndex,this.end)
     console.log(count);

    },
    nextPage(indexEnd){
      
   
     this.end=indexEnd+this.filter;

     //check if the index end is greater than the data index and set the index to the last index
     if(this.end>this.data.length){
       this.end=this.data.length
     }else{
     
      this.albums=this.data.slice(indexEnd,this.end)
      this.startIndex=indexEnd
      console.log(this.data.length)
     }
      return{
        albums,
        end,
        startIndex,

      }


    },
     previousPage(indexStart){
      this.startIndex=indexStart-this.filter;
      //check if index start is less than  zero and set it to zero
       if(this.startIndex<0){
         this.startIndex=0;
     }
      this.end=this.startIndex+this.filter
     
      this.albums=this.data.slice(this.startIndex,this.end)
      console.log(this.data.length)
      return{
        albums,
        startIndex,
        end,

      }


    },

        retrive() {  
      //      this.albums = [{
      //   "id":1,

      // },{
      //   "id":2,
        
      // },
      // {
      //   "id":3,
        
      // }
      // ]
      Albums.getAll().then(response => {  

        this.end =this.startIndex+this.filter,
        this.data=response.data;
     
       console.log(response.data);  
        this.albums=this.data.slice(this.startIndex,this.end)
     return{
    albums
     }
         
        })  
        .catch(e => {  
          console.log(e);  
        }); 
         
    },  
  

}

 
}  



</script>