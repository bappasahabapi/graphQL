import { db } from "../../db.js";

export const resolvers = {
    Query: {
        //products
       products : () => db.products,
       product: (parent:any,args:{productId:string},context:any) => {
        // console.log(parent,args,context);
        const result =db.products.find(pd =>pd.id === args.productId)
        return result;
       },

       //categories
       categories:()=>db.categories,
       category:(parent:any, args:{categoryId:string},context:any)=>{
        // console.log(args)
        const result=db.categories.find(cd=>cd.id===args.categoryId);
        return result;
       }


    },
};
