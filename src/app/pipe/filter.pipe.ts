import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(items:any, filter:any, defaultFilter:boolean): any {\
    if(!filter){
      return items;
    }
    if(!Array.isArray(items)){
      return items;
    }
    if(filter && Array.isArray(items)){
      let filterKey = Object.keys(filter);
      if(defaultFilter){
        return items.filter(items =>{
          filterKey.reduce((x, keyName) => (x && new RegExp(filter[keyName])) || filter[keyName]== "", true);
        })
      }else{
        return items.filter(items => {
          return filterKey.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(items[keyName])|| filter[keyName] == "";
          })
        })
      }

    }
  }

}
