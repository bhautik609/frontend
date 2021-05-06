export class  Track {
  public constructor(
    public track_id:number,
    public status:string,
    public delivery_id_fk ?: number,
    public del_id ?: number
  ){}
}