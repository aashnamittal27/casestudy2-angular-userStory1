export class query {
    user: {
        name: string,
        contactNo: string,
        email: string
    }
    monitor: {
        name: string
    }
    idate: {
        date: Date
    }

    public constructor(user:{name: "", contactNo: "", email: ""}, monitor: {name: ""}, idate: {date: Date})
    {
        this.user = user;
        this.monitor = monitor;
        this.idate = idate;

    }
}