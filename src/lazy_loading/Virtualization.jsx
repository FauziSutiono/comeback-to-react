import { FixedSizeList } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

export const VirtualizedList = () => {
  return (
    <FixedSizeList height={400} width={300} itemSize={35} itemCount={items.length}>
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </FixedSizeList>
  );
};
