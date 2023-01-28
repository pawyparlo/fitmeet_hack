const Tag = ({ content = "", children = null, ...restProps }) => {
  return (
    <div
      className="bg-backgroundBlack text-xs px-3 py-1 rounded-md"
      {...restProps}
    >
      {children ? children : content}
    </div>
  );
};

export default Tag;
