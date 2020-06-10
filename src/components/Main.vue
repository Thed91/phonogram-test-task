<template>
    <div class="main">
        <router-link class="btn" to="/table">Table</router-link>
        <router-link class="btn" to="/canvas">Canvas</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Main extends Vue {
 
}
</script>

<style scoped lang="scss">
    $breakpoint-sm: 576px;
    
    .main{
        display: flex;
        justify-content: center;
        background-color: lightslategray;
        .btn{
            margin: 20px;
            min-width: 130px;
            padding: 1em;
            text-decoration: none;
            color: #FFF;
            background: #fd9535;
            border-radius: 4px;
            box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
            font-weight: bold;
        }
        .btn:active {
            border-bottom: solid 2px #fd9535;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
        }
        .btn:hover {
            background: #ffc25c;
        }

        @media (max-width: $breakpoint-sm) {
                flex-direction: column;
                align-items: center;

        }
    }
</style>