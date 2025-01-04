const transformation = {
  name: "transformation",
  type: "document",
  title: "Transformation",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "additionalImages",
      type: "array",
      title: "Additional Images",
      of: [{ type: "image" }],
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    },
  ],
};

export default transformation;
