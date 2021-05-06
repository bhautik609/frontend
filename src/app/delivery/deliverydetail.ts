export class deliverdetails {
    public constructor(
      public del_id: number,
      public del_date: string,
      public DeliveryBoyId: string,
      public fk_u_EmailId?: string,
      public order_id_fk?: number,
      public u_EmailId?: string,
      public d_id?: number,
      public order_id?: number,
    ) { }
  };
  