export class NotesJoinModel {

    public constructor(public notes_id:number,public notes_title:string,public notes:string,public fk_u_email_id:string,public fk_sub_id:number,
    public u_email_id:string,public u_name:string,public u_password:string,public u_photo:string,public u_mobile_no:string,public u_gender:string,public u_active:string,public u_status:string,public u_type:string,
    public sub_id:number,public sub_name:string,public sub_photo:string,public fk_course_id:number)
    {

    }
}



