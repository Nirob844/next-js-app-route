const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>Dynamic Page: {params.id}</h1>
    </div>
  );
};

export default DynamicPage;
