<template>
    <div class="canvas-component">
        <canvas id="canvas-src" height="500" width="500"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';
import { CalloutService } from '@/services/CalloutService';

@Component
export default class CanvasComponent extends Vue  {
    @Prop()convasImage: any; 

    private canvas: any = null;

    async mounted(): Promise<void> {
        const resp = await CalloutService.getImage();

        const imageBlob = this.dataURItoBlob(resp);
        this.convasImage = window.URL.createObjectURL(imageBlob);
        const canvasElement = document.getElementById("canvas-src");
        if(canvasElement != null){
            this.canvas = canvasElement.style.background = "url("+this.convasImage+")";
        }
        
        this.fillRect();
    }

    private fillRect(){
        const tempCanvasElement: any  = document.getElementById("canvas-src");
        const ctx = tempCanvasElement.getContext('2d');

        ctx.lineWidth = 0;
        ctx.strokeStyle = "rgba(0,255,0,0.5)";
        
        ctx.rect(225,225,50,50);
        ctx.fillStyle = "rgba(0,255,0,0.5)";
        ctx.fill();

        ctx.stroke();
        window.requestAnimationFrame(this.fillRect);
    }

    private dataURItoBlob(dataURI: any) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/png' });    
        return blob;
    }
}
</script>

<style scoped lang="scss"> 
    .canvas-component{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        canvas{
            border: 1px solid red;
            width: 500px;
            height: 500px;
        }
    }
</style>