export class order{
    constructor(public  order_id:number,public order_date:string,public order_amount:number ,public payment_type:string,public payment_status:string,public product_id_fk?:number,public user_id_fk?:number,public user_id?:number,public user_password?:string,public user_name?:string,public user_email?:string,public user_age?:number,public user_gender?:string,public user_mob?:number,public user_address?:string,public product_id ? :number,public product_name?:string,public product_color?:string,public product_mfd?:string,public product_price?:number,public product_warr?:number,public product_garr?:number,public product_desc?:string,public product_img1?:string,public product_img2?:string,public product_img3?:string,public cat_id_fk?:number){}
}