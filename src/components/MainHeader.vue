<template>
    <header>
        <div class="container"> 
            <div class="logo" @click="$router.push({name: 'mainPage'})"><p>allposts.com</p></div>
            <div class="container__item"><p>Sign up</p></div>
            <div class="container__item"><p>login</p></div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scoped>
header {
    font-family: 'Source Code Pro', monospace;
    position: fixed;
    font-size: 20px;
    color: rgb(246, 245, 255);
    background: #2D2D2D;
    box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
    top: 0;
    width: 100%;
}
.container{
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    justify-content: space-around;
}
.container__item {
    min-width: 150px;
    flex-grow: 1;
    font-size: 30px;
    transition-duration: 200ms;
}

.container__item:hover {
    cursor: pointer;
    color: #FFFFFF;
    background-color: rgb(124, 124, 124);
    color: rgb(255, 255, 255);
}
.logo {
    cursor: pointer;
    font-size: 30px;
    width: 80%;
    text-align: start;
    padding-left: 5%;
}
p {
    padding: 5px;
    margin-bottom: 0px;
    margin-top: 0px;
}
</style>