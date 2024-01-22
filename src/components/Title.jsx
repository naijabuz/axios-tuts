const Title = ({ data }) => {
  return (
    <div className="title">
      <h1>
        <span onClick={data}>axios</span> tutorial
      </h1>
    </div>
  );
};
export default Title;
