<template>
    <div class="container">
        <p>Ceci est un test</p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        mounted() {
            console.log('Component mounted.')
            axios.get('http://laravelauth.dev/api/user')
                .then(response => {
                    console.log(response)
                })
        }
    }
</script>
