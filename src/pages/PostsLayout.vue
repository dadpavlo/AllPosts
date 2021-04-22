<template>
    <div class="posts">
        <main-header/>
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'

export default {
    components: {
        MainHeader,
    }
}
</script>

<style scoped>

</style>