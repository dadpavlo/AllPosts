<template>
    <div class="main__page">
        <div class="main__page__item">        
            <p class="header">allpost.com</p>
        </div>
        <div class="main__page__item">        
            <button @click="$router.push({name: 'posts'})"><p>Start creating post</p></button>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main__page{
    font-family: 'Source Code Pro', monospace;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(52.34% 52.34% at 50% 50%, rgba(136, 135, 135, 0.15) 0%, rgba(82, 82, 82, 0) 100%), #343434;}

.header {
    text-align: center;
    font-size: 64px;
    line-height: 80px;
    color: #FFFFFF;
}

.main__page__item {
    margin: 20px;
}

button {
    color: rgba(52, 52, 52, 1);
    transition-duration: 200ms;
    cursor: pointer;
    font-family: 'Source Code Pro', monospace;
    width: 341px;
    height: 54px;
    background: #FFFFFF;
    box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    outline: none;
}

p {
    margin: 0;
    font-size: 24px;
    line-height: 30px;
    font-family: 'Source Code Pro', monospace;
}

button:active {
    color: #FFFFFF;
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(4px);
}

button:hover {
    color: #FFFFFF;
    background-color: rgb(124, 124, 124);
}
</style>