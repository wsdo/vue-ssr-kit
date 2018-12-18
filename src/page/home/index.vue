<template>
    <div>
        <NavHeader/>
        <!-- aasad -->
        <!-- <stark></stark> -->
        <!-- <hello/> -->
    </div>
</template>
<script>
    // import stark from '../../components/NavHeader'
    import Hello from '../../components/Hello'
    import NavHeader from 'components/header/Header'

    // import _ from'lodash'
    // import qs from 'qs'
    // import marked from'marked'
    export default {
        name: 'buttons',
        components: {
            // stark,
            Hello,
            NavHeader
        },
        data(){
            return {
                articleList:Object,
                input: '# hello',
                title:'',
                tagSelected:''
            }
        },
        mounted: function(){
            // this.getFrontArticleList()
        },
        methods:{

        }
    }
</script>
