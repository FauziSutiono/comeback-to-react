export const RecursiveCategory = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.name}>
          {category.name}
          {category.subcategories && category.subcategories.length > 0 && <RecursiveCategory categories={category.subcategories} />}
        </li>
      ))}
    </ul>
  );
};
