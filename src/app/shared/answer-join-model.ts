export class AnswerJoinModel {

    public constructor(public ans_id:number,public ans_desc:string,public ans_date:string,public ans_time:string,public flag:string,public view:number,public fk_que_id:number,public fk_u_email_id:string,
     public u_email_id:string,public u_name:string,public u_password:string,public u_photo:string,public u_mobile_no:string,public u_gender:string,public u_active:string,public u_status:string,public u_type:string
     )
    {

    }
}


