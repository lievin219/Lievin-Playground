interface User{
     name:string;
     id:number
}

 const users:User={
    name:'Gakiza Lievin',
    id:80
 }

 type combination=Number|string

  const gakiza:combination=3000

   function getLength(characters:number[]|string){
       if(typeof characters==='string'){
          console.log(characters.length)
       }
       console.log(characters.length)
   }
   getLength('1234')

   //type anootation using interaface

    interface user{
       name:string;
       id:number
    }

     class driving{
 name:string;
 id:number
 constructor(name:string,id:number){
    this.name=name;
    this.id=id
 }
     }

     const user:User=new driving("gakiza",5)