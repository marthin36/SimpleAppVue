<template>
    <div id="homepage">
       
        <h1>Welcome</h1>
        <!-- <img  v-bind:src="image" > -->
        <p>Selamat Datang di Simple App</p>
        <div class="main-container">
            <div class="content">
             
                <img src="./../assets/icons/coffe.svg">
                   <h2>Content 1</h2>
            </div>
            <div class="content">
                <img src="./../assets/icons/icecream.svg">
                 <h2>Content 2</h2>
            </div>
            <div class="content">
                <img src="./../assets/icons/tea.svg">
                 <h2>Content 3</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            image: "https://img.freepik.com/free-vector/people-putting-puzzle-pieces-together_52683-28610.jpg?size=626&ext=jpg"
        }
    }
}
</script>

<style>
    img{
        text-align: center;
        margin-left: 33%;
        margin-right: 35%;
        margin-top: 5%;
        
    }
    p{
         text-align: center;
         font-size: 60px;
         color: rgba(6, 4, 14, 0.774);
    }
     h2{
         text-align: center;
         font-size: 60px;
         color: rgba(6, 4, 14, 0.774);
    }
    h1{
        margin-top: 6%;
         margin-bottom: 6%;
        font-size: 60px;
        color: rgba(6, 4, 14, 0.774);
    }
    #homepage {
        
  background-color: #92d2f2;
  background: url("../assets/bg_mt.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}
.main-container{
    display:flex;
    display:-moz-flex;
    display:-o-flex;
    display:-webkit-flex;
 
    padding:30px;
    justify-content: space-around;
}
.content{
 
    width:850px;
    height:350px;
    margin:10px;
}
</style>