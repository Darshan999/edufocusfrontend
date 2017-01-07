export class NewsjoinModel {

    public constructor(public news_id:number,public news_title:string,public news_desc:string,public news_photo:string,
                    public news_date:string,public news_time:string,public fk_u_email_id:string,public u_email_id:string,
                    public u_name:string,public u_password:string,public u_photo:string,public u_mobile_no:string,
                    public u_gender:string,public u_active:string,public u_status:string,public u_type:string)
    {

    }
}
