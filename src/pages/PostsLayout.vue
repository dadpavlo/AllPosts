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
    },
    data() {
        return {
            pageNumber: 0
        }
    },
    props:{
        listData:{
            type:Array,
            required:true
        },
        size:{
            type:Number,
            required:false,
            default: 5
        }
    },
    methods:{
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
    }, 
    computed: {
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.listData.slice(start, end);
        },
        pageCount(){
            let l = this.listData.length,
            s = this.size;
            return Math.ceil(l/s);
        }
    }
}
</script>

<style scoped>

</style>