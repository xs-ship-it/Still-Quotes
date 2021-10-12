export class Quote {
    showQuoteDetails:boolean;
    constructor( public id:number,public author:string,public publisher:string,public description:string ,public date:Date){
        this.showQuoteDetails=false;
  
    }
}
