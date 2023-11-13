import { db } from "../../db.js";

export const resolvers = {
    Query: {
        //products
        products: () => db.products,
        product: (parent: any, args: { productId: string }, context: any) => {
            // console.log(parent,args,context); // only get the data in the args part
            const result = db.products.find(pd => pd.id === args.productId)
            return result;
        },

        //categories
        categories: () => db.categories,
        category: (parent: any, args: { categoryId: string }, context: any) => {
            // console.log(args)
            const result = db.categories.find(cd => cd.id === args.categoryId);
            return result;
        }
    },

    //when we want to make a relation it is different query
    Product: {
        category: (parent: any, args: any, context: any) => {
            // console.log(parent, args, context); // only get the data in the parent part
            // console.log(parent.categoryId);
            const result = db.categories.find(category => category.id === parent.categoryId);
            return result;
        }
    }
};
