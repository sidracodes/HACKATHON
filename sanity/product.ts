import { defineType, defineField } from "sanity";
export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "product",
      type: "number",
      title: " Product Number",
    }),
    defineField({
      name: "name",
      type: "string",
      title: " Product Name",
    }),
    defineField({
      name: "quantity",
      type: "number",
      title: " Product Quantity",
    }),
    defineField({
      name: "title",
      type: "string",
      title: " Product Title",
    }),
    defineField({
      name: "idc",
      type: "number",
      title: " Product Id",
    }),
 
    defineField({
      name: "image",
      type: "image",
      title: " Product Image",
    }),
   
    defineField({
      name: "price",
      type: "number",
      title: " Product Price",
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: " Product Tagline",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options:{
        source: "name"
      }
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
      title: " Product Category",
    }),
  ],
});
