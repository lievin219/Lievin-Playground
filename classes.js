class perimeter{
    constructor(height,width){
         this.height=height;
         this.square=width
    }

    area(){
        console.log(this.height*this.square)
    }
}

const exampe=new perimeter(22,33)

console.log(exampe.area())