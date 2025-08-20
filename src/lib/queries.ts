export const MODELOS_ALL = `*[_type=="modelo"]{ name, "slug": slug.current, intro, nationality, resides, photo } | order(name asc)`;
export const MODELO_BY_SLUG = `*[_type=="modelo" && slug.current==$slug][0]{ name, "slug": slug.current, intro, nationality, resides, photo }`;
