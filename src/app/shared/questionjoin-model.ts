export class QuestionjoinModel {

    public constructor(public que_id:number,public que_title:string,public que_desc:string,public que_date:string,
                        public que_time:string,public que_photo:string,public flag:string,public view:number,
                        public fk_u_email_id:string,public fk_sub_id:number,public sub_id:number,public sub_name:string,
                        public fk_que_id:number,public u_email_id:string,public u_name:string,public u_password:string,
                        public u_photo:string,public u_mobile_no:string,public u_gender:string,public u_active:string,
                        public u_status:string,public u_type:string)
    {

    }
}
