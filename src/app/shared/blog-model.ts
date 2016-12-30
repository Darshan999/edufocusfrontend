export class BlogModel {

    public constructor(public blog_id:number,public blog_title:string,public blog_desc:string,public blog_date:string,public blog_time:string,public blog_photo:string,public flag:string,public view:number,public fk_u_email_id:string,public fk_sub_id:number)
    {

    }
}
