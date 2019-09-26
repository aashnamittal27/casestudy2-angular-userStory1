import { MessageOption } from './messageOption';

type contentType = {
    id: number;
    sno: number;
    question: string;
    selector: boolean;
}

export class Message {

    // content: [{id: 0,
    //     sno: 0,
    //     question: "",
    //     selector: false}];
    content: [{}];
    timestamp: Date;

    public constructor(content: any,timestamp:Date)
    {
        //this.content = content;
        this.timestamp = timestamp;
        this.content = content;
    }
}