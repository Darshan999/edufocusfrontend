export class AnswerModel {
    
   public constructor(public ans_id:number,public ans_desc:string,public ans_date:string,public ans_time:string,public view:number,public fk_que_id:number,public fk_u_email_id:string)
   {

   }
}


