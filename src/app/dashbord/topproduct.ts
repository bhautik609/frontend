export class TopProducts {
    public constructor(
      public product_id_fk: number,
      public product_name: string,
      public total: number
    ) {
  
    }
  }