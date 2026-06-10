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