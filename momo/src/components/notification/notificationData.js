class SingletonClass {
    
    constructor() {
        if (!!SingletonClass.instance) {
            return SingletonClass.instance;
        }

        SingletonClass.instance = this;
        this.data=[
            {title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
            time:"20/11/2019"
            ,seen:false},
            {title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
            time:"20/11/2019"
            ,seen:false},
            {title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
            time:"20/11/2019"
            ,seen:false},
            {title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
            time:"20/11/2019"
            ,seen:false},
            {title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
            time:"20/11/2019"
            ,seen:false}
            
        ]
        

        return this;
    }
    getNotification(){
        return this.data
    }
}