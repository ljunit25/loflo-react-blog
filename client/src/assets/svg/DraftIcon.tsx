interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const DraftIcon = ({ width, height, color }: Props) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V6.757L12.001 15.757L11.995 19.995L16.241 20.001L21 15.242V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20ZM21.778 8.808L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808ZM12 12H7V14H12V12ZM15 8H7V10H15V8Z"
        fill={color ? color : "#000"}
      />
    </svg>
  );
};
