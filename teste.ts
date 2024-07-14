const FilePath = import.meta.resolve("site/sections/hero-1.tsx");

const content = await fetch(FilePath).then((reponse) => reponse.text());

console.log(FilePath);
