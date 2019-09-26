export class Interest {

    user: {
        id: number
        name: string,
        contactNo: string,
        email: string
    }
    monitor: {
        id: number,
        name: string,
        brand: string,
        size: string,
        type: string,
        valid: true
    }
    date: Date;

    public constructor(user:{id:number, name: "", contactNo: "", email: ""},  monitor: {id:number, name: "", brand: "",
    size: "",
    type: "",
    valid: true}, date: Date){

        this.user = user;
        this.monitor = monitor;
        this.date = date;
    }
}