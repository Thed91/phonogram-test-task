<template>
    <div class="table-component">
        <el-table 
        :data="fruitsValues" 
        stripe 
        :row-class-name="tableRowClassName"
        :default-sort="{prop: 'key', order: 'ascending'}">
          <el-table-column prop="key" label="Keys" width="140" sort-by="index" sortable>
          </el-table-column>
          <el-table-column prop="value" label="Fruits" width="120" sortable>
          </el-table-column>
        </el-table> 
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';
import { CalloutService } from '@/services/CalloutService';

@Component({
  methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
    }
})
export default class TableComponent extends Vue {
  @Prop()fruitsValues: any;

  private fruitsObject: any;
  private fruitsKeys: any;

  async mounted(): Promise<void> {
    const resp = await CalloutService.getAllFruit();
    this.fruitsObject = JSON.parse(JSON.stringify(resp));    
    this.fruitsKeys = Object.getOwnPropertyNames(this.fruitsObject);

    this.setFruitsValue();
  }

  private setFruitsValue(){
    this.fruitsValues = new Array(this.fruitsKeys.length);
      for (let index = 0; index < this.fruitsKeys.length; index++) {
        const element = this.fruitsKeys[index];
        const elementNumber: number = +element.substring(3);
        const newFruit = {key: "", value: "", index: 0}
        newFruit.key = element;
        newFruit.value = this.fruitsObject[element].fruit
        newFruit.index = elementNumber;
        this.fruitsValues[index] = newFruit;
      }  
  }
}
</script>

<style scoped lang="scss">
  .table-component{
    width: 20%;
    margin: 0 auto;
    margin-top: 40px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>