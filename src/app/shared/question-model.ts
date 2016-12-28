export class QuestionModel {

    public constructor(public que_id:number,public que_title:string,public que_desc:string,public que_date:string,public que_time:string,public que_photo:string,public flag:string,public view:number,public fk_u_email_id:string,public fk_sub_id:number)
    {

    }
}
