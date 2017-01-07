export class BlogjoinModel {

    public constructor(public blog_id:number,public blog_title:string,public blog_desc:string,public blog_date:string,
                        public blog_time:string,public blog_photo:string,public flag:string,public view:number,
                        public fk_u_email_id:string,public fk_sub_id:number,public sub_id:number,public sub_name:string,
                        public sub_photo:string,public fk_course_id:number,public u_email_id:string,public u_name:string,
                        public u_password:string,public u_photo:string,public u_mobile_no:string,public u_gender:string,
                        public u_active:string,public u_status:string,public u_type:string)
    {

    }
}
