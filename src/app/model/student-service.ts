import { Injectable } from "@angular/core";
import { StudentDetail } from "./student-detail";

@Injectable({
    providedIn: 'root'

})
export class StudentService{
    private studentDetails: StudentDetail[] = [
        {
            id:1,
            nome:'Danilo Vulpiani',
            dob: new Date ("2024-12-05"),
            phone: '3327489543',
            email: 'daniloVulpianiTrans69@gmail.com',
            course: 'JAITA130'

        },
        {
            id:2,
            nome:'Gabriele LoStronzo',
            dob: new Date ("2024-12-06"),
            phone: '3327489545',
            email: 'gabrieleLoStronzoa90@gmail.com',
            course: 'JAITA131'

        },
        {
            id:3,
            nome:"Myryam NonVuoleCampare100Anni",
            dob: new Date ("2024-12-06"),
            phone: '3327489545',
            email: 'MyryamVuoiCampaSioNo?@gmail.com',
            course: 'JAITA130'

        }


    ];
    getStudentDetails():StudentDetail[]{
        return this.studentDetails;
    }
}
