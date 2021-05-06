export class delivery{
    constructor(public del_id:number ,public del_date:string, public order_id_fk?:number,public  order_id?:number,public order_date?:string,public order_amount?:number ,public product_id_fk?:number,public payment_type?:string,public payment_status?:string,public user_id_fk?:number){}
}